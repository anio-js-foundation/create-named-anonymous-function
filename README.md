# @anio-js-foundation/create-named-anonymous-function

Creates a named anonymous function.

```js
import createNamedAnonymousFunction from "@anio-js-foundation/create-named-anonymous-function"

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

```
