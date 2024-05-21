
// • Loop through the new_users list to see if each new 
// username has already been used. If it has, print a message that the 
// person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used,
// 'JOHN' should not be accepted.

// • Make a list of five or more usernames called current_users.
let current_users=["Danish","Khalil","Mehwish","Bisharat","kainat"]
// • Make another list of five usernames called new_users. 
let new_users=["Danish","Zohaib","Ali","Ahmed","Mehwish","khalil"]

for (let new_user of new_users) {
    let is_used = current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase());

    if (is_used) {
        console.log(`The username ${new_user} has already been used. Please enter a new username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}
