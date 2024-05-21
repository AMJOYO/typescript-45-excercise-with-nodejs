
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))
}

function make_great(magicians:string[]){
    return magicians.map(name=> `The Great ${name}`)

}

let megicians_names = ["Khadim","Kamran", "Waqar"]

let copy_magician_names = megicians_names.slice();

let copy_great_magicians =make_great(copy_magician_names)
show_magicians(megicians_names);

show_magicians(copy_great_magicians);