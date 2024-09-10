import { Data } from "./Data";
import { whenAppStarts } from "./when/whenAppStarts";

function main() {
	const data: Data = {
		todos: [],
	};

	whenAppStarts(data);
}

main();
