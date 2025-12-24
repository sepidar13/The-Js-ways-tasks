// Character inventory
// Improve the example RPG to add character inventory management according to the following rules:

// A character's inventory contains a number of gold and a number of keys.

// Each character begins with 10 gold and 1 key.

// The character description must show the inventory state.

// When a character slays another character, the victim's inventory goes to its vanquisher.

//** S O L U T I O N **//
class Character {
  constructor(name,health,strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
    this.inventoryState = {
      gold:10,
      key:1
};
}
  attack(target){
    if(this.health > 0){
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damages point`
 );
      target.health -= damage;
      if(target.health > 0){
        console.log(`${target.name} has ${target.health} health points left`)
}
      else{
        target.health = 0;
        const bonusXP = 10;
        console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} and ${this.inventoryState.gold} gold and ${this.inventoryState.key} key`);
        this.xp += bonusXP
        // target.inventoryState.gold -=10
        // target.inventoryState.key -=1
        
        this.inventoryState.gold +=10
        this.inventoryState.key +=1
      
}}
      else {
        console.log(`${this.name} can't attack (they've been eliminated`)
  }}
  description() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strenght and ${this.xp} XP points and ${this.inventoryState.gold} gold and ${this.inventoryState.key} key`
  }
}

const aurora = new Character("Aurora", 150, 25)
const glacius = new Character('Glacius',130,30)
console.log("Welcome to the adventure!Here are our heroes:")
console.log(aurora.description())
console.log(glacius.description())

const monster = new Character("spike",40,20)
console.log(`A wild monster has appeared:it's named ${monster.name}`)

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.description())
console.log(glacius.description())








