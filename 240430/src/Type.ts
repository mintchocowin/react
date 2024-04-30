import I from "./I";

let obj: object = {
  name: "jack",
};

let name1 = (obj as I).name;

let name2 = (<I>obj).name;

console.log(name1, name2);
