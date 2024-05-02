import { ResultType } from "./tuple";

//Promise 객체 - yes or no 확인

const doSomething = (): ResultType => {
  try {
    throw new Error("Some error occurs...");
  } catch (e: unknown | any) {
    return [false, e.message];
  }
};
