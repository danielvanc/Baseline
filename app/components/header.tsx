import { useFetcher, useSubmit } from "@remix-run/react";
import React from "react";
import { teams } from "~/config/teams";
import { action } from "~/root";

interface HeaderProps {
  newTheme: string;
  defaultTheme: string;
  formRef: React.RefObject<HTMLSelectElement>;
}

export default function Header({
  newTheme,
  defaultTheme,
  formRef,
}: HeaderProps) {
  const teamFetcher = useFetcher<typeof action>();
  const submitTeamSelection = useSubmit();

  return (
    <header className="py-8 border-white border-b-[1px] border-opacity-20">
      <nav className="flex justify-between items-center">
        <div className="logo text-6xl text-skin-base">
          <span className="underline">Base</span>Line
        </div>
        <div className="pt-1">
          <teamFetcher.Form method="post">
            <select
              name="team"
              onChange={(e) => submitTeamSelection(e.target.form)}
              ref={formRef}
              defaultValue={teams.find((t) => t.abbr === newTheme)?.abbr}
            >
              <option key={`theme-no-team`} value={defaultTheme}>
                All teams
              </option>
              {teams.map((team) => (
                <option key={`theme-${team.abbr}`} value={team.abbr}>
                  {team.name}
                </option>
              ))}
            </select>
          </teamFetcher.Form>
        </div>
      </nav>
    </header>
  );
}
