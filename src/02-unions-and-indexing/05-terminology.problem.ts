/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

// discriminated union: union type of objects with a consistent property to discern difference on
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

// union: types separated by pipe "|" symbol
type B = "a" | "b" | "c";

// enum: uses 'enum' keyword
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
