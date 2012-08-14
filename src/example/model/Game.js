define(function (require) {
	"use strict";
	
	// Represents a Computer Game.
	function Game(name, pegiRating) {
		this._name = name;
		this._pegiRating = pegiRating;
	}
	
	// Define the Game object methods.
	Game.prototype = {
	
		// Repoint the Constructor function.
		constructor: Game,
		
		// Returns true if this Game is suitible for the supplied age
		isSuitibleFor: function (age) {
		
			// Forward to the requires to the PegiRating object, applies the
			// Law of Demeter (least knowledge).
			return this._pegiRating.isSuitibleFor(age);
		},
		
		toString: function () {
			return this._name + " (" + this._pegiRating + ")";
		}
	};
	
	// Export the Constructor function.
	return Game;
	
});