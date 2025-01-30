import { test, expect } from "@playwright/test";

test("Has an expected title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Baseline/i);
});

test("Headings show", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /Previous Games/i,
    })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: /Standings/i,
    })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: /Upcoming Games/i,
    })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: /Latest News/i,
    })
  ).toBeVisible();
});

test("Successfully loads game stats page", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "Miami Heat 15 / 11 124 - 111" })
    .click();
  await page.goto("http://localhost:3000/game/0022400009/2024-11-15");
  expect(page.getByText("Miami Heat")).toBeVisible();

  expect(page.getByText("Indiana Pacers")).toBeVisible();

  expect(
    page
      .locator("div")
      .filter({ hasText: /^Wins: 5Losses: 6$/ })
      .locator("img")
  ).toBeVisible();

  expect(
    page
      .locator("div")
      .filter({ hasText: /^Wins: 5Losses: 7$/ })
      .locator("img")
  ).toBeVisible();

  expect(
    page.getByRole("heading", { name: "Score per period" }).first()
  ).toBeVisible();

  expect(
    page
      .locator("div")
      .filter({
        hasText:
          /^Game leaderBam Adebayo \(C-F\)Points: 30Assists: 7Rebounds: 11$/,
      })
      .getByRole("heading")
  ).toBeVisible();

  expect(
    page
      .locator("div")
      .filter({
        hasText:
          /^Game leaderTyrese Haliburton \(G\)Points: 18Assists: 8Rebounds: 2$/,
      })
      .getByRole("heading")
  ).toBeVisible();

  expect(
    page
      .locator("div")
      .filter({
        hasText:
          /^Team leaderTyler Herro \(G\)Points: 24\.1Assists: 5\.4Rebounds: 5\.6$/,
      })
      .getByRole("heading")
  ).toBeVisible();

  expect(
    page
      .locator("div")
      .filter({
        hasText:
          /^Team leaderPascal Siakam \(F\)Points: 20\.2Assists: 3\.4Rebounds: 7\.4$/,
      })
      .getByRole("heading")
  ).toBeVisible();

  await page.getByRole("link", { name: "Home" }).click();

  await expect(
    page.getByRole("heading", {
      name: /Upcoming Games/i,
    })
  ).toBeVisible();
});
