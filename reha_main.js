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
let pickUpItem = function(character, item){
    character.inventory.push(item);
};
let equipWeapon = function(character){

    if (character.inventory.length === 0){
        return
    }else{
        character.weapon = character.inventory[0];
    }

};

document.getElementById("inn").addEventListener("click", function(){
    console.log("Img with id inn clicked");
    rest(hero);
});

document.getElementById("dagger").addEventListener("click", function(){
    console.log("Img with id dagger");
    let dagger = {
        type: "dagger",
        damage : 2
    }
    pickUpItem(hero, dagger);
});
console.log(hero);

document.getElementById("bag").addEventListener("click", function(){
    equipWeapon(hero);
})

let displayStats = function(){
    var heroStats = document.createElement("div");
    

    var heroName = document.createTextNode(`Hero Name :  ${hero.name}`);
    heroStats.appendChild(heroName);
    heroStats.appendChild(document.createElement("br"));    

    var heroHealth = document.createTextNode(`Hero Health : ${hero.health}`);
    heroStats.appendChild(heroHealth);
    heroStats.appendChild(document.createElement("br"));    

    var heroWeaponType = document.createTextNode(`Weapon Type: ${hero.weapon.type}`);
    heroStats.appendChild(heroWeaponType);
    heroStats.appendChild(document.createElement("br"));    

    var heroWeaponDamage = document.createTextNode(`Weapon Damage: ${hero.weapon.damage}`);
    heroStats.appendChild(heroWeaponDamage);
    heroStats.appendChild(document.createElement("br"));    

    document.getElementById("main").appendChild(heroStats);

//health, weapontype, weapon damage

};

displayStats();