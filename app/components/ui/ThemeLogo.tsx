import { teams } from "~/config/teams";

type Props = {
  theme: string;
};

export default function ThemeLogo({ theme }: Props) {
  return (
    <div className="absolute z-[-1]">
      {teams.find((t) => t.abbr === theme)?.logo?.()}
    </div>
  );
}
