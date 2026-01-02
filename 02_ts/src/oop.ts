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
