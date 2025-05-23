let playlist = ["Funk", "Hip-hop", "Pop", "Rock", "Jazz", "Hino"];

console.log(`Antes do splice: ${playlist}`);

//Removendo 2 elementos a partir do índice 2
//let elementosRemovidos = playlist.splice(2, 2);

//console.log(`Depois do splice: ${playlist}`);
//console.log(`Elementos removidos: ${elementosRemovidos}`);


//Removendo 2 elementos a partir do indice 3
let desafio = playlist.splice(3, 2);

console.log(`Elementos removidos: ${desafio}`);
console.log(`Playlist depois de remover os 2 índices: ${playlist}`);