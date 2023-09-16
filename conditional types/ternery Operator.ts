type IsNumber<T> = T extends string ? true : false;

const result1: IsNumber<42> = false;
const result2: IsNumber<"hello"> = true;
console.log(result1, result2);

type Colors = "red" | "blue" | "green" | "cyan";

type ExtrectedColor = Exclude<Colors, "red">;

const color: ExtrectedColor[] = ["green", "blue", "cyan"];
console.log(color);
