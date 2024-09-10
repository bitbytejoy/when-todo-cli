import { Data } from "../Data";
import readline from "readline-sync";

export function runGetMainMenuOptionFromUser(): string {
	return readline.question("Pick a command (1 - Create todo, 2 - List todos, 3 - Complete todo, q - Quit)\n");
}
