interface User {
  Id: number;
  name: string;
  contactNumber: number;
}

type UsreKeys = keyof User;

const key1: UsreKeys = "Id";
const key2: UsreKeys = "contactNumber";
const key3: UsreKeys = "name";
console.log(key1);
console.log(key2);
console.log(key3);

// seperate instance.
type Obj = {
  [key in "document" | "navigator"]: Window[key];
};

// using keyof it's similar to typeof using this we can extrect keys(properties) from object like above example.
