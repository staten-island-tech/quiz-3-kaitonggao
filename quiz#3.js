
//the bills were $140, $45 and $270.

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

/*
const price = [140, 45, 270]; 
console.log(price[0],price[1],price[2]);

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

 Check to see if array works (they do yay! owo)

console.log('The tip for $' + price[0] + ' is $' + tips[0] );
console.log('The tip for $' + price[1] + ' is $' + tips[1] );
console.log('The tip for $' + price[2] + ' is $' + tips[2] );

 


 // Array containing.. Final Paid Amounts (bill + tip) 

const finalAmount = [price[0] + tips[0] , price[1] + tips[1] , price[2] + tips[2] ]; 
console.log(finalAmount[0],finalAmount[1],finalAmount[2]);

 // Array Method Filter :  Only contains final paid amounts over $100.

 //IT WORKS

const copyOnlyOver100 = finalAmount.filter( finalAmount => finalAmount > 100); //How to filter: first thing before => is all the terms and after ==> is how you want to filter it.

console.log(copyOnlyOver100);

/*

const namePairs = [names[0] + names [1],
names[2] + names[3]];
console.log(namePairs); */

/* Let's remember the first coding challenge where Dejon and Rob compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Note: We must use 'this' inside the object to reference properties for our method


Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
Rob's Info: mass: 78, height: 1.69
Dejon's Info: mass: 110, height: 1.95 */

/*const info = [ 
 { fullname: 'Robert Grande', mass: 78, height: 1.69 },
 { fullname: 'Dejon Curtie', mass: 110, height: 1.95 },
]
*/



const rob = {
    fullname: 'Robert Grande', mass: 78, height: 1.69 ,
    calculateBMI: function(mass,height){
      return mass/ height^2;
    }
  }
  
  const dejon = {
     fullname: 'Dejon Curtie', mass: 110, height: 1.95 ,
     calculateBMI: function(mass,height){
      return mass/ height^2;
    }
  }
  
  
  console.log(rob,dejon)
  
  