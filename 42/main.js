function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Daniyal", "Auoan", "Rauf"];
var great_magician = make_great(magician_names);
show_magician(great_magician);
