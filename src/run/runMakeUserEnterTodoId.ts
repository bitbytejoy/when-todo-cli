import readline from "readline-sync";

export function runMakeUserEnterTodoId(): string {
	return readline.question("Enter todo ID: ");
}
