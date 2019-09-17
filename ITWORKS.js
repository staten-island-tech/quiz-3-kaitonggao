
//he bills were $140, $45 and $270.

/* To tip the waiter a fair amount, Raph created a simple tip calculator
(as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200,
 and 10% if the bill is more than $200.
*/
// In the end, Raph would like to have 3 arrays:
// 1) Containing all three tips (one for each bill)
// 2) Containing all three final paid amounts (bill + tip).
// 3) use the array method filter to create a new array called copy that only contains the final paid amounts over $100.
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)


const price = [140, 45, 270]; 


function tipCalculator(bill){
    if (bill<50) {
        return bill * .2;
    } else if (50<=bill<=200) {
        return bill * .15;   
    } else {
        return bill * .10;    
    }
}; 


// Array containing... three tips (one for each bill)

const tips = [tipCalculator(price[0]), tipCalculator(price[1]) , tipCalculator(price[2])];


/*  Check to see if array works (they do yay! owo)

console.log('The tip for $' + price[0] + ' is $' + tips[0] );
console.log('The tip for $' + price[1] + ' is $' + tips[1] );
console.log('The tip for $' + price[2] + ' is $' + tips[2] );

 */


 // Array containing.. Final Paid Amounts (bill + tip) 

const finalAmount = [price[0] + tips[0] , price[1] + tips[1] , price[2] + tips[2] ]; 


 // Array Method Filter :  Only contains final paid amounts over $100.

 //IT WORKS

const copyOnlyOver100 = finalAmount.filter( finalAmount => finalAmount > 100); //How to filter: first thing before => is all the terms and after ==> is how you want to filter it.

console.log(copyOnlyOver100);

/*

const namePairs = [names[0] + names [1],
names[2] + names[3]];
console.log(namePairs); */