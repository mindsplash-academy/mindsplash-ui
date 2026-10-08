import { NextResponse } from "next/server";

const DEFAULT_API_BASE_URL = "https://mindsplash-be-849133147929.us-central1.run.app";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ status: "error", message: "Invalid form data." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ status: "error", message: "Invalid form data." }, { status: 400 });
  }

  const apiBaseUrl = (
    process.env.API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    DEFAULT_API_BASE_URL
  ).replace(/\/$/, "");

  try {
    const upstreamResponse = await fetch(`${apiBaseUrl}/api/v1/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const responseBody = await upstreamResponse.text();

    return new Response(responseBody, {
      status: upstreamResponse.status,
      headers: {
        "Content-Type": upstreamResponse.headers.get("content-type") || "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Lead API request failed:", error);
    return NextResponse.json(
      { status: "error", message: "Unable to reach the form service. Please call us or try again later." },
      { status: 502 },
    );
  }
}
