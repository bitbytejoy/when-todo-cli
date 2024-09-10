import { Data } from "../Data";
import { runMakeUserTypeTodoText } from "../run/runMakeUserTypeTodoText";
import { runCreateTodo } from "../run/runCreateTodo";
import { whenAppStarts } from "../when/whenAppStarts";

export function thenMakeUserCreateTodo(data: Data) {
	const text = runMakeUserTypeTodoText();
	const todo = runCreateTodo(text);
	data.todos.push(todo);
}
