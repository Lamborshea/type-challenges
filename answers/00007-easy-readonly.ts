// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// ============= Your Code Here =============
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type result = MyReadonly<Todo1>;

// key in K
// keyof T 语法
// 举一反三
// 1. 可以通过这种方式将属性变为可选

type MyOptional<T> = {
  [K in keyof T]?: T[K];
};
