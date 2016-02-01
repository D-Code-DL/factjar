alert("When you're team is ready. Click your team's jar.");

var team1JarEl = document.getElementById("team1jar");
var team2JarEl = document.getElementById("team2jar");

team1JarEl.addEventListener("click", factJarFirstClick);
team2JarEl.addEventListener("click", factJarFirstClick);

var team1RemainingFacts = 0;
var team1Points = 0;
var team2RemainingFacts = 0;
var team2Points = 0;

function factJarFirstClick(){
  var facts = prompt("Enter the number of facts your team has in their jar");
  if(event.target === team1JarEl){
    team1RemainingFacts = facts;
    team1facts.innerHTML = facts;
    team1JarEl.removeEventListener("click", factJarFirstClick);
    team1JarEl.addEventListener("click", factJarPointClick);
  }
  else{
    team2RemainingFacts = facts;
    team2facts.innerHTML = facts;
    team2JarEl.removeEventListener("click", factJarFirstClick);
    team2JarEl.addEventListener("click", factJarPointClick);
  }
};

function factJarPointClick(){
  if(event.target === team1JarEl){
    if(team1RemainingFacts > 0){
      var newfacts = team1RemainingFacts - 1;
      team1facts.innerHTML = newfacts;
      team1RemainingFacts = newfacts;
      var teamGuess = prompt("So, who's fact is it? Did you guess correctly? Enter y or n");
      if(teamGuess === "y"){
        var newpoints = team2Points + 1;
        team2points.innerHTML = newpoints;
        team2Points = newpoints;
      }
    }
  }
  else{
    if(team2RemainingFacts > 0){
      var newfacts = team2RemainingFacts - 1;
      team2facts.innerHTML = newfacts;
      team2RemainingFacts = newfacts;
      var teamGuess = prompt("So, who's fact is it? Did you guess correctly? Enter y or n");
      if(teamGuess == "y"){
        var newpoints = team1Points + 1;
        team1points.innerHTML = newpoints;
        team1Points = newpoints;
      }
    }
  }
};
