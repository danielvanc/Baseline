import { render, screen } from "@testing-library/react";
import LatestNews from "~/components/latestNews";
import { latestNews } from "./mocks";

function setUp() {
  render(<LatestNews data={latestNews} />);
}

test("Renders LatestNews component successfully", () => {
  setUp();

  expect(
    screen.getByRole("heading", {
      name: /latest news/i,
    })
  ).toBeInTheDocument();
});

test("Renders LatestNews with correct amount of news items and content", () => {
  setUp();

  const newsItemsList = screen.getByRole("list");
  expect(newsItemsList).toBeInTheDocument();
  expect(newsItemsList.children).toHaveLength(5);

  Array.from(newsItemsList.children).forEach((item) => {
    expect(item.querySelector("a")).toBeInTheDocument();
  });

  expect(
    screen.getByRole("link", {
      name: /all latest news »/i,
    })
  ).toBeInTheDocument();
});

test("Renders LatestNews news items links to have new tab opener attribute", () => {
  setUp();

  const newsItemsList = screen.getByRole("list");

  Array.from(newsItemsList.children).forEach((item) => {
    expect(item.querySelector("a")).toHaveAttribute("target", "_blank");
  });
});
