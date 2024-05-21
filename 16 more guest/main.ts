

let guestlist: string [] = ['Danish','Kiran','Dilshad','kamran'];
//(let i =0; i<guestlist.lenth: i++){
//     console.log('Respected Sir/ Madam ' + guestlist [i] + '-you are invited for a dinner.');    
// }

let notpresent: string = 'Danish';

let newguest: string = 'Latif'

// guestlist[0] = newguest; 
// for(let i=0; i<guestlist.length; i++) {
//     console.log('Respected Sir/ Madam ' + guestlist [i] + '-you are invited for a dinner.');    
// }
guestlist.unshift('Humayoon','Waqar','Khalil')
for(let i=0; i<guestlist.length; i++) {
    console.log(guestlist [i] + ' - you are invited for a dinner for big table.\n');    
}


