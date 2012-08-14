define(function (require) {

	// Import depdendencies.
	var _ = require("vendor/underscore");
	var Player = require("./Player");
	var Game = require("./Game");
	var PegiRatings = require("./PegiRatings");
	
	// Define the QUnit module and lifecycle.
	QUnit.module("example/model/Player", { 
		setup: function () {
		},
		teardown: function () {
		}
	});

	// Define some testdata which we will consume in the following testcases; 
	// note this does not beling in the Setup method as our Game object is 
	// immutable and only needs to be created once.
	var testData = {
		games: {
			fifa: new Game("FIFA Street 2", PegiRatings.PEGI_3),
			hotd: new Game("House of the Dead: Overkill", PegiRatings.PEGI_18),
			starwars: new Game("Star Wars Battlefront", PegiRatings.PEGI_12)
		}
	};
	testData.allGames = _.toArray(testData.games);
	
	// Custom assertion method which compares two Arrays of Game objects ensuring
	// that the expected Game objects are present in the actual result.  Note that
	// order is not important.
	function gamesCollectionEqual(actual, expected) {
		if (actual.length !== expected.length) {
			QUnit.deepEqual(actual, expected, "Games collections differ in size");
		}
		else if (_.difference(expected, actual).length !== 0) {
			QUnit.deepEqual(actual, expected, "Games collections differ in content");
		}
		else {
			QUnit.ok(true, "Games collections are equal");
		}
	}
	
	QUnit.test("getUnsuitableGames - Player has no games, empty Array returned", function () { 
		var player = new Player("Jonny", 29, null);
		var result = player.getUnsuitableGames();
		QUnit.deepEqual(result, [], "Zero unsuitable games returned");
	});
	
	QUnit.test("getUnsuitableGames - All player's games are suitable for his age", function () {
		var player = new Player("Jonny", 29, testData.allGames);
		var result = player.getUnsuitableGames();
		QUnit.deepEqual(result, [], "Zero unsuitable games returned");
	});
	
	QUnit.test("getUnsuitableGames - Player has unsuitable games in their collection, populated Array returned", function () {
		var player = new Player("Little Jimmy", 4, testData.allGames);
		var result = player.getUnsuitableGames();
		
		gamesCollectionEqual(result, [ 
				testData.games.starwars,
				testData.games.hotd
			]);
	});
	
});