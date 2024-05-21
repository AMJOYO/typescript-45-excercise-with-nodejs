function makeSandwich(...items: string[]){
    console.log("\n Serving Sandwich with following items: \n");
     items.forEach(singleItem => console.log(singleItem));
     console.log("\nNow Enjoy You Sandwich ");
}

makeSandwich("Boil Egg", "Cheese","Chicken")

makeSandwich("Bread", "Butter");

makeSandwich("Bread","Butter","Boil Egg", "Cheese","Chicken","Tomato")