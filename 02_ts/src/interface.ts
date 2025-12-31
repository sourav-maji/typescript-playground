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

// Union in typescript

type TeaType = "masala" | "ginger" | "lemon"; // this type is called litteral type

function orderChai(t: TeaType) {
  console.log(t);
}

// Intersection in typescript
type BaseChai = {teaLeaves : number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup : MasalaChai = {
    teaLeaves :2,
    masala:1
}

type User = {
    username : string,
    bio ?: string,
}

const u1 : User = { username : "sourav"}
const u2 : User = { username : "sourav", bio: "sourav@sourav.com"}

type Config = {
    readonly appName : string,
    version: number
}

const cfg : Config = {
    appName: "Masterji",
    version : 1
}

// cfg.appName = "ChaiCode" // Cannot assign to 'appName' because it is a read-only property.ts(2540)