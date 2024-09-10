import { Data } from "../Data";
import { runFindTodoById } from "../run/runFindTodyById";
import { runMakeUserEnterTodoId } from "../run/runMakeUserEnterTodoId";
import { runPrintTodoDoesNotExist } from "../run/runPrintTodoDoesNotExist";
import { runPrintUpdateTodoSuccess } from "../run/runPrintTodoUpdateSuccess";

export function thenMakeUserCompleteTodo(data: Data): void {
	const todoId = runMakeUserEnterTodoId();
	const todo = runFindTodoById(data.todos, todoId);

	if (todo) {
		todo.status = "done";
		runPrintUpdateTodoSuccess();
	} else {
		runPrintTodoDoesNotExist();
	}
}
