define(function (require) {

	// Import depdendencies (note you can use relative paths here)
	var PegiRatings = require("./PegiRatings");

	// Define the QUnit module and lifecycle.
	QUnit.module("example/model/PegiRatings");

	QUnit.test("isSuitibleFor - younger age supplied, returns false", function () {
		QUnit.equal(PegiRatings.PEGI_18.isSuitibleFor(17), false);
	});

	QUnit.test("isSuitibleFor - same age supplied, returns true", function () {
		QUnit.equal(PegiRatings.PEGI_18.isSuitibleFor(18), true);
	});

	QUnit.test("isSuitibleFor - older age supplied, returns true", function () {
		QUnit.equal(PegiRatings.PEGI_18.isSuitibleFor(19), true);
	});
});