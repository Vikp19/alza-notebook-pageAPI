export async function post<TResponse>(
  url: string,
  body: unknown,
  timeoutMs = 10_000,
): Promise<TResponse> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    return (await response.json()) as TResponse;
  } finally {
    clearTimeout(id);
  }
}
