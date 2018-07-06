// Write your JS here
console.log("I'm working as a file with new name!");

let hero = {};
hero.name = "Ember Spirit";
hero.heroic = true;
hero.inventory = [];
hero.health = 10;
hero.weapon = {
    type: "Ember Sword",
    damage : 2
}

let rest = function(character){
    character.health = 10;
    return character
};
let pickUpItem = function(){};
let equipWeapon = function(){};