
var healthPoints = 100;

function updateHealthPoints(points) {

	healthPoints = points;
	var healthBar = document.querySelector("#healthBar");
	healthBar.style.width = points + "%";

	if(healthPoints < 1) {
		alert("Game over!");
		window.location.reload();
	}

}


function enemyLiving(){
    return document.querySelectorAll(".enemy:not(.deadd)");
}


function iAttack(element){
    element.classList.add("deadd");


    if(!enemyLiving().length){
        alert("YOU WON!");
        window.location.reload();
    }

}

function enemyShowed (element){

    if(healthPoints > 0){
        element.classList.add('enemyShows')
    
        setTimeout(()=>{
            enemyAttack(element)
        }, 1000)
    
        setTimeout(()=>{
            element.classList.remove('enemyShows')
        }, 2000)
    }
   
}


function enemyAttack(element){
    if(!element.classList.contains("deadd")) {

		element.classList.add("shooting");
		updateHealthPoints(healthPoints - 20);

    setTimeout(()=>{
        element.classList.remove("shooting")
    }, 200)
}
}



//this function selects a random enemy and lauch attack at rendom delay. 
function randomEnemyAttacks() {

	let randomEnemyNo = Math.floor(Math.random() * enemyLiving().length);
	let enemy = enemyLiving()[randomEnemyNo]; //because enemyLiving() returns array/object its..like object[]

	let randomDelay = Math.random() * 2000 + 1000;

	setTimeout( ()=> {
		enemyShowed(enemy);
		randomEnemyAttacks();
	}, randomDelay);

}


//keep looping
//function enemyAttacked (enemy){
//        enemy.classList.add('enemyShows');
//
//        //setTimeout(() => {
//        //    enemy.classList.remove('enemyShows')
//        //}, 400);
//
//        setInterval(()=>{
//            enemy.classList.add('enemyShows');
//            setTimeout(() => {
//            enemy.classList.remove('enemyShows')
//                }, 100);
//        }, 500)
//    
//}

const enemy1 = document.querySelector("#enemy1")
const enemy2= document.querySelector("#enemy2")
const enemy3= document.querySelector("#enemy3")
//enemyAttack(enemy1, 80)
//enemyAttack(enemy2, 100)
//enemyAttack(enemy3, 200)


