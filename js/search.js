var x = 0;
var arr = [];

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (array[mid] === target) {
            document.getElementById("ind").innerHTML = target +" is at " + mid;
            return mid;
        }
        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    document.getElementById("ind").innerHTML = target +" is not in the array";
    return -1;
}

function linearSearch(array, toFind){
  for(let i = 0; i < array.length; i++){
    if(array[i] === toFind) return i;
  }
  return -1;
}

var numInput1 = document.getElementById("array");
var numInput2 = document.getElementById("element");
var numInput3 = document.getElementById("element2");



numInput1.addEventListener("change", function(){
     
    arr[x] = this.value;
    x++;
    printArray();
    this.value = " ";
    
});

numInput2.addEventListener("change", function(){
    document.getElementById("type").innerHTML = "You are using Binary Search";
    var start = new Date().getTime();
    binarySearch(arr, this.value);
    this.value = " ";
    var end = new Date().getTime();
    document.getElementById("time").innerHTML ="Time taken: " + (end - start);
});

numInput3.addEventListener("change", function(){
    document.getElementById("type").innerHTML = "You are using Linear Search";
    var start = new Date().getTime();
    linearSearch(arr, this.value);
    this.value = " ";
    var end = new Date().getTime();
    document.getElementById("time").innerHTML ="Time taken: " + (end - start);
});

function printArray(){
    
    var str = " ";
    for (var i=0; i<arr.length; i++){
        str += arr[i] + " ";
    }
    document.getElementById("e").innerHTML ="Array: " + str;
}