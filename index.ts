let helloWorld: string = "user";
type user =
  | {
      name: string;
      age: number;
    }
  | [string, number, ...number[]]
  | null;
interface ui {
  name: string;
  age: number;
}
let user1: ui = {
  age: 34,
  name: "ken",
};
let user2: user = {
  name: "ken",
  age: 15,
};
let user3: user = ["Ken", 18, 14, 14, 15];
const user4: user = {
  name: "ken",
  age: 54,
};
let user7: user = null;
