const chai = {
    name: "Masala Chai",
    price: 20,
    isHot : true
}

let tea:{
    name: string,
    price: number,
    isHot: boolean
}

tea = {
    name : "Ginger Tea",
    price : 25,
    isHot: true
}

type Tea = {
    name: string,
    price : number,
    ingredents : string[]
}

const adrakChai : Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredents : ["ginger", "tea leaves"]
}

