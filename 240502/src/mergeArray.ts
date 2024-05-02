//중첩배열인 경우 타입정의는?

export const mergeArray = <T>(...arrays: T[][]): T[] => {
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    const array: T[] = arrays[i];
    result = [...result, ...array];
  }
  return result;
};
