// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];

// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T;

// T extends U, 是代表 T 的联合类型，和 U 的联合类型进行对比
// never 是空类型，表示该类型值被过滤掉
