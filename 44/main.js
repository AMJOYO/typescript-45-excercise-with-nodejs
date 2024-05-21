function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Serving Sandwich with following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy You Sandwich ");
}
makeSandwich("Boil Egg", "Cheese", "Chicken");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Boil Egg", "Cheese", "Chicken", "Tomato");
