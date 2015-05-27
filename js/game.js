/* Slumpa ett ord från listan*/

var ordlista = ["mjauu", "malin", "banan"];

var valtOrd = ordlista[Math.floor(Math.random()*3)];

console.log(valtOrd);


var tries = 0;
var counts = 3;


/*Låt användaren gissa ordet */

var button = document.getElementsByTagName("button")[0];

   
    button.addEventListener("click", function () {
        
        if(tries<counts){
            tries++;
            
        var anvandarOrd = document.getElementsByTagName("input")[0].value;

        /* Hämta rutor och lägg in bokstäverna rätt */

        var rutor = document.getElementsByTagName("td");

        for(var i= 0; i < 5; i++){
            rutor[i].innerHTML = anvandarOrd[i];

            if(anvandarOrd[i]===valtOrd[i]){
            rutor[i].style.background = "green";


            }
            else {
                rutor[i].style.background = "red";

            }


        }
        var timesLeft = counts-tries;

        if(anvandarOrd===valtOrd){
            alert("GRATTIS! DU VANN!");
        }
        else if(tries<counts){
            alert("FÖRSÖK IGEN! Du har nu " + timesLeft + " gånger kvar att gissa.");          
        }
        else if (tries>=counts){
            alert("DU FÖRLORADE! DIN SOPA!")
            
        }
    

  
}       })
      