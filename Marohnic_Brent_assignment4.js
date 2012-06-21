// My code library

var stringThings = function () {
	
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
		} else if ( firstDigit != 1 && phoneNum.length === 12 ) {
		// If the first character does not equal 1 and the length is equal to 12, send it on.
			isItAPhoneNumber(phoneNum);
		} else {
			console.log(phoneNum + " is not a valid telephone number.");
		};	// Close out the if block.
			
	};	// Close out phoneNumber
	
	
	// ------------------------------------------------------------------------------------------------------------------
	// Begin Email Validation Section
	// ------------------------------------------------------------------------------------------------------------------
	
	var emailAddress = function (emailAddr) {
		
		// Begin by checking if the input is a number. If it is, use return to prevent any further execuction.
		// This prevents inputs like boolean values, nulls, spaces, etc ... from being run thru the remaining code.
		if ( !isNaN(emailAddr) ) {
			return emailAddr + " is not a valid email address.";
			return;
		};
		// Remove leading and trailing blanks with the 'trim' string object.
		emailAddr = emailAddr.trim();
		
		// email addresses have to follow certain rules. The following are slightly more strict than what is actually
		// considered acceptable. However, these are the most commonly followed.
		if ( emailAddr.indexOf("@") === -1 ) {
			return "Not an email address because it does not contain an ampersand";
		};
		
		if ( emailAddr.indexOf("@") !== emailAddr.lastIndexOf("@") ) {
			return "Not an email address because there is more than one ampersand";
		};
		
		if ( emailAddr.indexOf("..") !== -1 ) {
			return "Not an email address because of sequential dots";
		};
		
		if ( emailAddr.substring(0, 1) === "." || emailAddr.substring(emailAddr.length - 1, emailAddr.length) === ".") {
			return "Not an email address because of an initial or a trailing dot";
		};
		
		var localPart = emailAddr.substring(0, emailAddr.indexOf("@")),
			domainPart = emailAddr.substring(emailAddr.indexOf("@") + 1);
			
		// return "localPart: " + localPart + " and domainPart: " + domainPart;
		
		
		var localASCII = [33,35,36,37,38,39,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,61,63,65,66,67,68,69,70,
		71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,94,95,96,97,98,99,100,101,102,103,104,105,106,107,
		108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126];
		
		var domainASCII = [45,46,47,48,49,50,51,52,53,54,55,56,57,61,63,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
		80,81,82,83,84,85,86,87,88,89,90,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,
		114,115,116,117,118,119,120,121,122,123,124,125,126];
		
		for ( var i = 0, j = localPart.length; i < j; i++ ) {
			for (ii = 0, jj = localASCII.length, doesExist = false; ii < jj; ii++ ) {
				if ( localPart.charCodeAt(i) === localASCII[ii] ) {
					doesExist = true;
					continue;
				} else {
					if ( ii === (jj - 1) && doesExist === false) { return localPart[i] + 
						" cannot be used within the local portion of an email address."};
				};
			};
		};
		
		for ( var i = 0, j = domainPart.length; i < j; i++ ) {
			for (ii = 0, jj = domainASCII.length, doesExist = false; ii < jj; ii++ ) {
				if ( domainPart.charCodeAt(i) === domainASCII[ii] ) {
					doesExist = true;
					continue;
				} else {
					if ( ii === (jj - 1) && doesExist === false) { return domainPart[i] + 
						" cannot be used within the domain portion of an email address."};
				};
			};
		};
	
	}; // Close out emailAddress
	
	// ------------------------------------------------------------------------------------------------------------------
	// Begin Title-Case String Section
	// 1. Remove leading and trailing blanks.
	// 2. Set everything to lower case in case someone attempts to get tricky with how they input the argument.
	// 3. Turn the string into an array of individual letters, spaces, punctuation, etc..
	// 4. The first time thru the loop, set the first letter to upper case because it will always need to be upper case.
	// 	  Also, set the incoming arguemnt to an empty string so we can use it again to reconstruct the title case string.
	// 5. All subsequent interations just need to check to see if the previous array value was a space. If so,
	//	  capitalize the current letter.
	// 6. We are still in the loop here, so let's go ahead and begin to reconstruct our title case sentence using the 
	//	  concat method.
	// 7. Close out the titleCase function.
	// ------------------------------------------------------------------------------------------------------------------
	var titleCase = function (someString) {
		someString = someString.trim();									// 1
		someString = someString.toLowerCase();							// 2
		var someStringArray = someString.split("");						// 3
		for ( var i = 0, j = someStringArray.length; i < j; i++ ) {
			if ( i === 0  ) {											// 4
				someStringArray[i] = someStringArray[i].toUpperCase();
				someString = "";
			} else if ( someStringArray[ i - 1 ] === " " ) {			// 5
				someStringArray[i] = someStringArray[i].toUpperCase();
			};
			someString = someString.concat(someStringArray[i]);			// 6
		};
		return someString;
		
	}; 																	// 7
	
	// ------------------------------------------------------------------------------------------------------------------
	// Begin Replace Separator in String Section
	// 1. Remove leading and trailing blanks.
	// 2. Turn the string into an array of individual letters, spaces, punctuation, etc..
	// 3  Set the incoming arguemnt to an empty string so we can use it again to reconstruct the resulting string.
	// 4. Iterate thru the loop looking for a match between the current array index value and the old separator value.
	// 	  If found, replace it with the new separator.
	// 5. We are still in the loop here, so let's go ahead and begin to reconstruct our title case sentence using the 
	//	  concat method.
	// 6. Close out the titleCase function.
	// ------------------------------------------------------------------------------------------------------------------
	var replaceSeparator = function (someString, oldSeparator, newSeparator) {
		someString = someString.trim();									// 1
		var someStringArray = someString.split("");						// 2
		someString = "";												// 3
		for ( var i = 0, j = someStringArray.length; i < j; i++ ) {
			if ( someStringArray[i] === oldSeparator ) {				// 4
				someStringArray[i] = newSeparator;
			};
			someString = someString.concat(someStringArray[i]);			// 5
		};
		return someString;
		
	}; 																	// 7
	
	return {
		"phoneNumber":phoneNumber,
		"emailAddress":emailAddress,
		"titleCase":titleCase,
		"replaceSeparator":replaceSeparator
	};
	
	
	
	
}; // Close out stringThings


