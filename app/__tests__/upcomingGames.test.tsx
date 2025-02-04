import { render, screen } from "~/__tests__/utils";
import UpcomingGames from "~/components/upcomingGames";
import { getUpcomingGames } from "~/utils/games";

async function setUp() {
  const upcomingGames = await getUpcomingGames();
  console.log("upcomingGames", upcomingGames);

  render(<UpcomingGames data={upcomingGames} theme="all" />);
}

test("Renders Upcoming games component successfully", async () => {
  await setUp();

  expect(
    screen.getByRole("heading", {
      name: /upcoming games/i,
    })
  ).toBeInTheDocument();
});

// TODO: Fix test to use fixed date and ranage
test.skip("Renders correct amount of games", async () => {
  // await setUp();
  // const gamesList = screen.getByRole("list");
  // expect(gamesList).toBeInTheDocument();
  // expect(gamesList.children).toHaveLength(3);
  // screen.debug();
});
