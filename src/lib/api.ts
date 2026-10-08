export async function submitUser(payload: Record<string, unknown>) {
  const response = await fetch("/api/v1/users", {
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
