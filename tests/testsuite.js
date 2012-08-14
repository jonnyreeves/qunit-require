(function () {

    // Defer Qunit so RequireJS can work its magic and resolve all modules.
    QUnit.config.autostart = false;

    // Configure RequireJS so it resolves relative module paths from the `src`
	// folder.
    require.config({
        baseUrl: "../src",
    });

	// A list of all QUnit test Modules.  Make sure you include the `.js` 
	// extension so RequireJS resolves them as relative paths rather than using
	// the `baseUrl` value supplied above.
	var testModules = [
		"example/model/PlayerTests.js",
		"example/model/PegiRatingsTests.js"
	];
	
    // Resolve all testModules and then start the Test Runner.
	require(testModules, QUnit.start);
}());

