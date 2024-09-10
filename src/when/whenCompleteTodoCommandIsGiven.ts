import { Data } from "../Data";
import { thenAskForMainMenuOption } from "../then/thenAskForMainMenuOption";
import { thenMakeUserCompleteTodo } from "../then/thenMakeUserCompleteTodo";

export function whenCompleteTodoCommandIsGiven(data: Data) {
	thenMakeUserCompleteTodo(data);
	thenAskForMainMenuOption(data);
}
