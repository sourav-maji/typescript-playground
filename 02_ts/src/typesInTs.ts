let drink = "chai";

// drink = 0  // error : Type 'number' is not assignable to type 'string'.ts(2322)

let cups = Math.random() > 0.5 ? 10 : 5;
console.log(cups);

let channelName = "Chaiaurcode"
// channelName = 123333  // error : Type 'number' is not assignable to type 'string'.

let chaiFlavour : string = "Malasa chai"
chaiFlavour = "Ginger tea"
// chaiFlavour = 2 // error: Type 'number' is not assignable to type 'string'.ts(2322)


// datatypes : boolean,string, number