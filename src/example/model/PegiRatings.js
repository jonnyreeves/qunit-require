define(function (require) {
	"use strict";
	
	// Represents a PegiRating value
	function PegiRating(minAge) {
		this._minAge = minAge;
	}
	
	// Define the Game object methods.
	PegiRating.prototype = {
	
		// Repoint the Constructor function.
		constructor: PegiRating,
		
		// Returns true if the supplied age range is equal to or greater than
		// the minimum age indicated by this Pegi Rating.
		isSuitibleFor: function(age) {
			return age >= this._minAge;
		},
		
		toString: function () {
			return "PEGI " + this._minAge;
		}
	};
	
	// Don't export the Constructor, instead export a hash of values as the
	// PegiRating module is intended to be used as an Enum (all valid values
	// are known ahead of execution).
	return {
		PEGI_3: new PegiRating(3),
		PEGI_7: new PegiRating(7),
		PEGI_12: new PegiRating(12),
		PEGI_16: new PegiRating(16),
		PEGI_18: new PegiRating(18)
	};
	
});