let playlist = ["Funk", "Hip-hop", "Pop", "Rock", "Jazz"];

let playlistOrdenada = playlist.sort();
console.log(`Playlist ordenada: ${playlistOrdenada}`);

let numeros = [10, 5, 100, 50, 1];

console.log(`Antes do sort: ${numeros}`);

//Ordenando os números de forma crescente 
let numerosOrdenadosCrescentes = numeros.sort((a, b) => a - b);
console.log(`Números em ordem cresecente: ${numerosOrdenadosCrescentes}`);

//Ordenando os números de forma Decrescente 
let numerosOrdenadosDecrescentes = numeros.sort((a, b) => b - a);
console.log(`Números em ordem Decresecente: ${numerosOrdenadosDecrescentes}`);