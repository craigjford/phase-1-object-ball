console.log("Advanced debugging example running.");
debugger;
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
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Bismak Biyombo": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "DeSagna Diop": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Ben Gordon": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Brendan Haywood": {
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
  };
}

//gameObject();
// first, define the function.

function goodPractices() {
  let game = gameObject();
  debugger;

  for (let gameKey in game) {
    console.log(`game values = ${game.values}`);
    let v = 24;
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      let x = 25;
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger;

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.players;
      for (let key in data) {
        console.log("in players");
        let a = 1;
        let b = 2;
        debugger;
      }
    }
  }
}

// then, call the function so it runs!
console.log(goodPractices());

function teamColors(team) {
  return gameObject()[team]["colors"];
}
console.log(teamColors("home"));
/*
let oo = { foo: 42, bar: 83, baz: 79 };
for (let key in oo) {
  let value = oo[key];
  console.log("key:", key, "value:", value);
}

let oo = { foo: 42, bar: 83, baz: 79 };
console.log("   Object.keys(oo) =>", Object.keys(oo));
console.log(" Object.values(oo) =>", Object.values(oo));
console.log("Object.entries(oo) =>", Object.entries(oo));
*/
