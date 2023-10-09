import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

// type OnlyIdKeys<T> = unknown;
type searchForId =`${string}${"id"|"Id"}${string}`
type OnlyIdKeys<T> = {
  // [K in keyof T as Exclude<K, "name" | "age">]: T[K]
  // [K in keyof T as Extract<K, searchForId>]: T[K]
  [K in keyof T as K extends searchForId ? K : never]: T[K]
};
type test = OnlyIdKeys<Example>

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
