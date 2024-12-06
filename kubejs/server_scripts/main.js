// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server script)'),
/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!

  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.
/*event.shaped(
  Item.of('minecraft:hopper', 1), // arg 1: output
  [
    'ABA',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:iron_ingot',
    B: {tag:'minecraft:logs', amount:1}//arg 3: the mapping object
  }
),*/
  event.shapeless(
  Item.of('minecraft:redstone', 9), // arg 1: output
  [ 	     'minecraft:redstone_block'  // arg 2: the array of inputs
  ]
),
  console.log('Hello! The recipe event has fired!')
})
