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
  { abbr: "ATL", name: "Atlanta Hawks", id: 1610612737, logo: ATL },
  { abbr: "BOS", name: "Boston Celtics", id: 1610612738, logo: BOS },
  { abbr: "BKN", name: "Brooklyn Nets", id: 1610612751, logo: BKN },
  { abbr: "CHA", name: "Charlotte Hornets", id: 1610612766, logo: CHA },
  { abbr: "CHI", name: "Chicago Bulls", id: 1610612741, logo: CHI },
  { abbr: "CLE", name: "Cleveland Cavaliers", id: 1610612739, logo: CLE },
  { abbr: "DAL", name: "Dallas Mavericks", id: 1610612742, logo: DAL },
  { abbr: "DEN", name: "Denver Nuggets", id: 1610612743, logo: DEN },
  { abbr: "DET", name: "Detroit Pistons", id: 1610612765, logo: DET },
  { abbr: "GSW", name: "Golden State Warriors", id: 1610612744, logo: GSW },
  { abbr: "HOU", name: "Houston Rockets", id: 1610612745, logo: HOU },
  { abbr: "IND", name: "Indiana Pacers", id: 1610612754, logo: IND },
  { abbr: "LAC", name: "Los Angeles Clippers", id: 1610612746, logo: LAC },
  { abbr: "LAL", name: "Los Angeles Lakers", id: 1610612747, logo: LAL },
  { abbr: "MEM", name: "Memphis Grizzlies", id: 1610612763, logo: MEM },
  { abbr: "MIA", name: "Miami Heat", id: 1610612748, logo: MIA },
  { abbr: "MIL", name: "Milwaukee Bucks", id: 1610612749, logo: MIL },
  { abbr: "MIN", name: "Minnesota Timberwolves", id: 1610612750, logo: MIN },
  { abbr: "NOP", name: "New Orleans Pelicans", id: 1610612740, logo: NOP },
  { abbr: "NYK", name: "New York Knicks", id: 1610612752, logo: NYK },
  { abbr: "OKC", name: "Oklahoma City Thunder", id: 1610612760, logo: OKC },
  { abbr: "ORL", name: "Orlando Magic", id: 1610612753, logo: ORL },
  { abbr: "PHI", name: "Philadelphia 76ers", id: 1610612755, logo: PHI },
  { abbr: "PHX", name: "Phoenix Suns", id: 1610612756, logo: PHX },
  { abbr: "POR", name: "Portland Trail Blazers", id: 1610612757, logo: POR },
  { abbr: "SAC", name: "Sacramento Kings", id: 1610612758, logo: SAC },
  { abbr: "SAS", name: "San Antonio Spurs", id: 1610612759, logo: SAS },
  { abbr: "TOR", name: "Toronto Raptors", id: 1610612761, logo: TOR },
  { abbr: "UTA", name: "Utah Jazz", id: 1610612762, logo: UTA },
  { abbr: "WAS", name: "Washington Wizards", id: 1610612764, logo: WAS },
] as const;
