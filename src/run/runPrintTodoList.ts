import { Todo } from "../types/Todo";

export function runPrintTodoList(todos: Todo[]): void {
	for (const todo of todos) {
		console.log(todo);
	}
}
