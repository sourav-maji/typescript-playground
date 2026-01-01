const chaiFlavours: string[] = ["Masala", "Adrak"];

const chaiPrice: number[] = [10, 20, 5];

const rating: Array<number> = [4.5, 5.0, 3.5];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  {
    name: "Masala",
    price: 15,
  },
  {
    name: "Adrak",
    price: 25,
  },
];

const cities: readonly string[] = ["Delhi", "Jaipur", "Kolkata"];

// cities.push("Pune"); // error: Property 'push' does not exist on type 'readonly string[]'.ts(2339)

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let chaiTupple: [string,number];
chaiTupple = ["Masala",20]

let userInfo : [string,number, boolean?];
userInfo = ["sourav",1]
userInfo = ["sourav",1, true]

const location : readonly [number, number] = [28.66,38.22]

const chaiItems : [name: string, price: number] = ["masala", 25]