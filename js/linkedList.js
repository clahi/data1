 
 class Node { 
	// constructor 
	constructor(element) 
	{ 
		this.element = element; 
		this.next = null;
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
		document.getElementById("ind").innerHTML ="The list doesnot reach that size";
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
		document.getElementById("ind").innerHTML ="The list doesnot reach that size";
	else { 
		var curr, prev, it = 0; 
		curr = this.head; 
		prev = curr; 

		// deleting first element 
		if (index === 0) { 
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
		if (current.element === element) { 
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
	document.getElementById("notinList").innerHTML =element + " is not in the list"; 
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
		if (current.element === element) {
			document.getElementById("elementInd").innerHTML =element +  " is at index " + count;
			return count; 
		}
		count++; 
		current = current.next; 
	} 

	// not found 
	document.getElementById("elementInd").innerHTML =element +  " is not in the list";	
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
	if (this.size == 0) {
		document.getElementById("size1").innerHTML = "The Linkedlist is Empty";
	}
	else{
		document.getElementById("size1").innerHTML = "The size of this Linkedlist is:  " + this.size;
	}
	
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
	document.getElementById("ex").innerHTML = "Elements in the linkedlist:  " + str;
} 

}

var ll = new LinkedList();

// var printButton = document.getElementById("print");
var numInput1 = document.querySelector("input");
var numInput2 = document.getElementById("ele");
var indexInput = document.getElementById("index");
var addButton = document.getElementById("add");
var sizeButton = document.getElementById("size");
var removeInput = document.getElementById("rem");
var removeInput2 = document.getElementById("remElement");
var findButton = document.getElementById("elementIndex");



// printButton.addEventListener("click", function(){
//     ll.printList();
// });

numInput1.addEventListener("change", function(){
    ll.add(this.value);
    ll.printList();
    ll.size_of_list();
    this.value = " ";
});

// numInput2.addEventListener("change", function(){
//     var ele = this.value;
// 	});
// indexInput.addEventListener("change", function(){
//     var pos = this.value;
// 	});

addButton.addEventListener("click", function(){
	// alert("clicked");
	ll.insertAt(numInput2.value, indexInput.value);
	ll.printList();
	ll.size_of_list();
	numInput2.value = " ";
	indexInput.value = " ";
});

removeInput.addEventListener("change", function(){
	ll.removeFrom(this.value); 
	ll.printList();
	ll.size_of_list();
	this.value = " ";
});

removeInput2.addEventListener("change", function(){
	ll.removeElement(this.value); 
	ll.printList();
	ll.size_of_list();
	this.value = " ";
});

findButton.addEventListener("change", function(){
	ll.indexOf(this.value);
	this.value = " ";
});

sizeButton.addEventListener("click", function(){
	ll.size_of_list();
});