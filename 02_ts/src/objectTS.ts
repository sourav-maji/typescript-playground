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

type Brew = { brewTime: number };

const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "Sourav",
  password: "123",
};

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("Updating chai with ", updates);
};

updateChai({ price: 35 });
updateChai({ isHot: false });
updateChai({});

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Masala Chai",
  quantity: 2,
});

type Chai1 = {
  name: string;
  price: number;
  isHot: boolean;
  ingredents: string[];
};

type BasicChaiInfo = Pick<Chai1, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};


type ChaiNew= {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredents: string;
};

type PublicChai = Omit<ChaiNew, "secretIngredents">