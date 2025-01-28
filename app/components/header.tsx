import { Form, Link, useSubmit } from "react-router";
import React from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { teams } from "~/config/teams";
interface HeaderProps {
  newTheme: string;
  defaultTheme: string;
  spanRef: React.RefObject<HTMLSpanElement>;
}

export default function Header({
  newTheme,
  defaultTheme,
  spanRef,
}: HeaderProps) {
  const submitTeamSelection = useSubmit();
  const fallbackValue =
    teams.find((t) => t.abbr === newTheme)?.abbr || defaultTheme;
  const [selected, setSelected] = React.useState<string | null>(fallbackValue);
  React.useEffect(() => {}, [selected]);

  return (
    <header className="pt-8 pb-0 md:pb-8 mb-16 border-white md:border-b-[1px] border-opacity-20">
      <nav className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="logo text-6xl text-skin-base">
          <Link to="/">
            <span className="underline">Base</span>Line
          </Link>
        </div>
        <div className="pt-1 relative mt-7 md:mt-0">
          <nav>
            <ul className="flex items-center text-white space-x-8 leading-9">
              <li className="w-[215px]">
                <Form method="post" id="team-form">
                  <Listbox
                    defaultValue={fallbackValue}
                    value={selected}
                    onChange={(selected) => {
                      const selectedTeam = {
                        team: selected,
                      };
                      setSelected(selected);
                      submitTeamSelection(selectedTeam, {
                        method: "post",
                      });
                    }}
                  >
                    <div className="relative mt-2">
                      <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <span ref={spanRef} className="hidden">
                          {selected ?? "All teams"}
                        </span>
                        <span className="block truncate">
                          {teams?.find((team) => team.abbr === selected)
                            ?.name ?? "All teams"}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-400"
                          />
                        </span>
                      </ListboxButton>

                      <ListboxOptions
                        transition
                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                      >
                        <ListboxOption
                          key={`theme-no-team`}
                          value={defaultTheme}
                          className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                        >
                          <span className="block truncate font-normal group-data-[selected]:font-semibold">
                            All teams
                          </span>

                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                            <CheckIcon aria-hidden="true" className="h-5 w-5" />
                          </span>
                        </ListboxOption>
                        {teams.map((team) => (
                          <ListboxOption
                            key={`theme-${team.abbr}`}
                            value={team.abbr}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                          >
                            <span className="block truncate font-normal group-data-[selected]:font-semibold">
                              {team.name}
                            </span>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                              <CheckIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                              />
                            </span>
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </div>
                  </Listbox>
                </Form>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}
