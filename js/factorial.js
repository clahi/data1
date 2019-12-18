var up = document.getElementById('GFG_UP'); 
var down = document.getElementById('GFG_DOWN'); 
var nu = document.getElementById('num');
var n = 3; 
nu.addEventListener("change", function(){
    n = this.value;
    up.innerHTML = "Click on the button to calculate" 
        + " the factorial of n.<br> <br> n = " + this.value;
    this.value = " "; 
});


up.innerHTML = "Click on the button to calculate" 
        + " the factorial of n.<br> <br> Choose a number"; 

function Factorial(n) { 
    if (n === 0) { 
        return 1; 
    } 
    else { 
        return n * Factorial( n - 1 ); 
    } 
} 

function GFG_Fun() { 
    down.innerHTML = Factorial(n); 
} 