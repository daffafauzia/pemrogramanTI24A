var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
]

let result = {}; 

for (let i = 0; i < motoGP.length; i++) {
  let event = motoGP[i];                   
  let country = event.winner.country;      
  let winnerName = event.winner.firstName + " " + event.winner.lastName; 
  let winLocation = event.circuit + ", " + event.location; 
  
  if (!result[country]) { 
    result[country] = { 
      winningCircuits: [],
      totalWin: 0
    };
  }

  result[country].winningCircuits.push({ 
    name: winnerName,
    winLocation: winLocation
  });

  result[country].totalWin++; 
}

console.dir(result, {depth : null, colors : true});
