type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

// function makeChau(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

// function serveChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }
function makeChau(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};
interface TeaRecipe1 {
  water: number;
  milk: number;
}

class MalasaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

// type CupSize = "small"| "large"
interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "small";
}

// type Response = { ok: true } | { ok: false };

// class myRes implements Response {
//   ok: boolean = true;
// }
