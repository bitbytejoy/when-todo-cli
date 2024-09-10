import { Data } from "../Data";
import { thenAskForMainMenuOption } from "../then/thenAskForMainMenuOption";
import { thenPrintInvalidCommand } from "../then/thenPrintInvalidCommand";

export function whenInvalidCommandIsGiven(data: Data) {
	thenPrintInvalidCommand(data);
	thenAskForMainMenuOption(data);
}
