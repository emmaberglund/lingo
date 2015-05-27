/* Slumpa ett ord från listan*/

var ordlista = ["mjauu", "malin", "banan"];

var valtOrd = ordlista[Math.floor(Math.random()*3)];

console.log(valtOrd);


/*Låt användaren gissa ordet */

var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function () {
    var anvandarOrd = document.getElementsByTagName("input")[0].value;
    
    
    if(valtOrd===anvandarOrd){
        alert("GRATTIS!!");
        
    
    }
    else {
        alert("OBS! FÖRSÖK IGEN!")
    
    }


})