

const inventory = class {
	/**
	 * Main inventory constructor
	 * @constructor
	 * @param {number} numSlots - number of inventory slots
	 * @param {array} stackables - stackable types
	 */

	constructor(numSlots, stackables) {
		this.numSlots = numSlots;
		this.stackables = stackables;

		this.slots = [];
	}

	/**
	 * Initialize Inventory Array
	 * @method
	 */

	initSlotsArr() {
		for(let i = 0; i < this.numSlots; i++) {
			this.slots.push({ 
				id: i,
				occupyingType: null,
				quantity: 0,
			});
		}
	}

	addItem(slotNum, type, quantity) {
		this.slots.forEach((slot) => {
			if(slot.id == slotNum) {
				let stackableBoolArr = this.stackables.map(itemType => itemType == type);

				if(stackableBoolArr.includes(true)) {
					slot.quantity = quantity;
				} 
				else {
					slot.quantity = 1;
				}

				slot.occupyingType = type;
			}
		})
	}
}

module.exports = inventory;