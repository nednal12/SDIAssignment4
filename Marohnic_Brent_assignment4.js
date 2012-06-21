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
	// 2. Use short-hand if statement to set returnBool to true or false.
	// 3. Close out the fuzzyMatch function.
	// ------------------------------------------------------------------------------------------------------------------
	var fuzzyMatch = function (someNumber, someOtherNumber, somePercentage) {
		var highEnd = someNumber * (1 + somePercentage),			// 1
			lowEnd = someNumber - (someNumber * somePercentage)
			returnBool = false;
		;
		if ( someOtherNumber >= lowEnd && someOtherNumber <= highEnd ? returnBool = true : returnBool = false );	//2
		return returnBool;
	};																// 3
	
	// ------------------------------------------------------------------------------------------------------------------
	// Begin Duration Between Dates/Times Section
	// 1. Declare and initialize a ton of variables that will be used in order for the console logs to display the
	//	  sentences correctly regardless of the plurality required for each segment (ie: days, hours, minutes, seconds)
	// 2. Use the Math.max and Math.min functions here to avoid deriving any negative values.
	// 3. Start of the Days determination piece which is also responsible for constructing the necessary sentence fragment.
	// 	  Use Math.floor here so that only whole portions are assigned to the value and any remaining amounts flow thru
	//	  to the remaining divisions.
	// 4. Start of the Hours determination piece which is also responsible for constructing the necessary sentence fragment.
	// 	  Use Math.floor here so that only whole portions are assigned to the value and any remaining amounts flow thru
	//	  to the remaining divisions.
	// 5. Start of the Minutes determination piece which is also responsible for constructing the necessary sentence fragment.
	// 	  Use Math.floor here so that only whole portions are assigned to the value and any remaining amounts flow thru
	//	  to the remaining divisions.
	// 6. Start of the Seconds determination piece which is also responsible for constructing the necessary sentence fragment.
	// 7. Close out the fuzzyMatch function.
	// ------------------------------------------------------------------------------------------------------------------
	var dateDuration = function (firstDateTime, secondDateTime) {
		var firstMillis = Date.parse(firstDateTime),				// 1
			secondMillis = Date.parse(secondDateTime),
			millisInADay = 86400000,
			millisInAnHour = 3600000,
			millisInAMinute = 60000,
			millisInASecond = 1000,
			theDuration = 0,
			theDays = 0,
			theHours = 0,
			theMinutes = 0,
			theSeconds = 0,
			daysIsAre = " are ",
			hoursIsAre = " are ",
			minutesIsAre = " are ",
			secondsIsAre = " are ",
			daysIsAre2 = " days, ",
			hoursIsAre2 = " hours, ",
			minutesIsAre2 = " minutes, ",
			secondsIsAre2 = " seconds, ",
			daysString = "",
			hoursString = "",
			minutesString = "",
			secondsString = ""
		;
		
		theDuration = Math.max( firstMillis, secondMillis ) - Math.min( firstMillis, secondMillis );	// 2
		
		if ( theDuration >= millisInADay ) {															// 3
			theDays = Math.floor(theDuration / millisInADay);
			theDuration = theDuration - (theDays * millisInADay);
			if ( theDays === 1 ? daysIsAre = " is " : daysIsAre = " are " );
			if ( theDays === 1 ? daysIsAre2 = " day" : daysIsAre2 = " days" );
			if ( theDays === 0 ? daysString = "" : daysString = daysIsAre + theDays + daysIsAre2 );
		};
		if ( theDuration >= millisInAnHour ) {															// 4
			theHours = Math.floor(theDuration / millisInAnHour);
			theDuration = theDuration - (theHours * millisInAnHour);
			if ( theDays === 0 ) {
				mySeparator = "";
				if ( theHours === 1 ? hoursIsAre = " is " : hoursIsAre = " are " );
			} else {
				mySeparator = ", ";
				hoursIsAre = "";
			};
			if ( theHours === 1 ? hoursIsAre2 = " hour" : hoursIsAre2 = " hours" );
			if ( theHours === 0 ? hoursString = "" : hoursString = mySeparator + hoursIsAre + theHours + hoursIsAre2 );
		};
		if ( theDuration >= millisInAMinute ) {															// 5
			theMinutes = Math.floor(theDuration / millisInAMinute);
			theDuration = theDuration - (theMinutes * millisInAMinute);
			if ( theDays === 0 && theHours === 0 ) {
				mySeparator = "";
				if ( theMinutes === 1 ? minutesIsAre = " is " : minutesIsAre = " are " );
			} else {
				mySeparator = ", ";
				minutesIsAre = "";	
			};
			if ( theMinutes === 1 ? minutesIsAre2 = " minute" : minutesIsAre2 = " minutes" );
			if ( theMinutes === 0 ? minutesString = "" : minutesString = mySeparator + minutesIsAre + theMinutes + minutesIsAre2 );
		};
		if ( theDuration >= millisInASecond ) {															// 6
			theSeconds = Math.floor(theDuration / millisInASecond);
			theDuration = theDuration - (theSeconds * millisInASecond);
			if ( theDays === 0 && theHours === 0 && theMinutes === 0 ) {
				mySeparator = "";
				if ( theSeconds === 1 ? secondsIsAre = " is " : secondsIsAre = " are " );
			} else {
				mySeparator = ", ";
				secondsIsAre = ", and ";
			};
			if ( theSeconds === 1 ? secondsIsAre2 = " second" : secondsIsAre2 = " seconds" );
			if ( theSeconds === 0 ? secondsString = "" : secondsString = secondsIsAre + theSeconds + secondsIsAre2 );
		};
		
		return "There" + daysString + hoursString + minutesString + secondsString + " between " + firstDateTime + 
			" and " + secondDateTime + ".";
	};																// 7
	
	
	// ------------------------------------------------------------------------------------------------------------------
	// Begin String to Numeric Conversion Section
	// 1. Use the quick and easy method to perform the conversion. Simply stick a plus sign in front of the
	//	  string and let JS take care of the rest.
	// 2. Pass the resulting value into a negated isNaN to show that this works. Return the boolean value.
	// 3. Close out the stringToNumeric function.
	// ------------------------------------------------------------------------------------------------------------------
	var stringToNumeric = function (someString) {
		var someNumeric = +someString;		// 1
		
		return !isNaN(someNumeric);			// 2
	};										// 3
	
	return {
		"formatIt":formatIt,
		"fuzzyMatch":fuzzyMatch,
		"dateDuration":dateDuration,
		"stringToNumeric":stringToNumeric
	};
	
}; // Close out numberThings


