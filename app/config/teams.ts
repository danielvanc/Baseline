import { z } from "zod";
import ATL from "~/components/ui/logos/ATL";
import BKN from "~/components/ui/logos/BKN";
import BOS from "~/components/ui/logos/BOS";
import CHA from "~/components/ui/logos/CHA";
import CHI from "~/components/ui/logos/CHI";
import CLE from "~/components/ui/logos/CLE";
import DAL from "~/components/ui/logos/DAL";
import DEN from "~/components/ui/logos/DEN";
import DET from "~/components/ui/logos/DET";
import GSW from "~/components/ui/logos/GSW";
import HOU from "~/components/ui/logos/HOU";
import IND from "~/components/ui/logos/IND";
import LAC from "~/components/ui/logos/LAC";
import LAL from "~/components/ui/logos/LAL";
import MEM from "~/components/ui/logos/MEM";
import MIA from "~/components/ui/logos/MIA";
import MIL from "~/components/ui/logos/MIL";
import MIN from "~/components/ui/logos/MIN";
import NOP from "~/components/ui/logos/NOP";
import NYK from "~/components/ui/logos/NYK";
import OKC from "~/components/ui/logos/OKC";
import ORL from "~/components/ui/logos/ORL";
import PHI from "~/components/ui/logos/PHI";
import PHX from "~/components/ui/logos/PHX";
import POR from "~/components/ui/logos/POR";
import SAC from "~/components/ui/logos/SAC";
import SAS from "~/components/ui/logos/SAS";
import TOR from "~/components/ui/logos/TOR";
import UTA from "~/components/ui/logos/UTA";
import WAS from "~/components/ui/logos/WAS";

export const TeamSelector = z.object({
  team: z.string(),
});

export const teams = [
  { abbr: "ATL", name: "Atlanta Hawks", logo: ATL },
  { abbr: "BOS", name: "Boston Celtics", logo: BOS },
  { abbr: "BKN", name: "Brooklyn Nets", logo: BKN },
  { abbr: "CHA", name: "Charlotte Hornets", logo: CHA },
  { abbr: "CHI", name: "Chicago Bulls", logo: CHI },
  { abbr: "CLE", name: "Cleveland Cavaliers", logo: CLE },
  { abbr: "DAL", name: "Dallas Mavericks", logo: DAL },
  { abbr: "DEN", name: "Denver Nuggets", logo: DEN },
  { abbr: "DET", name: "Detroit Pistons", logo: DET },
  { abbr: "GSW", name: "Golden State Warriors", logo: GSW },
  { abbr: "HOU", name: "Houston Rockets", logo: HOU },
  { abbr: "IND", name: "Indiana Pacers", logo: IND },
  { abbr: "LAC", name: "Los Angeles Clippers", logo: LAC },
  { abbr: "LAL", name: "Los Angeles Lakers", logo: LAL },
  { abbr: "MEM", name: "Memphis Grizzlies", logo: MEM },
  { abbr: "MIA", name: "Miami Heat", logo: MIA },
  { abbr: "MIL", name: "Milwaukee Bucks", logo: MIL },
  { abbr: "MIN", name: "Minnesota Timberwolves", logo: MIN },
  { abbr: "NOP", name: "New Orleans Pelicans", logo: NOP },
  { abbr: "NYK", name: "New York Knicks", logo: NYK },
  { abbr: "OKC", name: "Oklahoma City Thunder", logo: OKC },
  { abbr: "ORL", name: "Orlando Magic", logo: ORL },
  { abbr: "PHI", name: "Philadelphia 76ers", logo: PHI },
  { abbr: "PHX", name: "Phoenix Suns", logo: PHX },
  { abbr: "POR", name: "Portland Trail Blazers", logo: POR },
  { abbr: "SAC", name: "Sacramento Kings", logo: SAC },
  { abbr: "SAS", name: "San Antonio Spurs", logo: SAS },
  { abbr: "TOR", name: "Toronto Raptors", logo: TOR },
  { abbr: "UTA", name: "Utah Jazz", logo: UTA },
  { abbr: "WAS", name: "Washington Wizards", logo: WAS },
] as const;
