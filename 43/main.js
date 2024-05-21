function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var megicians_names = ["Khadim", "Kamran", "Waqar"];
var copy_magician_names = megicians_names.slice();
var copy_great_magicians = make_great(copy_magician_names);
show_magicians(megicians_names);
show_magicians(copy_great_magicians);
