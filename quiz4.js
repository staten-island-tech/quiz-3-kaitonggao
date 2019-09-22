
/*const namePairs = [names[0] + names [1],
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

//Objects : Rob and Dejon with respecitive details.

const rob = {
    fullname: 'Robert Grande', mass: 78, height: 1.69 ,
    calculateBMI: function(mass,height){
      return this.mass/ this.height^2;
    }
  }

  console.log(rob.calculateBMI());
  
  const dejon = {
     fullname: 'Dejon Curtie', mass: 110, height: 1.95 ,
     calculateBMI: function(mass,height){
      return this.mass/ this.height^2;
    }
  }
  
  //calculatBMI() b/ it's a function. 
  
  console.log(dejon.calculateBMI());

  if (rob.calculateBMI() < dejon.calculateBMI()) {
      console.log(`${dejon.fullname} has a higher BMI, ${dejon.calculateBMI()} `)
  } else if (rob.calculateBMI() < dejon.calculateBMI()) {
    console.log(`${rob.fullname} has a higher BMI, ${rob.calculateBMI()}`)
  } else if (rob.calculateBMI() === dejon.calculateBMI()) {
      console.log(`They both have the same BMI`)
  }
  
  
