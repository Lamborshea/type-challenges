// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

// ============= Your Code Here =============
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

function getObjectValue<T extends Object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

const User = {
  name: "John",
  age: 30,
};

const age = getObjectValue(User, "age");

const name = getObjectValue(User, "name");

// 总结
// keyof T 得到 T 的所有属性的联合类型
// key in K, key 遍历 K 的联合类型，得到 K 的每一个属性, 常常用来构建一个新的对象或数组
