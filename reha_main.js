// Write your JS here
console.log("I'm working as a file with new name!");

const hero = {};
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
    displayStats();
});

document.getElementById("dagger").addEventListener("click", function(){
    console.log("Img with id dagger");
    let dagger = {
        type: "dagger",
        damage : 2
    }
    pickUpItem(hero, dagger);
    displayStats();
});
console.log(hero);

document.getElementById("bag").addEventListener("click", function(){
    equipWeapon(hero);
    displayStats();
})

let displayStats = function(){

    console.log(document.getElementById("hero-stats") === null);

    if (document.getElementById("hero-stats") !== null){
        document.getElementById("main")
            .removeChild(document.getElementById("hero-stats"));
    }

    var heroStats = document.createElement("div");
    heroStats.id = "hero-stats";
    

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

let changeHeroName = function(){
    
    console.log(document.getElementById("heroName").value);
    let newName = document.getElementById("heroName").value;

    hero.name = newName;
    displayStats();
    console.log(hero);

}

document.getElementById("change-hero-name").addEventListener("click", function(event){
    event.preventDefault();
    changeHeroName();
})

let fightEnemy = function(){

    if(hero.health <= 3){
        alert("Please rest your hero by clicking inn image with towers\nYour Hero has fought enough!");
        return false
    }    

    console.log("Fight Began");

    var elem = document.getElementById("main");
    var pElem = document.createElement("p");
    pElem.appendChild(document.createTextNode("Fighting, estimated duration 2 seconds!"));
    pElem.style.color = "blue";
    elem.appendChild(pElem);
    
    setTimeout(function(){
        hero.health -=3;
        var elem = document.getElementById("main");
        var pElem = document.createElement("p");
        pElem.style.color = "red";
        pElem.appendChild(document.createTextNode("Fought And WON!"))
        elem.appendChild(pElem);

        displayStats();
    }, 2000);

    return true
}

document.getElementById("fight-enemy").onclick = function(event){
    if (!fightEnemy()){
        return
    };
    console.log(event.target);
    document.getElementById("fight-enemy").removeChild(event.target);
    displayStats();
}

displayStats();