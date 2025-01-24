# Welcome to Baseline!

An NBA Stats app built with [React 19](https://react.dev/), [React Router v7](https://reactrouter.com/), [Tailwind CSS](https://tailwindcss.com/) , [TypeScript](https://www.typescriptlang.org/), [Zod](https://zod.dev/), [Conform](https://conform.guide/), [MSW](https://mswjs.io/) and more.

## Features

- [x] See latest team scores from today (or yesterday or most recent whichever is most relevant) on homepage)
- [x] Switch between your favourite teams and have your favourite team preferences saved for next time you visit (not currently persisted accross devices)
- [ ] Switch between teams to view scores and stats relevant to that team
- [x] View teams standings
- [x] View upcoming games
- [ ] View top stats for each individual game
- [x] View latest (top) news accross all teams
- [ ] View latest (top) news relevant to that team

## Development

To run the local environment with mocks disabled:

```sh
npm run dev
```

To run the local environment with mocks enabled:

```sh
npm run dev:mock
```

## Local Production testing

First run a build

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```
