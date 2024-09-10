import { Data } from "../Data";
import { runGetMainMenuOptionFromUser } from "../run/runGetMainMenuOptionFromUser";
import { whenCompleteTodoCommandIsGiven } from "../when/whenCompleteTodoCommandIsGiven";
import { whenCreateTodoCommandIsGiven } from "../when/whenCreateTodoCommandIsGiven";
import { whenInvalidCommandIsGiven } from "../when/whenInvalidCommandIsGiven";
import { whenListTodosCommandIsGiven } from "../when/whenListTodosCommandIsGiven";
import { whenQuitCommandIsGiven } from "../when/whenQuitCommandIsGiven";

export function thenAskForMainMenuOption(data: Data) {
	const option = runGetMainMenuOptionFromUser();

	if (option === "1") {
		whenCreateTodoCommandIsGiven(data);
	} else if (option === "2") {
		whenListTodosCommandIsGiven(data);
	} else if (option === "3") {
		whenCompleteTodoCommandIsGiven(data);
	} else if (option === "q") {
		whenQuitCommandIsGiven(data);
	} else {
		whenInvalidCommandIsGiven(data);
	}
}