var arrayThings = function () {
	
	// ------------------------------------------------------------------------------------------------------------------
	// Begin Smallest Value in Array Greater than Compare Value Section
	// 1. Declare a new array that will hold all of the legitimate values from the array that is passed in.
	// 2. Iterate thru the array in order to identify only the good numeric values.
	// 	  Remove strings, nulls, booleans.
	// 3. Use the compare function as the parameter to the sort method so that numbers get sorted correctly.
	// 4. Iterate thru the new array comparing each value to the compare value. 
	//	  Return the first occurrence of any such value.
	// 5. If no value greater to the compare value is found, return a string indicating the same.
	// 6. Close out the smallestValue function.
	// ------------------------------------------------------------------------------------------------------------------
	var smallestValue = function (someArray, compareValue) {
		var newArray = [];										// 1
		
		for ( var i = 0, j = someArray.length; i < j; i++ ) {	// 2
			if ( !isNaN(someArray[i]) && someArray[i] !== null && someArray[i] !== true &&
				someArray[i] !== false) {
				newArray.push(someArray[i]);
			};
		};
		
		newArray.sort(function (a,b) {							// 3
			return a - b;
		});
		
		for ( var i = 0, j = newArray.length; i < j; i++ ) {	// 4
			if ( newArray[i] > compareValue ) {
				return newArray[i];
			} else {
				if ( i === j - 1 ) {							// 5
					return "There were no values in the array greater than the compare value.";
				};
			};
		};
	};															// 6
	
	// ------------------------------------------------------------------------------------------------------------------
	// Begin Add Up the Numerics in an Array Section
	// 1. Declare a new array that will hold all of the legitimate values from the array that is passed in.
	//	  Also declare the variable that will be used to sum the values within the array.
	// 2. Iterate thru the array in order to identify only the good numeric values.
	// 	  Remove strings, nulls, booleans.
	// 3. Verify that the array actually contains at least one number. If so, begin to add.
	//	  If not, inform the user that there were no actual numbers in the array.
	// 4. Close out the addEmUp function.
	// ------------------------------------------------------------------------------------------------------------------
	var addEmUp = function (someArray) {
		var newArray = [],											// 1
			summedArrayValue = 0
		;
		
		for ( var i = 0, j = someArray.length; i < j; i++ ) {		// 2
			if ( !isNaN(someArray[i]) && someArray[i] !== null && 
				someArray[i] !== true && someArray[i] !== false) {
				newArray.push(someArray[i]);
			};
		};
		
		if ( newArray.length !== 0 ) {								// 3
			for ( var i = 0, j = newArray.length; i < j; i++ ) {
				summedArrayValue += newArray[i];
				if ( i === j - 1 ) {
					return summedArrayValue;
				};
			};
		} else {
			return "There were no numeric values in the array.";
		};
	};																// 4
	
	
	return {
		"smallestValue":smallestValue,
		"addEmUp":addEmUp
	};
};

