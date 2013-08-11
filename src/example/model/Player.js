define(function (require) {
	"use strict";

	// Import underscore.
	var _ = require("vendor/underscore");

	// Represents a Player who onws a collection of Comptuer Games.

	function Player(name, age, games) {
		this._name = name;
		this._age = age;
		this._games = _.isArray(games) ? games.slice() : [];
	}

	// Define the Player object methods.
	Player.prototype = {

		// Repoint the Constructor function.
		constructor: Player,

		// Returns an Array of Games which this Player should not have in their
		// collection because they are indenteded for an older audience based
		// on their Pegi Rating.
		getUnsuitableGames: function () {
			var self = this;

			return _.filter(this._games, function (game) {
				return !game.isSuitibleFor(self._age);
			});
		},

		toString: function () {
			return this._name + " (" + this._age + ") has " +
				this._games.length + " game(s)";
		}
	};

	// Export the Constructor function.
	return Player;

});