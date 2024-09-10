import { Data } from "../Data";
import { thenAskForMainMenuOption } from "../then/thenAskForMainMenuOption";
import { thenMakeUserCreateTodo } from "../then/thenMakeUserCreateTodo";

export function whenCreateTodoCommandIsGiven(data: Data) {
	thenMakeUserCreateTodo(data);
	thenAskForMainMenuOption(data);
}
