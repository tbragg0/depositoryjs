

class inventory = class {
	/**
	 * Main inventory constructor
	 * @constructor
	 * @param {number} numSlots - number of inventory slots
	 * @param {array} stackables - stackable types
	 */

	constructor(numSlots, stackables) {
		this.numSlots = numSlots;
		this.stackables = stackables;
	}
}