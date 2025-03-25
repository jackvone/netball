let teamAScore = 0;
let teamBScore = 0;

function updateScore(team, points) {
  if (team === 'teamA') {
    teamAScore += points;
    document.getElementById('teamAScore').textContent = teamAScore;
  } else {
    teamBScore += points;
    document.getElementById('teamBScore').textContent = teamBScore;
  }
}

function resetScores() {
  teamAScore = 0;
  teamBScore = 0;
  document.getElementById('teamAScore').textContent = teamAScore;
  document.getElementById('teamBScore').textContent = teamBScore;
}
