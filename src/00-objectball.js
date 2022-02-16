function gameObject() {
  return {
    home: {
      teamname: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brooks Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamname: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}


function players() {
  return Object.assign({}, homeTeam().players, awayTeam().players);
}
//console.log(players());

function homeTeam() {
  return gameObject().home;
}
//console.log(homeTeam());

function awayTeam() {
  return gameObject().away;
}
//console.log(awayTeam());

function numPointsScored(playerInp) {
    return players()[playerInp].points;
}
console.log(numPointsScored('Ben Gordon'));

function shoeSize(playerInp) {
  return players()[playerInp].shoe;
}
console.log(shoeSize('Ben Gordon'));

function teamColors(teamName) {
  return gameObject()[teamName].colors;
}
console.log(teamColors('home'));

function teamNames() {
  let teamArray = [];

  teamArray.push(homeTeam().teamname);
  teamArray.push(awayTeam().teamname);

  return teamArray;
}
console.log(teamNames());

function playerNumbers(team) {
  let jerseyArray = [];

  if (team === 'home') {
      for(pl in homeTeam().players) {
          jerseyArray.push(homeTeam().players[pl].number);
      }
  } else {
      for(pl in awayTeam().players) {
          jerseyArray.push(awayTeam().players[pl].number);
      }
  }
  return jerseyArray;
}
console.log(playerNumbers('away'));

function playerStats(playerInp) {
    const playerObj = players()[playerInp];
    return playerObj;   
}
console.log(playerStats('Jeff Adrien'));

function playerShoeRebound(playerInp) {
  return [players()[playerInp].shoe, players()[playerInp].rebounds]
}

function bigShoeRebounds() {

    let plArray = Object.entries(players());
    let plName = '';
    let playerHold = '';
    let pointsHold = 0;
    let shoeRebArr = [];

    for (let i = 0; i < plArray.length; i++) {
          plName = plArray[i][0];
          shoeRebArr = playerShoeRebound(plName);
          sh = shoeRebArr[0];
          rb = shoeRebArr[1];

          if (i === 0) {
            playerHold = plName;
            shoeHold =  sh;
            reboundHold = rb; 
          }
    
          if (sh > shoeHold) {
                playerHold = plName;
                shoeHold =  sh;
                reboundHold = rb; 
          }
    }
    return reboundHold;
}
console.log(bigShoeRebounds());

function mostPointsScored() {

    const shooterArray = Object.entries(players());
    let plName = '';
    let shooterPoints = 0;
    let shooterHold = 0;
    let pointsHold = 0;

    for (let i = 0; i < shooterArray.length; i++) {
        plName = shooterArray[i][0];
        shooterPoints = numPointsScored(plName);
        if (i === 0) {
            shooterHold = plName;
            pointsHold = shooterPoints;
        }  

        if (shooterPoints > pointsHold) {
          shooterHold = plName;
          pointsHold = shooterPoints;
        }  
    }   
    return shooterHold;
}
console.log(mostPointsScored());


function winningTeam() {
    let homePoints = 0;
    let awayPoints = 0;

    for(pl in homeTeam().players) {
        homePoints += homeTeam().players[pl].points;
    }
 
    for(pl in awayTeam().players) {
       awayPoints += awayTeam().players[pl].points;
    }
    
      if (homePoints > awayPoints) {
          return 'Home';
      } else if (awayPoints > homePoints) {
          return 'Away';  
      } else {
          return `Both teams had ${homePoints} points`;
      }    
}
console.log(winningTeam());

function playerWithLongestName() {
  const shooterArray = Object.entries(players());

  let plName = '';
  let plHold = '';
  let nameLength = 0;
  let lengthHold = 0;


  for (let i = 0; i < shooterArray.length; i++) {
      plName = shooterArray[i][0];
      nameLength = plName.length;
      if (i === 0) {
          plHold = plName;
          lengthHold = nameLength;
      }  

      if (nameLength > lengthHold) {
          plHold = plName;
          lengthHold = nameLength;
      }  
  }   
  return plHold;
}
console.log(playerWithLongestName());


function doesLongNameStealATon() {
  let longestName = playerWithLongestName();

  const stealsArray = [];
  let stealsHold = 0;
  const jordanArray = [];
  let nameHold = '';
  
  counter = 0;
  for(pl in homeTeam().players) {
     stealsArray[counter] = homeTeam().players[pl].steals;
     jordanArray[counter] = pl;
     counter++;
  }

  for(pl in awayTeam().players) {
    stealsArray[counter] = awayTeam().players[pl].steals;
    jordanArray[counter] = pl;
    counter++;
  } 

  for (let i = 0; i < jordanArray.length; i++) {    
        if (stealsArray[i] > stealsHold) {
            stealsHold = stealsArray[i];
            nameHold = jordanArray[i];
        }
  }
  return (nameHold === longestName);

}
console.log(doesLongNameStealATon());
