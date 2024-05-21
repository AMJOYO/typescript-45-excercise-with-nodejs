let guestlist: string [] = ['Danish','Kiran','Dilshad'];
for(let i=0; i<guestlist.length; i++) {
    console.log('Respected Sir/ Madam ' + guestlist [i] + 
    ' \nyou are invited for a dinner tommorow sharp 10 0 Clock.\n\nThank you');    
}
let notpresent: string = 'Danish';
let newguest: string = 'Latif'
guestlist[1] = newguest; 
for(let i=0; i<guestlist.length; i++) {
    console.log('Respected Sir/ Madam ' + guestlist [i] + ' \nyou are invited for a dinner.\n\nThank you');    
}
console.log(`Mr. ${notpresent} will not coming tomorrow.`);
