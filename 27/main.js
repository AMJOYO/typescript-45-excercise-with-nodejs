// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//First Version
var aliencolor = "Green";
if (aliencolor === "Green") {
    console.log("(Version 1)The player earned 5 points");
}
else if (aliencolor === "Yellow") {
    console.log("The player earned 10 points");
}
else if (aliencolor === "red") {
    console.log("The player earned 15 points");
}
//Second Version
var aliencolor1 = "Yellow";
if (aliencolor1 === "Green") {
    console.log("The Player earned 5 points");
}
else if (aliencolor1 = "Yellow") {
    console.log("(Version 2)The player earned 10 points");
}
else if (aliencolor1 = "Red") {
    console.log("The player earned 15 points");
}
//Third Version
var aliencolor2 = "Red";
if (aliencolor2 === "Green") {
    console.log("The player earned 5 points");
}
else if (aliencolor2 === "Yellow") {
    console.log("The player earned 10 points");
}
else if (aliencolor2 === "Red") {
    console.log("(Version 3)The player earned 15 points");
}
