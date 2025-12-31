let subs: number | string = "10M"; // or 10 both are valid

let apiResquestStatus: "pending" | "success" | "error" = "pending";
// apiResquestStatus = "done" // error : Type '"done"' is not assignable to type '"pending" | "success" | "error"'.ts(2322)

let airlineSeat: "aisle" | "window" | "middle" = "middle";

airlineSeat = "aisle";

const orders = ["12", "20", "28", "42"];
let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}
// currentOrder = 42; // error : Type 'number' is not assignable to type 'string'.ts(2322)
console.log(currentOrder);

// It's always recomended to avoid any in all the places
