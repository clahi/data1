
$(".centered").fadeIn(2000);

$("#mem").on("click", function(){
	// $("#members").fadeIn(1000);
	$("#about").slideUp(1000);
});

$("#intro").on("click", function(){
	$("li #about").fadeIn(1000);
});



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("#navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

