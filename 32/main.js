// • Loop through the new_users list to see if each new 
// username has already been used. If it has, print a message that the 
// person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used,
// 'JOHN' should not be accepted.
// • Make a list of five or more usernames called current_users.
var current_users = ["Danish", "Khalil", "Mehwish", "Bisharat", "kainat"];
// • Make another list of five usernames called new_users. 
var new_users = ["Danish", "Zohaib", "Ali", "Ahmed", "Mehwish", "khalil"];
var _loop_1 = function (new_user) {
    var is_used = current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); });
    if (is_used) {
        console.log("The username ".concat(new_user, " has already been used. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(new_user, " already excited."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
