
function findTournamentWinner(competitions, results) {  
  const mapTeamResults = {};
  const length = competitions.length;
  let i = 0;

  while (i < length) {
    let roundWinner = '';
    
    if (results[i] === 1) {
      roundWinner = competitions[i][0];
    } else {
      roundWinner = competitions[i][1];
    }
    mapTeamResults[roundWinner] = (mapTeamResults[roundWinner] || 0) + 1;
    i++;
  }

  const winner = Object.entries(mapTeamResults)
    .reduce((currentBestTeam, [team, result]) => {
      if (currentBestTeam.result < result) {
        currentBestTeam = { team, result };
      }
      return currentBestTeam;
    }, { team: '', result: 0} )

  return winner.team
}

//// TESTS

const competitions = [["pirates", "poopies"], ["poopies", "pepes"], ["pepes", "pirates"]];
const results = [1,0,0];

console.log(findTournamentWinner(competitions,results))