/** Chapter 3 */

// Basic TypeScript Types: Boolean, Number, String Array, Enum.
// Enum is not currently in JavaScript.

// Additional Built-in Types: Void, Null, Undefined, Never, Any


// ## Union Types and the strictNullChecks compiler option
// Using the `--strictNullChecks` compiler option switched on, the following will generate an error:
let basicString: string;
basicString = null;
basicString = undefined;

// If you want to actually be able to assign null, declare your variable as follows:
let nullableString: string | null;
nullableString == null;         // this is ok
nullableString == undefined;     // this is not ok


// Type Assertions
let value: any = 5

// The following two statements are equivalent:
let fixedString: string = (<number>value).toFixed(4);
let fixedString: string = (value as number).toFixed(4);