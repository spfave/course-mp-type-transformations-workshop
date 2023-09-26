import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// type AppleOrBanana = Fruit extends "apple" | "banana" ? Fruit : never;

type AppleOrBanana = Fruit extends infer T
	? T extends 'apple' | 'banana'
		? T
		: never
	: never;

// type GetAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;
// type AppleOrBanana = GetAppleOrBanana<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
