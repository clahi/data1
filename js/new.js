// User defined class node 
class Node { 
	// constructor 
	constructor(element) 
	{ 
		this.element = element; 
		this.next = null
	} 
} 

// linkedlist class 
class LinkedList { 
	constructor() 
	{ 
		this.head = null; 
		this.size = 0; 
	} 

	// functions to be implemented 
	// add(element) 
	// insertAt(element, location) 
	// removeFrom(location) 
	// removeElement(element) 

	// Helper Methods 
	// isEmpty 
	// size_Of_List 
	// PrintList 

// adds an element at the end 
// of list 
add(element) 
{ 
	// creates a new node 
	var node = new Node(element); 

	// to store current node 
	var current; 

	// if list is Empty add the 
	// element and make it head 
	if (this.head == null) 
		this.head = node; 
	else { 
		current = this.head; 

		// iterate to the end of the 
		// list 
		while (current.next) { 
			current = current.next; 
		} 

		// add node 
		current.next = node; 
	} 
	this.size++; 
} 

// insert element at the position index 
// of the list 
insertAt(element, index) 
{ 
	if (index > 0 && index > this.size) 
		return false; 
	else { 
		// creates a new node 
		var node = new Node(element); 
		var curr, prev; 

		curr = this.head; 

		// add the element to the 
		// first index 
		if (index == 0) { 
			node.next = head; 
			this.head = node; 
		} else { 
			curr = this.head; 
			var it = 0; 

			// iterate over the list to find 
			// the position to insert 
			while (it < index) { 
				it++; 
				prev = curr; 
				curr = curr.next; 
			} 

			// adding an element 
			node.next = curr; 
			prev.next = node; 
		} 
		this.size++; 
	} 
} 

// removes an element from the 
// specified location 
removeFrom(index) 
{ 
	if (index > 0 && index > this.size) 
		return -1; 
	else { 
		var curr, prev, it = 0; 
		curr = this.head; 
		prev = curr; 

		// deleting first element 
		if (index == = 0) { 
			this.head = curr.next; 
		} else { 
			// iterate over the list to the 
			// position to removce an element 
			while (it < index) { 
				it++; 
				prev = curr; 
				curr = curr.next; 
			} 

			// remove the element 
			prev.next = curr.next; 
		} 
		this.size--; 

		// return the remove element 
		return curr.element; 
	} 
} 

// removes a given element from the 
// list 
removeElement(element) 
{ 
	var current = this.head; 
	var prev = null; 

	// iterate over the list 
	while (current != null) { 
		// comparing element with current 
		// element if found then remove the 
		// and return true 
		if (current.element == = element) { 
			if (prev == null) { 
				this.head = current.next; 
			} else { 
				prev.next = current.next; 
			} 
			this.size--; 
			return current.element; 
		} 
		prev = current; 
		current = current.next; 
	} 
	return -1; 
} 

// finds the index of element 
indexOf(element) 
{ 
	var count = 0; 
	var current = this.head; 

	// iterae over the list 
	while (current != null) { 
		// compare each element of the list 
		// with given element 
		if (current.element == = element) 
			return count; 
		count++; 
		current = current.next; 
	} 

	// not found 
	return -1; 
} 

// checks the list for empty 
isEmpty() 
{ 
	return this.size == 0; 
} 

// gives the size of the list 
size_of_list() 
{ 
	console.log(this.size); 
} 

// prints the list items 
printList() 
{ 
	var curr = this.head; 
	var str = ""; 
	while (curr) { 
		str += curr.element + " "; 
		curr = curr.next; 
	} 
	console.log(str); 
} 

}

var ll = new LinkedList();

var pushButton = document.getElementById("push");
var sizeButton = document.getElementById("size");
var peekButton = document.getElementById("peek");
var popButton = document.getElementById("pop");
var printButton = document.getElementById("print");
var emptyButton = document.getElementById("empty");
var fullButton = document.getElementById("full");
var numInput = document.querySelector("input");

// sizeButton.addEventListener("click", function(){
//     stack.printSize();
// });

// peekButton.addEventListener("click", function(){
//     stack.peek();
// });

// popButton.addEventListener("click", function(){
//     stack.pop();
//     stack.printStack();
//     stack.printSize();
// });

// emptyButton.addEventListener("click", function(){
//     if (stack.issize()) {
//         document.getElementById("ise").innerHTML = "The stack is Empty";
//     }
//     else {
//         document.getElementById("ise").innerHTML = "The stack is not Empty";
//     }
// });

// fullButton.addEventListener("click", function(){
//     if (stack.ispeek()) {
//         document.getElementById("isf").innerHTML = "The stack is Full";
//     }
//     else {
//         document.getElementById("isf").innerHTML = "The stack is not Full";
//     }
// });

printButton.addEventListener("click", function(){
    ll.printList();
});

numInput.addEventListener("change", function(){
    ll.add(this.value);
    this.value = '';
});
