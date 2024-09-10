import { Data } from "../Data";
import readline from "readline-sync";

export function runMakeUserTypeTodoText(): string {
	return readline.question("Enter todo text: ");
}
