let playlist = ["Funk", "Hip-hop", "Pop"];

let playlistEmCaps = playlist.map(musica => musica.toUpperCase());

console.log(`Playlist em maiusculas: ${playlistEmCaps}`);

let clone = playlist.map(item => item); //Apenas copia os itens
console.log(`Clonagem com map(): ${clone.join(',')}`);

let minuscula = playlist.map(item => item.toLowerCase());
console.log(`Minúsculas com map(): ${minuscula.join(',')}`);

let maiuscula = playlist.map(item => item.toUpperCase());
console.log(`Maiúsculas com map(): ${maiuscula.join(',')}`);

let numeros = [10, 20, 30, 40, 50];

let dobrados = numeros.map(n => n * 2);
console.log(`Valores dobrados: ${dobrados.join(', ')}`);

let metades = numeros.map(n => n / 2);
console.log(`Valores pela metade: ${metades.join(', ')}`);

let comoTexto = numeros.map(n => `${n} pts`);
console.log(`Como texto: ${comoTexto.join(', ')}`);