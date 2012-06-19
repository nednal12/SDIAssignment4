// My code library

var numberThings = function () {
	var isItAPhoneNumber = function (phoneNum2) {
		if ( (phoneNum2.charAt(3) === '-' && phoneNum2.charAt(7) === '-') ||
			(phoneNum2.charAt(3) === '.' && phoneNum2.charAt(7) === '.') ) {
			for (var i = 0; i <= 11; i++) {
				if ( i === 3 || i === 7 ) {
					continue;
				} else {
					if ( phoneNum2.charCodeAt(i) >= 48 && phoneNum2.charCodeAt(i) <= 57 ) {
						continue;
					} else {
						console.log("The character identified in position " + ( i + 1 ) + " is not numeric.");
						break;
					};
				};
			};
		} 	else {
			// User did not use the same separators. Ding them for doing that.
			console.log(phoneNum2 + " is not a valid telephone number.");
			};
			
		if ( i === 12 ) {
			console.log("Congratulations, " + phoneNum2 + " is a valid telephone number.");
			
		};
	};
	
	var phoneNumber = function (phoneNum) {
		// Begin by checking if the input is a number. If it is, use return to prevent any further execuction.
		// This prevents inputs like boolean values, nulls, spaces, etc ... from being run thru the remaining code.
		if ( !isNaN(phoneNum) ) {
			console.log(phoneNum + " is not a valid telephone number.");
			return;
		};
		// Remove leading and trailing blanks with the 'trim' string object.
		phoneNum = phoneNum.trim();
		// Extract the first character in the string.
		var firstDigit = phoneNum.substring(0,1);
		// Check to see if the character in the first position is loosely equal to the number 1 and
		// that the length is equal to 14.
		if ( firstDigit == 1 && phoneNum.length === 14 ) {
		// If it is, remove the first and second chacters (ie: 1- ) before sending it on.
			isItAPhoneNumber(phoneNum.substring(2));
		} 	else if ( firstDigit != 1 && phoneNum.length === 12 ) {
		// If the first character does not equal 1 and the length is equal to 12, send it on.
				isItAPhoneNumber(phoneNum);
			} 	else {
					console.log(phoneNum + " is not a valid telephone number.");
			};	// Close out the if block.
			
	};	// Close out phoneNumber
	
	return {
		"phoneNumber":phoneNumber
	};
};

var evaluatePhoneInput = numberThings();

evaluatePhoneInput.phoneNumber("1-407-614-5678");
evaluatePhoneInput.phoneNumber("1.4b7-614-5678");
evaluatePhoneInput.phoneNumber("1.407.614-5678");
evaluatePhoneInput.phoneNumber("1.407-614.5678");


