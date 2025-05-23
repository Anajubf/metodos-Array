let playlist =  ["Funk", "Hip-hop", "Pop", "Rock", "Jazz"];

let playlistFiltrada = playlist.filter(musica => musica.length > 4);

console.log(`Playlist filtrada (musicas com mais de 4 letras): ${playlistFiltrada}`);