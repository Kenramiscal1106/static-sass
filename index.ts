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
