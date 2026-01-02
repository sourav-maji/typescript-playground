// class Chai {
//   flavour: string;
//   price: number;

//   //   constructor(flavour: string, price: number) {
//   //     (this.flavour = flavour), (this.price = price);
//   //   }
//   constructor(flavour: string) {
//     this.flavour = flavour;
//     console.log(this);
//   }
// }

// const masalaChai = new Chai("Ginger", 20);

class Chai {
  public flavor: string = "Masala";

  private secretIngredents = "Cardamon";

  reveal() {
    return this.secretIngredents; // ok
  }
}

const c = new Chai();
c.reveal();

class Shop {
  protected shopName: string = "Chai corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

new Branch().getName();

class Walet {
  // private modifier

  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}

const w = new Walet();

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar: number = 2;

  get sugar() {
    return this.sugar;
  }
  set sugar(value: number) {
    if (value > 5) {
      throw new Error("Too Sweet");
    }
    this._sugar = value;
  }
}

const d = new ModernChai();
d.sugar = 3;

class EkChai {
  static shopName = "Chaicode cafe";

  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

// abstract class

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make(): void {
    console.log("Brewing chai");
  }
}

class Heater{
  heat(){

  }
}

class ChaiMaker{
  constructor(private heater: Heater){}

  make(){
    this.heater.heat
  }
}
