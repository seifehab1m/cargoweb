export async function fetcher(url_: string, query?: string) {
  const url = process.env.NEXT_PUBLIC_API_URL + url_ + "?" + query;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${"token"}` },
    next: { tags: [""] },
  });

  if (!res.ok) throw new Error("Could not fetch data from " + url);

  return res.json();
}
