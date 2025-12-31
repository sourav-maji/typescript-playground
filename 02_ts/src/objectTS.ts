const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredents: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredents: ["ginger", "tea leaves"],
};

// Duck typing
// In TypeScript, types are checked by structure, not by name.

/*
Example: 
type User = {
    name: string;
    age: number;
};

const person = {
    name: "Sourav",
    age: 20,
    isAdmin: true
};

function greet(user: User) {
    console.log(user.name);
}

greet(person); // ✅ Works

*/
type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;


type Brew = {brewTime: number}

const coffee = {brewTime:5, beans: "Arabica"}
const chaiBrew : Brew = coffee