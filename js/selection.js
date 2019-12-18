
var x = 0;
var arr = [];// The array to be sorted

var TargetTick;
var Tick;
var Timer1;


var arr0 = "<span id='arr0' >&darr;</span>";
var arr1 = "<span id='arr1' >&darr;</span>";
 
function ExecuteSort()
{    //arr = [79,56,19,44,86,22,41,35,39,99,16,53,29,26,11,49,65,33,51,83];
     var Speed = parseInt(speedSelectList.options[speedSelectList.selectedIndex].value);

     var Alg = parseInt(algorithmSelectList.options[algorithmSelectList.selectedIndex].value); 

     TargetTick=1;
    
   // Start animation
   if (Timer1) clearInterval(Timer1);
   if (Alg == 0)
      Timer1 = setInterval(AnimateSelectionSort,Speed); 
   else
      Timer1 = setInterval(AnimateInsertionSort,Speed);  
}
 

function SelectionSort(arr) 
{   
   for (var i = 0; i < arr.length-1; i++) 
   {  var min_pos=i ;
      var min = arr[i];
      for(var j = i; j < arr.length; j++)
      {   if (arr[j] < min )
          {  min_pos= j; min =arr[j] }

          if (UpdateTick()) { PrintArray(arr,i,j,min_pos); return; }
      }

      // swap arr[i] with arr[min_pos]
      var t = arr[i]; arr[i] = arr[min_pos]; arr[min_pos] = t;
   }

   // (i > arr.length) last call to Printarray() to show array after final swap
   PrintArray(arr,i+1,-1,-1); 
   EndAnimate(); 
}
  

function InsertionSort(arr) 
{   
   for (var i = 1; i < arr.length; i++) 
   {  
     var item = arr[i];
     var j = i-1;
     //  find place for item
     //  while( (j >= 0) && (item < arr[j])) 
     //  for animation, we moved the test for 2nd cond to inside of loop 
     while ((j >= 0))   
     {   if (UpdateTick())  
         {  PrintArray(arr,j+1,i,i);  return;  } 

         if (item >= arr[j]) break;

         arr[j+1] = arr[j]; 
         arr[j] = item; // this is added for animation
         j--;  
      }
     
      arr[j+1] = item; 
   }
    
   PrintArray(arr,i+1,-1,-1); 
   EndAnimate(); 
}
 

function PrintArray(arr, start,target, minpos)
{  // This function renders the array arr as an HTML list
  
   // alert(target);
 
  var x =  "";
  
  for(var i= 0; i < arr.length ; i++)
  {  var st = ""; 
      if (i < start) st = " class ='finished'";  
   
      var ext ="";

     if (i==start) 
     {  ext = arr0;  st = "style='background-color:white'";   }

      if (i==target )
     {    st  = "style='background-color:white'";  }

     if  (i== minpos)  
     {  ext += arr1;   st = " style='background-color:white;border-color: red'";  }
       
     
     x += "<li " + st + ">" + arr[i] + ext+   "</li>"; 
  }  
  
   OutDiv.innerHTML =  "<ul>"  + x + "</ul>";  
}
 


// The pattern for AnimateSomeProcedure() is:

//  Set TragetTick =1 (in caller)
//  Execute the procedure to be animated from start (Tick=0)  till (Tick=TragetTick)
//  Increment TargetTick
//  Execute the procedure to be animated from start (Tick=0)  till (Tick=TragetTick)
//  Increment TargetTick
//  Execute the procedure to be animated from start (Tick=0)  till (Tick=TragetTick)
// Note: Tick is incremented in UpateTick()

function AnimateSelectionSort()  
{  // This function is executed repeatedly via SetInterval()
   // Note: TargetTick is incremented with every call to this function 
   
   Tick=0;
  // SelectionSort(arr); 
    SelectionSort_Rec(arr,0) ;
   TargetTick++;   
}


function AnimateInsertionSort()
{ // This function is executed repeatedly via SetInterval()  
  // Note: TargetTick is incremented with every call to this function 
  
  B = arr.slice(); // Start from an original copy of arr   
  Tick=0; 
  InsertionSort(B); 
  TargetTick++;   
}

function EndAnimate()
{  clearInterval(Timer1);  } 
 
function UpdateTick()
{  Tick++;
   return (Tick == TargetTick);
}


function SelectionSort_Rec(arr,i) 
{   
    if (i >= arr.length-1)
    {  // (i > arr.length) last call to Printarray() to show array after final swap
       PrintArray(arr,i+1,-1,-1); 
       EndAnimate(); 
       return;
    }
 
    var min_pos=i ;
    var min = arr[i];
    for(var j = i; j < arr.length; j++)
    {  if (arr[j] < min )
       {  min_pos= j; min =arr[j]; }

       if (UpdateTick()) { PrintArray(arr,i,j,min_pos); return; }
    }

    // swap arr[i] with arr[min_pos]
    var t = arr[i]; arr[i] = arr[min_pos]; arr[min_pos] = t; 

    SelectionSort_Rec(arr,i+1); // Recursive call
}

var numInput1 = document.getElementById("array");


numInput1.addEventListener("change", function(){
     
    arr[x] = this.value;
    x++;
    // printArray();
    this.value = " ";
    printArray();
});

function printArray(){
    
    var str = " ";
    for (var i=0; i<arr.length; i++){
        str += arr[i] + " ";
    }
    document.getElementById("e").innerHTML ="Array: " + str;
}