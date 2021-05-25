
let args = process.argv.slice(2)

let numDice = []
const diceRoller = function(args){
  for(let i = 1; i <= args; i++){
   numDice.push(Math.ceil(Math.random()*6))

  }
  console.log('Rolled ' + args +' ' + 'Dice: ' + ' ' + numDice.join(', '))
 
}

diceRoller(args)