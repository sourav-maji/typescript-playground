interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavour: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "Chaicode cafe",
};

// s.id = 5 // error : Cannot assign to 'id' because it is a read-only property.ts(2540)

// defination of the function
interface DiscountCalculator {
  (price: number): number;
}
// ussage of the fucntion
const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("Start");
  },

  stop() {
    console.log("Stop");
  },
};

interface ChaiRatings {
  [flavor: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.6,
};

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "Sourav",
  age: 28,
};

interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {}
