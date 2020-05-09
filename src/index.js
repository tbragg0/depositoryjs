

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

		this.initSlotsArr = () => {
			let returnArr = [];

			for(let i = 0; i < numSlots; i++) {
				this.slots.push({ 
					id: i,
					occupyingType: null,
					quantity: null,
				});
			}
		}
	}
}

module.exports = inventory;