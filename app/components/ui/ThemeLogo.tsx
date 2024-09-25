import { teams } from "~/config/teams";

type Props = {
  theme: string;
};

export default function ThemeLogo({ theme }: Props) {
  return <div>{teams.find((t) => t.abbr === theme)?.logo?.()}</div>;
}