var useAddEmUp = new arrayThings();

console.log(useAddEmUp.addEmUp([true,8, 90, 12.75,"*andAnother",13.25,"myTrap",10.50,"anotherTrap",14.00,null]));
console.log(useAddEmUp.addEmUp([true,"*andAnother",false,"myTrap","anotherTrap",{},null,[8,4]]));

/*
var useSmallestValue = new arrayThings();

console.log(useSmallestValue.smallestValue([true,8, 90, 12.75,"*andAnother",13.25,"myTrap",10.50,"anotherTrap",14.00,null], -1));
*/

/*
var useStringToNumeric = new numberThings();

console.log("Has it been converted to a number? " + useStringToNumeric.stringToNumeric("12.75"));
*/

/*
var useDateDuration = new numberThings();
// enter values as "2011-10-10T14:48:00","2011-10-10T14:48:00"
console.log(useDateDuration.dateDuration("2012-06-21T14:48:00","2012-06-20T14:48:00"));
	
console.log(useDateDuration.dateDuration("2012-06-21T13:48:00","2012-06-21T14:48:00"));
	
console.log(useDateDuration.dateDuration("2012-06-21T14:49:00","2012-06-21T14:48:00"));
	
console.log(useDateDuration.dateDuration("2012-06-21T14:48:01","2012-06-21T14:48:00"));

console.log(useDateDuration.dateDuration("2012-06-22T14:48:00","2012-06-20T14:48:00"));
	
console.log(useDateDuration.dateDuration("2012-06-21T12:48:00","2012-06-21T14:48:00"));
	
console.log(useDateDuration.dateDuration("2012-06-21T14:50:00","2012-06-21T14:48:00"));
	
console.log(useDateDuration.dateDuration("2012-06-21T14:48:02","2012-06-21T14:48:00"));

console.log(useDateDuration.dateDuration("2011-06-21T14:48:01","2012-06-21T04:12:36"));

console.log(useDateDuration.dateDuration("2011-06-21T03:48:35","2012-06-21T04:12:36"));

console.log(useDateDuration.dateDuration("2011-06-21T04:12:35","2012-06-21T05:12:36"));
*/

/*
var useFuzzyMatch = new numberThings();

console.log("Does your second number match within the specified tolerance? " + useFuzzyMatch.fuzzyMatch(5, 7.6, 0.50));
*/

/*
var useFormatIt = new numberThings();

console.log(useFormatIt.formatIt(7.10, 2));
console.log(useFormatIt.formatIt(7.10729657, 12));
console.log(useFormatIt.formatIt(7, 2));
*/

/*
var useReplaceSeparator = new stringThings();

console.log(useReplaceSeparator.replaceSeparator(",a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,", ",", "*"));
*/

/*
var useTitleCase = new stringThings();

console.log(useTitleCase.titleCase("i rEALLY eNJOYED dOING tHIS eXERCISE."));
*/

/*
var evaluateEmailInput = new stringThings();

console.log(evaluateEmailInput.emailAddress("brent.marohnic@aonhewitt.com("));
*/

/*
var evaluatePhoneInput = new stringThings();

evaluatePhoneInput.phoneNumber("1-407-614-5678");
evaluatePhoneInput.phoneNumber("1.4b7-614-5678");
evaluatePhoneInput.phoneNumber("1.407.614-5678");
evaluatePhoneInput.phoneNumber("1.407-614.5678");
*/




