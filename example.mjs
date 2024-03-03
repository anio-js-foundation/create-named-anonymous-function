import createNamedAnonymousFunction from "./src/index.mjs"

const fn = createNamedAnonymousFunction("my function name", async () => {
	console.log("you called fn()")

	return "something"
})

console.log(fn, await fn())

/*
This should print:

you called fn()
[Function: my function name] something
*/
