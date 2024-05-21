var guestlist = ['Danish', 'Kiran', 'Dilshad'];
for (var i = 0; i < guestlist.length; i++) {
    console.log('Respected Sir/ Madam ' + guestlist[i] +
        ' \nyou are invited for a dinner tommorow sharp 10 0 Clock.\n\nThank you');
}
var notpresent = 'Danish';
var newguest = 'Latif';
guestlist[1] = newguest;
for (var i = 0; i < guestlist.length; i++) {
    console.log('Respected Sir/ Madam ' + guestlist[i] + ' \nyou are invited for a dinner.\n\nThank you');
}
console.log("Mr. ".concat(notpresent, " will not coming tomorrow."));
