import { render, screen } from "@testing-library/react";
import StandingsList from "~/components/standings-list";
import { getLatestStandings, type TeamTableRow } from "~/utils/games";

function setUp(heading: "Eastern" | "Western", data: TeamTableRowp[]) {
  render(<StandingsList heading={heading} theme="all" data={data} />);
}

test("Renders East standings successfully", async () => {
  const { east } = await getLatestStandings();

  setUp("Eastern", east);

  // screen.debug();

  expect(screen.getByText("Eastern")).toBeInTheDocument();
  expect(screen.queryByText("Western")).not.toBeInTheDocument();
});

test("Renders East standings with correct amount of teams", async () => {
  const { east } = await getLatestStandings();

  setUp("Eastern", east);

  const teamList = screen.getByTestId("team-list");
  expect(teamList).toBeInTheDocument();

  expect(teamList.children).toHaveLength(15);
});

test("Renders East standings with correct amount of headings", async () => {
  const { east } = await getLatestStandings();

  setUp("Eastern", east);

  const headings = screen.getByTestId("headings");
  expect(headings).toBeInTheDocument();

  const headingItems = headings.children;

  expect(headingItems).toHaveLength(3);
  expect(headingItems[0]).toHaveTextContent("W");
  expect(headingItems[1]).toHaveTextContent("L");
  expect(headingItems[2]).toHaveTextContent("W%");
});

test("Renders West standings successfully", async () => {
  const { west } = await getLatestStandings();

  setUp("Western", west);
  expect(screen.getByText("Western")).toBeInTheDocument();
  expect(screen.queryByText("Eastern")).not.toBeInTheDocument();
});

test("Renders West standings with correct amount of teams", async () => {
  const { west } = await getLatestStandings();

  setUp("Western", west);

  const teamList = screen.getByTestId("team-list");
  expect(teamList).toBeInTheDocument();

  expect(teamList.children).toHaveLength(15);
});

test("Renders West standings with correct amount of headings", async () => {
  const { west } = await getLatestStandings();

  setUp("Western", west);

  const headings = screen.getByTestId("headings");
  expect(headings).toBeInTheDocument();

  const headingItems = headings.children;

  expect(headingItems).toHaveLength(3);
  expect(headingItems[0]).toHaveTextContent("W");
  expect(headingItems[1]).toHaveTextContent("L");
  expect(headingItems[2]).toHaveTextContent("W%");
});
