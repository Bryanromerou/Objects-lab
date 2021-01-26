//-------------------------------- 1. Syntax
// {} , = , : , name , value

//-------------------------------- 2. Me

//1
const me = {
  name: "Bryan Romero", 
  age: 23,
  email: "bryanromerou@gmail.com"
};

//2
console.log(me);

//3
console.log(me.name);

//4
me["age"] = 1000;

//5
console.log(me.age);

//6
me["place of residence"] = "Los Angeles";

//7
console.log(me["place of residence"]);

const ogre = {
  name : "Shrek",
  hitpoints: 100
}
const adventurer = {
  name : "Bryan Romero",
  hitpoints: 100,
  damage: 5
}
// console.log(Math.ceil(Math.random()*10 - 5)+ 5)
const randGen = (min,max) =>{
  return(Math.ceil(Math.random()*max - min)+ min);
}

let ogreDamage = 0
while(adventurer.hitpoints > 0 || ogre["hitpoints"]>0){
  ogreDamage = randGen(0,10)
  ogre.hitpoints -= adventurer.damage;
  adventurer.hitpoints -= ogreDamage;
  console.log(`%cOgre was hit! (${adventurer.damage} damage) `, 'color: #D90368');
  console.log(`%cAdventurer was hit! (${ogreDamage} damage)`, 'color: #094D92');
}

if(adventurer.hitpoints < 0 && ogre["hitpoints"] < 0){
  console.log("Its a Tie!")
}else if(adventurer.hitpoints < 0){
  console.log("Ogre Won!")
}else{
  console.log("Adventure Won!")
}
