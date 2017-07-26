/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'cat';
animal['name'] = 'Boobie';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'Meow';
noises.push('Scratch');
noises.unshift('Hiss');
noises[noises.length] = 'Lick';
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('Screech');
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  
 *  dot notation (ex. animal.name = 'Bob';) 
 *  bracket syntax (ex. animal['name'] = 'Tom';)
 *
 * 2. What are the different ways of accessing elements on arrays?
 *  
 *  Use a for loop 
 *  (ex. for(var i = 0; i < array.length; i++){
 *           array[i];
 *       }
 *  Use specific index
 *  (ex. array[0];)
 *
 *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species : 'duck', 
    name : 'Jerome',
    noises : ['quack', 'honk', 'sneeze','woosh']
}
animals.push(duck);
console.log(animals);
var bear = {
    species : 'bear', 
    name : 'Smokey',
    noises : ['growl', 'stomp', 'slap','splash']
}
var pig = {
    species : 'pig', 
    name : 'Peter',
    noises : ['oink', 'snort']
}
animals.push(bear, pig);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends =[];
//array is used to store list starting at index 0. this way its easy to retrieve 
//the values using the index where it is located
function pickAnimal(animal) {
return animals[Math.floor(Math.random() * animals.length)];
}

friends.push(pickAnimal(animal).name);
console.log(friends);
for(var i = 0; i < animals.length; i++){
    animals[i].friends = friends;
}
console.log(animals);
/** 
 * Nice work! You're done Part 1.Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
