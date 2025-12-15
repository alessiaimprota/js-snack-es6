/*

BONUS 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const zucchini=[
  {
    variety: "Black Beauty",
    weight: 250,
    length: 12
  },
  {
    variety: "Romanesco",
    weight: 180,
    length: 18
  },
  {
    variety: "Round Zucchini",
    weight: 150,
    length: 10
  },
  {
    variety: "White Bush",
    weight: 210,
    length: 20
  },
  {
    variety: "Golden Zucchini",
    weight: 230,
    length: 13
  },
  {
    variety: "Striata d'Italia",
    weight: 200,
    length: 21
  },
  {
    variety: "Tromboncino",
    weight: 400,
    length: 14
  },
  {
    variety: "Grey Zucchini",
    weight: 190,
    length: 19
  },
  {
    variety: "Costata Romanesca",
    weight: 270,
    length: 24
  },
  {
    variety: "Rugosa Friulana",
    weight: 160,
    length: 15
  }
]

let zucchiniLength=0;
let zucchiniWeight=0;

const longZucchini=[]
const shortZucchini=[]

for (let index = 0; index < zucchini.length; index++) {
    const element = zucchini[index];
    if(element.length<15){
        shortZucchini.push(element)
    }    
    else{
        longZucchini.push(element)
    }
}

console.log(shortZucchini)
console.log(longZucchini)






/* for (let index = 0; index < zucchine.length; index++) {
    const zucchina = zucchine[index];
    pesoTotale += zucchina.peso; 
}
console.log(pesoTotale)*/