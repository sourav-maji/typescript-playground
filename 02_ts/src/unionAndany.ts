let subs : number | string = '10M' // or 10 both are valid

let apiResquestStatus : 'pending' | 'success' | 'error' = "pending"
// apiResquestStatus = "done" // error : Type '"done"' is not assignable to type '"pending" | "success" | "error"'.ts(2322)

let airlineSeat : "aisle" | "window" | "middle" = "middle"

airlineSeat = "aisle"