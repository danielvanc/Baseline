import { render, screen, createRoutesStub, userEvent } from "~/__tests__/utils";
import Header from "~/components/header";

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

afterAll(() => {
  vi.clearAllMocks();
});

beforeEach(() => {
  const spanRef = { current: document.createElement("span") };

  const HeaderStub = createRoutesStub([
    {
      path: "/",
      Component: () => {
        return <Header defaultTheme="all" newTheme={"all"} spanRef={spanRef} />;
      },
      HydrateFallback: () => null,
    },
  ]);

  render(<HeaderStub />);
});

test("Renders Header component successfully", () => {
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getAllByRole("navigation")[0]).toBeInTheDocument();
  expect(screen.getAllByRole("navigation")[1]).toBeInTheDocument();

  const logoLink = screen.getByRole("link", { name: /base line/i });
  expect(logoLink).toBeInTheDocument();
  expect(logoLink).toHaveAttribute("href", "/");
});

test("Renders dropdown successfully when clicked on", async () => {
  const dropdown = screen.getByRole("button", { name: /all all teams/i });
  expect(dropdown).toBeInTheDocument();

  await userEvent.click(dropdown);

  expect(screen.getByText("Phoenix Suns")).toBeInTheDocument();
});
