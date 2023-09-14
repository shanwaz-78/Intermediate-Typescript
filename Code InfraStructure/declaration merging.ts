// Mergin types.(string,number, etc..);

type User = {
  name: string;
  age: number;
};

type UserAddress = {
  street: string;
  zipCode: string | number;
};

type UserDetails = User & UserAddress;

const user1: UserDetails = {
  name: "John Byro",
  age: 29,
  street: "Main Street",
  zipCode: 23232,
};

// in the Above Example we used Intersecion (&) using this we are merging types.

// Declaration merging, we use it to merge declarations like interfaces, class, functions.

interface Car {
  color: string;
  model: string | number;
  price: number;
}

interface Car {
  name: string;
  company: string;
  manufactured: string;
}

const CarProduction: Car = {
  color: "green",
  model: "BMW",
  price: 50000,
  name: "Satyam Natela",
  company: "BMW",
  manufactured: "India",
};

console.log(CarProduction.manufactured)