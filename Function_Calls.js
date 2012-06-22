/*
var useSortObjects = new arrayThings();

console.log(useSortObjects.sortObjects(carObjectArray, "year"));
console.log(useSortObjects.sortObjects(carObjectArray, "make"));
console.log(useSortObjects.sortObjects(carObjectArray, "model"));
console.log(useSortObjects.sortObjects(carObjectArray, "vin"));
*/

/*
var useAddEmUp = new arrayThings();

console.log(useAddEmUp.addEmUp([true,8, 90, 12.75,"*andAnother",13.25,"myTrap",10.50,"anotherTrap",14.00,null]));
console.log(useAddEmUp.addEmUp([true,"*andAnother",false,"myTrap","anotherTrap",{},null,[8,4]]));
*/


var useSmallestValue = new arrayThings();

console.log(useSmallestValue.smallestValue([true,8, 90, 12.75,"*andAnother",13.25,"myTrap",10.50,"anotherTrap",14.00,null], -1));


/*
var useStringToNumeric = new numberThings();

console.log(useStringToNumeric.stringToNumeric("12.75"));
console.log(useStringToNumeric.stringToNumeric(true));
*/

/*
var useDateDuration = new numberThings();
// enter values as "2011-10-10T14:48:00","2011-10-10T14:48:00"
console.log(useDateDuration.dateDuration("2012-06-20T14:48:00","2012-06-20T14:48:00"));

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
console.log(useTitleCase.titleCase("lOnG, LoNg AgO, iN a GaLaXy FaR, fAr AwAy."));
*/

/*
var evaluateEmailInput = new stringThings();

console.log(evaluateEmailInput.emailAddress("brent.marohnic@aon(hewitt.com"));
*/

/*
var evaluatePhoneInput = new stringThings();

console.log(evaluatePhoneInput.phoneNumber(26));
console.log(evaluatePhoneInput.phoneNumber("1-407-614-5678-7777"));
console.log(evaluatePhoneInput.phoneNumber("1-407-614-5678"));
console.log(evaluatePhoneInput.phoneNumber("1.4b7-614-5678"));
console.log(evaluatePhoneInput.phoneNumber("1.407.614-5678"));
console.log(evaluatePhoneInput.phoneNumber("1.407-614.5678"));
*/