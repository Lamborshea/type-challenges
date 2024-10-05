// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>
  >,
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: "A" }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: "A" }], { readonly a: "A" }>, false>>,
  Expect<Equal<Includes<[{ readonly a: "A" }], { a: "A" }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>
];

// ============= Your Code Here =============

type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

// type Includes<Value extends any[], Item> = Equal<Value[0], Item> extends true
//   ? true
//   : Value extends [Value[0], ...infer rest]
//   ? Includes<rest, Item>
//   : false;

// 解法1
type Includes<T extends readonly any[], Item> = {
  [p in T[number]]: true;
}[Item] extends true
  ? true
  : false;

// 解法2
// type Includes<T extends readonly any[], Item> = IsEqual<{[p in T[number]]:  T[p]}[Item], Item>
// type Includes<T extends readonly any[], U> = IsEqual<
//   {
//     [P in keyof T as T[P] extends U ? 0 : never]: T[P];
//   },
//   { 0: U }
// >;

// 解法3
// type Includes<T extends readonly any[], U> = T extends [infer L, ...infer R]
//   ? [U, L] extends [L, U]
//     ? true
//     : Includes<R, U>
//   : false
