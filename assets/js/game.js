// Pseudocode: Game States
// "WIN" - Player robot has defeated all enemy-robots
//  *   Fight all enemy-robots
//  *   Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



// var playerName = 'INPUT'
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack + " Attack", playerHealth + " Health", playerMoney + " Money");

var enemyNames = [" Roborto", " Amy Android", " Robo Trumble"];

/* console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
} */

var enemyHealth = 50;
var enemyAttack = 12;

  // fight function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robt is alive
    while (enemyHealth > 0) {
        // Alert players that they are starting the round
        // window.alert("Welcome to Robot Gladiators!");

        //ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {

            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
            );
    
        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " has died!");
        } else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    
        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // if player chose to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip the fight. Goodbye!");
                playerMoney = playerMoney - 2;
            } 
            // if no (false), ask question again by running fight() again
            else {
                fight();
            }
        // if player did not choose 1 or 2 in prompt
        } else {
            window.alert("You need to pick a valid option. Try again!");
            fight();
        }
    }
}; // end of fight function

// run fight function to start game

for(var i = 0; i < enemyNames.length; i++) {
    //debugger; *Testing code bugs*
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // call fight function with enemy-robot
    fight(pickedEnemyName);
}
