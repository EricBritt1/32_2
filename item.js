// JS class for items goes here. Each time a new Item instance class is instantiated we must consider
/*
- Name of item
- Price of item
- Adding this newly created item to our fake database
*/
const items = require('./fakeDb')

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this)
    }
    static findAll(){
        return items
    }
    static update(name, data) {
        let foundItem = Item.find(name);
        foundItem.name = data.name;
        foundItem.price = data.price;
        return foundItem;
    }
    static remove(name) {
        let foundIdx = items.findIndex(v => v.name === name);
        if (foundIdx === -1) {
          throw {message: "Not Found", status: 404}
        }
        items.splice(foundIdx, 1);
      }

    static find(name) {
        const foundItem = items.find(object => object.name === name)
        if (foundItem === undefined) {
            throw {message: "Item not found", status: 404}
        }
        return foundItem
    }
}

module.exports = Item;