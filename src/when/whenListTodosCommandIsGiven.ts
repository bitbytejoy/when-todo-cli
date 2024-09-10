import { Data } from "../Data";
import { thenAskForMainMenuOption } from "../then/thenAskForMainMenuOption";
import { thenListTodos } from "../then/thenListTodos";

export function whenListTodosCommandIsGiven(data: Data) {
	thenListTodos(data);
	thenAskForMainMenuOption(data);
}
