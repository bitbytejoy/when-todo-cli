import { Data } from "../Data";
import { thenQuitApp } from "../then/thenQuitApp";

export function whenQuitCommandIsGiven(data: Data) {
	thenQuitApp(data);
}
