import { Todo } from "../types/Todo";

export function runCreateTodo(text: string): Todo {
	return {
		id: crypto.randomUUID(),
		text,
		status: "todo",
	};
}
