import { Data } from "../Data";
import { runPrintTodoList } from "../run/runPrintTodoList";
import { whenAppStarts } from "../when/whenAppStarts";

export function thenListTodos(data: Data) {
	runPrintTodoList(data.todos);
}
