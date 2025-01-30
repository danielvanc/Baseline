import { render, screen } from "~/__tests__/utils";
import LatestNews from "~/components/latestNews";
import { getLatestNews } from "~/utils/news";

async function setUp() {
  const latestNews = await getLatestNews();
  render(<LatestNews data={latestNews} />);
}

test("Renders LatestNews component successfully", async () => {
  await setUp();

  expect(
    screen.getByRole("heading", {
      name: /latest news/i,
    })
  ).toBeInTheDocument();
});

test("Renders LatestNews with correct amount of news items and content", async () => {
  await setUp();

  const newsItemsList = screen.getByRole("list");
  expect(newsItemsList).toBeInTheDocument();
  expect(newsItemsList.children).toHaveLength(10);

  Array.from(newsItemsList.children).forEach((item) => {
    expect(item.querySelector("a")).toBeInTheDocument();
  });

  expect(
    screen.getByRole("link", {
      name: /all latest news »/i,
    })
  ).toBeInTheDocument();
});

test("Renders LatestNews news items links to have new tab opener attribute", async () => {
  await setUp();

  const newsItemsList = screen.getByRole("list");

  Array.from(newsItemsList.children).forEach((item) => {
    expect(item.querySelector("a")).toHaveAttribute("target", "_blank");
  });
});
