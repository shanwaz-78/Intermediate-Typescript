type Colors = "red" | "Green" | "Blue" | "Cyan";

type Color = Extract<Colors, "red" | "Blue">;

const extractedColors: Color = "Blue";
console.log(extractedColors); // -> Blue;

// exclude

type excluded = Exclude<Colors, "red">;

const excludedColors: excluded = "Green";
console.log(excludedColors); // -> green;
