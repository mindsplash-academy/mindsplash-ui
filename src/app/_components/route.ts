import { NextResponse } from "next/server";

const BACKEND_URL =
  "https://mindsplash-be-849133147929.us-central1.run.app/api/v1/users";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("=================================");
    console.log("CONTACT API REQUEST");
    console.log("=================================");
    console.log(JSON.stringify(body, null, 2));

    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    // Read the response as TEXT first.
    // This prevents JSON parsing from hiding the real backend error.
    const responseText = await response.text();

    console.log("=================================");
    console.log("BACKEND RESPONSE");
    console.log("Status:", response.status);
    console.log("Status Text:", response.statusText);
    console.log("Response:", responseText);
    console.log("=================================");

    let data: unknown = null;

    try {
      data = responseText ? JSON.parse(responseText) : null;
    } catch {
      data = responseText;
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            typeof data === "object" &&
            data !== null &&
            "message" in data
              ? String((data as { message?: unknown }).message)
              : `Backend returned ${response.status} ${response.statusText}`,
          backendStatus: response.status,
          backendResponse: data,
        },
        {
          status: response.status,
        }
      );
    }

    return NextResponse.json({
      success: true,
      status:
        typeof data === "object" &&
        data !== null &&
        "status" in data
          ? (data as { status?: unknown }).status
          : "success",
      message:
        typeof data === "object" &&
        data !== null &&
        "message" in data
          ? String((data as { message?: unknown }).message)
          : "Your demo class request has been submitted successfully.",
      data,
    });
  } catch (error) {
    console.error("=================================");
    console.error("CONTACT API SERVER ERROR");
    console.error(error);
    console.error("=================================");

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to connect to the MindSplash server.",
      },
      { status: 500 }
    );
  }
}