export function pickRandom<T>(items: T[], count: number): T[] {
  const result = [...items];
  const limit = Math.min(count, result.length);

  for (let i = result.length - 1; i > result.length - 1 - limit; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.slice(result.length - limit);
}
