import { Data } from "../Data";
import { thenAskForMainMenuOption } from "../then/thenAskForMainMenuOption";

export function whenAppStarts(data: Data) {
	thenAskForMainMenuOption(data);
}
