/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/


//genero array con oggetti bici che hanno nome e peso come proprietà
const bicycles=[
  {
    name: "Specialized Tarmac SL7",
    weight: 7.11
  },
  {
    name: "Trek Emonda SLR 9",
    weight: 6.72
  },
  {
    name: "Cannondale SuperSix EVO Hi-Mod",
    weight: 7.5
  },
  {
    name: "Canyon Aeroad CFR Di2",
    weight: 7.3
  },
  {
    name: "Pinarello Dogma F",
    weight: 6.9
  },
  {
    name: "Giant TCR Advanced SL 0 Disc",
    weight: 7.0
  },
  {
    name: "Bianchi Specialissima RC",
    weight: 6.6
  },
  {
    name: "Cervélo R5",
    weight: 6.9
  },
  {
    name: "Factor O2 VAM",
    weight: 6.7
  },
  {
    name: "Scott Addict RC Pro",
    weight: 7.2
  }
]

//creo una variabile a cui assegnerò come valore il primo oggetto dell'array
let leastWeighted = bicycles[0];
//faccio partire il ciclo per tutta la lunghezza dell'array andremo a confrontare se bicycles[index].weight è minore della proprietà .weight della variabile leastWeighted questo comporta che 
//se bicycles[index].weight è minore di leastWeighted.weight bicycles[index] si andrà a sostituire come valore a bicycles[0] che avevamo messo all'inizio e continuerà a sostiruirsi nel caso in
//bicycles[index].weight è minore di leastWeighted.weight, dandomi alla fine la bici col peso minore
for (let index = 0; index < bicycles.length; index++) {
  const element = bicycles[index];
  console.log(element)
  if(element.weight<leastWeighted.weight){
    leastWeighted=element;
  }
}

console.log(`la bici col peso minore è la ${leastWeighted.name} con il peso di ${leastWeighted.weight} kg`)

console.log("la bici più leggera è", leastWeighted)