interface UserObj {
  name: "Mike North";
  state: "Chicago";
  address: "12, Chicago USA.";
}

let userCity: UserObj['state'];
console.log(userCity);