var numberThings = function () {
	
	// ------------------------------------------------------------------------------------------------------------------
	// Begin Format Number to Specified Precision Section
	// 1. Use the toFixed method to format the number to the number of decimals received in somePrecision.
	// 2. Close out the titleCase function.
	// ------------------------------------------------------------------------------------------------------------------
	var formatIt = function (someDecimal, somePrecision) {
		var formattedString = someDecimal.toFixed(somePrecision);	// 1
		return formattedString;
	};																// 2
	
	
	// ------------------------------------------------------------------------------------------------------------------
	// Begin Fuzzy Match Section
	// 1. Calculate the range in which the second argument can fall.
	// 2. Close out the fuzzyMatch function.
	// ------------------------------------------------------------------------------------------------------------------
	var fuzzyMatch = function (someNumber, someOtherNumber, somePercentage) {
		var highEnd = someNumber * (1 + somePercentage),			// 1
			lowEnd = someNumber - (someNumber * somePercentage)
			returnBool = false;
		;
		if ( someOtherNumber >= lowEnd && someOtherNumber <= highEnd ? returnBool = true : returnBool = false );
		return returnBool;
	};																// 2
	
	
	return {
		"formatIt":formatIt,
		"fuzzyMatch":fuzzyMatch
	};
	
}; // Close out numberThings


var useFuzzyMatch = new numberThings();

console.log("Does your second number match within the specified tolerance? " + useFuzzyMatch.fuzzyMatch(5, 5.5, 0.10));

/*
var useFormatIt = new numberThings();

console.log(useFormatIt.formatIt(7.10, 2));
console.log(useFormatIt.formatIt(7.10729657, 12));
console.log(useFormatIt.formatIt(7, 2));


var useReplaceSeparator = new stringThings();

console.log(useReplaceSeparator.replaceSeparator(",a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,", ",", "*"));


var useTitleCase = new stringThings();

console.log(useTitleCase.titleCase("i rEALLY eNJOYED dOING tHIS eXERCISE."));


var evaluateEmailInput = new stringThings();

console.log(evaluateEmailInput.emailAddress("brent.marohnic@aonhewitt.com("));


var evaluatePhoneInput = new stringThings();

evaluatePhoneInput.phoneNumber("1-407-614-5678");
evaluatePhoneInput.phoneNumber("1.4b7-614-5678");
evaluatePhoneInput.phoneNumber("1.407.614-5678");
evaluatePhoneInput.phoneNumber("1.407-614.5678");
*/




