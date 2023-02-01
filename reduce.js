  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr);
console.log(sum);


// second section
const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // needs to end in 0
console.log(totalExperience);



// Grouping by a property, and totaling it too
// Result we want is {Developer: 12, Designer: 4}

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession; // to find the profession in array
  if (!acc[key]) {
    acc[key] =  curr.yrsExperience; // finds the first set of array which is profession
  } else {
    acc[key] += curr.yrsExperience; // adds the years to it
  }
  return acc

}, {}) //this will mean it will enter into an array - intial value

console.log(experienceByProfession);