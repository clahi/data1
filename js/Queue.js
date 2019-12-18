
class Queue 
{ 
    // Array is used to implement a Queue 
    constructor() 
    { 
        this.items = []; 
    } 
                  
    // Functions to be implemented 
    // enqueue(item) 
    // dequeue() 
    // front() 
    // isEmpty() 
    // printQueue() 
 
// enqueue function 
enqueue(element) 
{     
    // adding element to the queue 
    this.items.push(element); 
} 
// dequeue function 
dequeue() 
{ 
    // removing element from the queue 
    // returns underflow when called  
    // on empty queue 
    if(this.isEmpty()) 
        return "Underflow"; 
    return this.items.shift(); 

} 
// front function 
front() 
{ 
    // returns the Front element of  
    // the queue without removing it. 
    if(this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[0]; 
} 
// isEmpty function 
isEmpty() 
{ 
    // return true if the queue is empty. 
    return this.items.length == 0; 
} 

isFull() 
{ 
    // return true if the queue is empty. 
    return this.items.length == 10; 
} 
// printQueue function 
printQueue() 
{ 
    var str = " "; 
    for(var i = 0; i < this.items.length; i++) 
        str += this.items[i] +" "; 
	  document.getElementById("ex").innerHTML = "Elements in Queue: " + str;
    
} 
printSize(){
	document.getElementById("size").innerHTML = "The size of the Queue is: " + this.items.length;
}

}

var queue = new Queue();

var enqueueButton = document.getElementById("enq");
var emptyButton = document.getElementById("empty");
var fullButton = document.getElementById("full");
var dequeButton = document.getElementById("deq");
var printButton = document.getElementById("print");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


// enqueueButton.addEventListener("click", function(){
// 	queue.enqueue(this.value);
// });
emptyButton.addEventListener("click", function(){
	if (queue.isEmpty()) {
		document.getElementById("ise").innerHTML = "The Queue is Empty";
	}
	else {
		document.getElementById("ise").innerHTML = "The Queue is not Empty";
	}
});

fullButton.addEventListener("click", function(){
	if (queue.isFull()) {
		document.getElementById("isf").innerHTML = "The Queue is Full";
	}
	else {
		document.getElementById("isf").innerHTML = "The Queue is not Full";
	}
});

dequeButton.addEventListener("click", function(){
	queue.dequeue();
	queue.printQueue();
	queue.printSize();
});

printButton.addEventListener("click", function(){
	queue.printQueue();
	queue.printSize();
	
});

numInput.addEventListener("change", function(){
	if (queue.isFull()) {
		document.getElementById("isf").innerHTML = "The Queue is Full";
	}
	else {
		document.getElementById("enqueued").innerHTML = "Equeued " + "( " + this.value + " )";
		queue.enqueue(this.value);
	    this.value = '';
	}
	
});