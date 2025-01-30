import { http, HttpHandler, HttpResponse } from "msw";
import { endpoints } from "~/config/api";

export const latestNews: Array<HttpHandler> = [
  http.get(endpoints.latestNews, () => {
    return HttpResponse.json([
      {
        title: "Wemby gets a hero’s welcome in Paris",
        url: "https://www.nba.com/news/victor-wembanyama-gets-a-heros-welcome-in-paris",
        source: "nba",
      },
      {
        title: "NBA Storylines: Most improved defenses this season",
        url: "https://www.nba.com/news/nba-storylines-most-improved-defenses-2024-25",
        source: "nba",
      },
      {
        title: "Cavs' Atkinson earns spot as 2025 All-Star coach",
        url: "https://www.nba.com/news/kenny-atkinson-cavaliers-2025-all-star-coach",
        source: "nba",
      },
      {
        title: "League Pass Game of the Day: Kings vs. Nuggets",
        url: "https://www.nba.com/news/league-pass-game-of-the-day-kings-vs-nuggets-9-et",
        source: "nba",
      },
      {
        title: "Hornets' Miller (wrist) has season-ending surgery",
        url: "https://www.nba.com/news/hornets-brandon-miller-out-for-season-torn-ligament-right-wrist",
        source: "nba",
      },
      {
        title: "Nightly Pulse: NBA news & highlights from Jan. 23",
        url: "https://www.nba.com/news/nightly-pulse-nba-news-highlights-from-jan-23",
        source: "nba",
      },
      {
        title: "Magic's Franz Wagner (oblique) available vs. Blazers",
        url: "https://www.nba.com/news/magic-franz-wagner-returns-after-20-game-absence",
        source: "nba",
      },
      {
        title: "Heat-Bucks game delayed an hour due to travel",
        url: "https://www.nba.com/news/bucks-heat-game-delayed-an-hour-due-to-travel",
        source: "nba",
      },
      {
        title: "NBA Fantasy – Salary Cap Edition: Midseason Top 5",
        url: "https://www.nba.com/news/nba-fantasy-salary-cap-edition-midseason-top-5",
        source: "nba",
      },
      {
        title: "Tissot expands partnership with NBA, WNBA, G League",
        url: "https://www.nba.com/news/tissot-expands-global-multiyear-marketing-partnership-nba-wnba-g-league",
        source: "nba",
      },
    ]);
  }),
];
