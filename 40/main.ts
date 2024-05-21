
function make_album(artist_name:string, album_title:string, tracks?:string){
    let album: {artist:string, title:string, tracks?:string} = {
        artist: artist_name,
        title: album_title
    };
    if(tracks!== undefined){
        album.tracks = tracks;
}
return album;
}
let album1 = make_album("Manan","Zindage")
console.log(album1);


