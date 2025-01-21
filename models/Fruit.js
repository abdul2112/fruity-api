const fruits = require("../fruits.json")

// // You will need to build a class
// // It will have a constructor to build instances of the fruit to return to the controller
// // Method showAll will access fruits json and return instances of all fruit to controller
// // Method show which access one fruit, build an instance and return to controller 'show'

// const fruit = fruits.filter(fruit => fruit.name.toLocaleLowerCase() === name)
//     if(fruit.length === 1) {
//         res.status(200).send(fruit)
//     } else {
//         res.status(404).send("The fruit doesn't exist on the API")
//     }

class Fruit {
    constructor({genus, name, id, family, order, nutritions}) {
        this.genus = genus
        this.name = name
        this.id = id
        this.family = family
        this.order = order
        this.nutritions = nutritions
    }
    static showAll = () => {
        return fruits.map(fruit => new Fruit(fruit))
    }

    static show = (name) => {

        const fruit = fruits.find(fruit => fruit.name.toLowerCase() === name)
        // console.log(fruit);
        // return fruit
        
        if(fruit){
            return new Fruit(fruit)
        } else {
            // res.status(404).send("The fruit doesn't exist on the API")
            throw Error ("The fruit doesn't exist")
        }
    }

    static create = (data) => {
        const newFruit = data
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === newFruit.name.toLowerCase())
        if(fruit) {
            throw Error("This fruit already exists")
        } else {
            console.log(newFruit);
            // newFruit.id = fruits.length + 1
            newFruit["id"] = fruits.length + 1
            fruits.push(newFruit)
            return new Fruit(newFruit)
        }
    }

    update(data) {
        console.log("this is update");
        
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(updatedFruit) {
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } else {
            throw Error("Fruit not found")
        }
    }
    destroy() {
        // console.log(this);
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(deletedFruit) {
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index, 1)
        } else {
            throw Error("Fruit not found")
        }
    }
}

module.exports = Fruit