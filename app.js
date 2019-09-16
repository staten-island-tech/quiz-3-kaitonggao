
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
    if(bill<50) {
        return bill *.2;
    } else if (50<bill<200) {
        return bill * .15;   
    } else {
        return bill * .10;    
    }
}; 

const tips = (tipCalculator(price[0],price[1],price[2]));

console.log('The tip for $' + price[0] + ' is'  );

/* let tipCaluculator = function(price){
    switch(price) {
        case (price<50):
            return price * .2;
        case (50<price<200):
             return price * .15;   
        case (price>200):
            return price * .10;
            
    }
}
 */



/*let whatDoYouDo = function(job, firstName){
    switch(job) { 
        case 'teacher':
            return firstName + ' teaches childern';
        case 'driver':
            return firstName + ' drives people';    
        case 'designer':
            return firstName + ' design things';
        default: 
            return firstName + ' is broke and homeless yokes.';
        }
}

console.log(whatDoYouDo('teacher', 'Thami'));
console.log(whatDoYouDo('driver', 'Veda'));
console.log(whatDoYouDo('designer', 'Kai :>'));
console.log(whatDoYouDo('default', 'Rob'));

const namePairs = [names[0] + names [1],
names[2] + names[3]];
console.log(namePairs); */