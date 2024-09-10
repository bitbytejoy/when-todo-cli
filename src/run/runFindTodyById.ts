import { Todo } from "../types/Todo";

export function runFindTodoById(todos: Todo[], todoId: string): undefined | Todo {
	let todo: undefined | Todo;

	for (const t of todos) {
		if (t.id === todoId) {
			todo = t;
			break;
		}
	}

	return todo;
}
