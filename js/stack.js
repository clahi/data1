
class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
    // Functions to be implemented 
    // push(item) 
    // pop() 
    // peek() 
    // issize() 
    // printStack() 
 
// push function 
push(element) 
{ 
    // push element into the items 
    this.items.push(element); 
} 
// pop function 
pop() 
{ 
    // return top most element in the stack 
    // and removes it from the stack 
    // Underflow if stack is size 
    if (this.items.length == 0) 
        document.getElementById("poped").innerHTML = "There are no elements in the stack";
   document.getElementById("poped").innerHTML = "The poped element is " + this.items.pop(); 
} 
// peek function 
peek() 
{ 
    // return the top most element from the stack 
    // but does'nt delete it. 
    if (this.items.length == 0) {
        document.getElementById("peek1").innerHTML = "There are no elements in the stack";
    }else{
         document.getElementById("peek1").innerHTML = "The peek of the stack is : " + this.items[this.items.length - 1];
    }
    
} 
// issize function 
issize() 
{ 
    // return true if stack is size 
    return this.items.length == 0; 
} 

ispeek() 
{ 
    // return true if stack is peek 
    return this.items.length == 20; 
} 
// printStack function 
printStack() 
{ 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
        str += this.items[i] + " "; 
    document.getElementById("ex").innerHTML = "Elements in the Stack:  " + str;
}
 
 printSize(){
    document.getElementById("size1").innerHTML = "The size of the Stack is: " + this.items.length;
}


}


// 

var stack = new Stack();

var pushButton = document.getElementById("push");
var sizeButton = document.getElementById("size");
var peekButton = document.getElementById("peek");
var popButton = document.getElementById("pop");
var printButton = document.getElementById("print");
var emptyButton = document.getElementById("empty");
var fullButton = document.getElementById("full");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


// pushButton.addEventListener("click", function(){
//  stack.enstack(this.value);
// });
sizeButton.addEventListener("click", function(){
    stack.printSize();
});

peekButton.addEventListener("click", function(){
    stack.peek();
});

popButton.addEventListener("click", function(){
    stack.pop();
    stack.printStack();
    stack.printSize();
});

emptyButton.addEventListener("click", function(){
    if (stack.issize()) {
        document.getElementById("ise").innerHTML = "The stack is Empty";
    }
    else {
        document.getElementById("ise").innerHTML = "The stack is not Empty";
    }
});

fullButton.addEventListener("click", function(){
    if (stack.ispeek()) {
        document.getElementById("isf").innerHTML = "The stack is Full";
    }
    else {
        document.getElementById("isf").innerHTML = "The stack is not Full";
    }
});

printButton.addEventListener("click", function(){
    stack.printStack();
    
    // printstack();
});

numInput.addEventListener("change", function(){
    if (stack.ispeek()) {
        document.getElementById("isf").innerHTML = "The stack is peek";
        this.value = '';
    }
    else {
        document.getElementById("stacked").innerHTML = "Stacked " + "( " + this.value + " )";
        stack.push(this.value);
        this.value = '';
    }
    
});