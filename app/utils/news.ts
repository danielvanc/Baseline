import { endpoints } from "~/config/api";

export interface NewsItem {
  title: string;
  url: string;
}

export async function getLatestNews() {
  // TODO: Add Error Handling
  const response = await fetch(endpoints.latestNews);
  const json = await response.json();

  return json;
}
