class Ninja{
    constructor(name, health=10, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`My Name is ${this.name}`);
    }

    showStats(){
        console.log(`My stats are: Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`)
    }

    drinkSake(){
        this.health += 10;
        console.log(`Drinking Sake, my health is now ${this.health}`)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();