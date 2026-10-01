const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "");

export const USERS_API_URL = API_BASE_URL
  ? `${API_BASE_URL}/api/v1/users`
  : "https://mindsplash-be-849133147929.us-central1.run.app/api/v1/users";

export async function submitUser(payload: Record<string, unknown>) {
  const response = await fetch(USERS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data: unknown = await response.json().catch(() => null);
  const result = data && typeof data === "object" ? data as { message?: string; status?: string } : {};

  if (!response.ok || result.status !== "success") {
    throw new Error(result.message || `Request failed (HTTP ${response.status})`);
  }

  return result;
}
