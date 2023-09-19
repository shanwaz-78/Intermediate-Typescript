type Colors = "red" | "Green" | "Blue" | "Cyan";

type extrected = 'red' | 'Blue';
type Color = Extract<Colors, extrected>;

const extractedColor: Color = "Blue";

console.log(extractedColor); // -> Blue;

// exclude

type excluded = Exclude<Colors, "red">;

const excludedColors: excluded = "Green";
console.log(excludedColors); // -> ;

interface Example {
  name: "Will Sentence";
  age: 29;
  designation: "Full Stack Developer";
}

type extrectName = Pick<Example, 'name'>;

const nameFromObj:extrectName = {
  name : 'Will Sentence'
}

console.log(nameFromObj.name)
