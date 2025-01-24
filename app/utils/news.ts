import { endpoints } from "~/config/api";

export interface NewsItem {
  title: string;
  url: string;
}

export async function getLatestNews() {
  // TODO: Add Error Handling
  const response = await fetch(`${endpoints.latestNews}?source=nba&limit=10`);
  const json = await response.json();

  return json;
}
