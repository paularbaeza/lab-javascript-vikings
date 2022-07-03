// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

let viking10 = new Viking ("Jose", 2, 6)
console.log (viking10.receiveDamage(3))

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

//let saxon1 = new Saxon (4, 6)
//console.log (saxon1.receiveDamage(2))

// War



class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let saxonQty = this.saxonArmy.length;
    let randomSaxonNum = Math.random() * saxonQty;
    let randomSaxonIndex = Math.floor(randomSaxonNum);
    let randomSaxon= this.saxonArmy[randomSaxonIndex]

    let vikingQty = this.vikingArmy.length;
    let randomVikingNum = Math.random() * vikingQty;
    let randomVikingIndex = Math.floor(randomVikingNum);
    let randomViking=this.vikingArmy[randomVikingIndex]

    let vikAttack=randomSaxon.receiveDamage(randomViking.strength) 
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex,1);
    }
  
    return vikAttack;
  }

  saxonAttack() {
    let saxonQty = this.saxonArmy.length;
    let randomSaxonNum = Math.random() * saxonQty;
    let randomSaxonIndex = Math.floor(randomSaxonNum);
    let randomSaxon= this.saxonArmy[randomSaxonIndex]

    let vikingQty = this.vikingArmy.length;
    let randomVikingNum = Math.random() * vikingQty;
    let randomVikingIndex = Math.floor(randomVikingNum);
    let randomViking=this.vikingArmy[randomVikingIndex]

    let saxAttack = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex,1);
    }
    return saxAttack;
  }

  showStatus(){
    if(this.saxonArmy.length===0){
      return "Vikings have won the war of the century!"
    }else if(this.vikingArmy.length===0){
      return "Saxons have fought for their lives and survived another day..."
    }else{
      return "Vikings and Saxons are still in the thick of battle."
    }
    }
}

let viking1 = new Viking('Josh', 10, 8);
let viking2 = new Viking('Paul', 7, 9);
let viking3 = new Viking('Ash', 7, 11);
let viking4 = new Viking('Bob', 8, 2);
let saxon1 = new Saxon(6, 8);
let saxon2 = new Saxon(10, 7);
let saxon3 = new Saxon(12, 8);
let saxon4 = new Saxon(3, 6);

let war= new War ("Guerra")
war.addViking(viking1)
war.addViking(viking2)
war.addViking(viking3)
war.addViking(viking4)

war.addSaxon(saxon1)
war.addSaxon(saxon2)
war.addSaxon(saxon3)
war.addSaxon(saxon4)


//console.log(war.vikingArmy)
//console.log(war.saxonArmy)

//war.vikingAttack()
//console.log(war.vikingAttack())
//console.log(war.saxonArmy)
//war.saxonAttack()
//console.log(war.vikingArmy)








// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
