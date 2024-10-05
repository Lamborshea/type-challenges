// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];

// ============= Your Code Here =============
// 解法1:
// type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;
type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F : never;
// extends [infer F, ...infer Rest], 表示 T 是一个数组, 数组的第一个元素是 F, 剩余元素是 Rest

// 解法2:
// type First<T extends any[]> = T extends [] ? never : T[0];
// extends [] 意味着 T 是一个空数组, 或者不是一个数组

// 解法3:
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// T["length"] 返回类型的元素长度
// extends 0 意味着 T 是一个空数组
