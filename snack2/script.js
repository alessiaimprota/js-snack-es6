/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

//Creo un array che ha come oggetti le squadre, che hanno come proprietà nome, punti e falli. Setto su zero sia punti che falli
const team =[
  {
    name: "Juventus",
    pointsScored: 0,
    foulsConceded: 0
  },
  {
    name: "Inter Milan",
    pointsScored: 0,
    foulsConceded: 0
  },
  {
    name: "AC Milan",
    pointsScored: 0,
    foulsConceded: 0
  },
  {
    name: "Napoli",
    pointsScored: 0,
    foulsConceded: 0
  },
  {
    name: "AS Roma",
    pointsScored: 0,
    foulsConceded: 0
  },
  {
    name: "Lazio",
    pointsScored: 0,
    foulsConceded: 0
  },
  {
    name: "Atalanta",
    pointsScored: 0,
    foulsConceded: 0
  },
  {
    name: "Fiorentina",
    pointsScored: 0,
    foulsConceded: 0
  },
  {
    name: "Torino",
    pointsScored: 0,
    foulsConceded: 0
  },
  {
    name: "Bologna",
    pointsScored: 0,
    foulsConceded: 0
  }
]

//console.log(team)

//Creo un array vuoto dove pushare poi nomi e falli della squadra
teamsNewArray=[]
//faccio una variabile sia per i punti che per i falli
let points;
let fouls;
 

//ciclo per generare random punti e falli e pusho solo nomi e falli nell'array nuovo
for (let index = 0; index < team.length; index++) {
  points= team[index].pointsScored = genRandomNumber(1,5)
  fouls=team[index].foulsConceded = genRandomNumber(0,5)
  teamsNewArray.push({'name':team[index].name,
                    'foulsConceded': fouls})
}


console.log("ecco l'array con solo nomi squadre e falli subiti", teamsNewArray)


///////funzione per generare numeri random/////
function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

