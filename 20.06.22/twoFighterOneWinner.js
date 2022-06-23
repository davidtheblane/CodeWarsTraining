// // Create a function that returns the name of the winner in a fight between two fighters.
// function declareWinner (fighter1, fighter2, firstAttacker) {
//   let secondAttacker
//   // identificar o primeiro a atacar
//   if (firstAttacker === fighter1.name) {
//     firstAttacker = fighter1
//     secondAttacker = fighter2
//   } else {
//     firstAttacker = fighter2
//     secondAttacker = fighter1
//   }
//   // 1ª sequencia de ataque
//   const isPlayerDead = [false]
//   while (isPlayerDead[0] === false) {
//     let message
//     const fighter1life = secondAttacker.health - firstAttacker.damagePerAttack
//     secondAttacker.health = fighter1life
//     // checar vida do atacado
//     if (secondAttacker.health <= 0) {
//       isPlayerDead.slice(0, true)
//       message = `${firstAttacker.name} attacks ${secondAttacker.name}: ${secondAttacker.name} now has -1 health and is dead. ${firstAttacker.name} wins.`
//       console.log(message)
//       console.log(firstAttacker.name)

//       return firstAttacker.name
//     } else {
//       message = `${firstAttacker.name} attacks ${secondAttacker.name}; ${secondAttacker} now has ${fighter1life} health.`
//       console.log(message)
//     }

//     // 1ª sequencia de ataque
//     const fighter2life = firstAttacker.health - secondAttacker.damagePerAttack
//     firstAttacker.health = fighter2life
//     // checar vida do atacado
//     if (firstAttacker.health <= 0) {
//       isPlayerDead.slice(0, true)
//       message = `${secondAttacker.name} attacks ${firstAttacker.name}: ${firstAttacker.name} now has -1 health and is dead. ${secondAttacker.name} wins.`
//       console.log(message)
//       console.log(secondAttacker.name)

//       return secondAttacker.name
//     } else {
//       message = `${secondAttacker.name} attacks ${firstAttacker.name}; ${firstAttacker} now has ${fighter2life} health.`
//       console.log(message)
//     }
//   }
// }

// Create a function that returns the name of the winner in a fight between two fighters.
function declareWinner (fighter1, fighter2, firstAttacker) {
  let secondAttacker
  const isPlayerDead = [false]

  // identificar o primeiro a atacar
  if (firstAttacker === fighter1.name) {
    firstAttacker = fighter1
    secondAttacker = fighter2
  } else {
    firstAttacker = fighter2
    secondAttacker = fighter1
  }

  // 1ª sequencia de ataque
  while (isPlayerDead[0] === false) {
    const fighter1life = secondAttacker.health - firstAttacker.damagePerAttack
    secondAttacker.health = fighter1life

    // checar vida do atacado
    if (secondAttacker.health <= 0) {
      isPlayerDead.slice(0, true)
      return firstAttacker.name
    }

    // 2ª sequencia de ataque
    const fighter2life = firstAttacker.health - secondAttacker.damagePerAttack
    firstAttacker.health = fighter2life

    // checar vida do atacado
    if (firstAttacker.health <= 0) {
      isPlayerDead.slice(0, true)
      return secondAttacker.name
    }
  }
}

class Fighter {
  constructor (name, health, damagePerAttack) {
    this.name = name
    this.health = health
    this.damagePerAttack = damagePerAttack
    this.toString = function () { return this.name }
  }
}

declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew')
