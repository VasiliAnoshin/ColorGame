var numberOfSqueres = 6;
//create new array of 6 colors
var colors = generateRandomColors(numberOfSqueres);
//get all squere figures from DOM
var squeres = document.querySelectorAll(".square");
//pickColor return a number from 1 to 6 , such then colors return colors[number]
var pickedColor = colors[pickColor()];
//get the span of DOM and then change it in future to be as rgb 
var colorDisplay = document.getElementById("colorDisplay");
//variable that shows is answer was correct
var displayMessage = document.querySelector("#messageDisplay");
var h1 =  document.querySelector("H1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeneres
	for(var i =0; i < modeButtons.length; i++){
		//figure out how many squres to show
		//pick new color
		//update page to reflect changes
		modeButtons[i].addEventListener("click" , function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");	
		if(this.textContent ==="Easy"){
			numberOfSqueres = 3;
		}else{
			numberOfSqueres = 6;
		}
		reset();

	});
}
}

function reset(){
	colors = generateRandomColors(numberOfSqueres);
	pickedColor = colors[pickColor()];
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent="";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent ="";

	for(var i = 0; i < squeres.length; i++){
		if(colors[i]){
			squeres[i].style.display ="block";
			squeres[i].style.backgroundColor = colors[i];
		}else{
			squeres[i].style.display ="none";
		}
		
	}
	h1.style.backgroundColor ="steelblue";
}
// easyBtn.addEventListener("click" , function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numberOfSqueres = 3;
// 	colors = generateRandomColors(numberOfSqueres);
// 	pickedColor = colors[pickColor()];
// 	colorDisplay.textContent = pickedColor;
// 	for(var i =0; i < squeres.length; i++){
// 		if(colors[i]){
// 			squeres[i].style.background = colors[i];
// 		}else{
// 			squeres[i].style.display ="none";
// 		}
// 	}
// });
// hardBtn.addEventListener("click" , function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numberOfSqueres = 6;
// 	colors = generateRandomColors(numberOfSqueres);
// 	pickedColor = colors[pickColor()];
// 	colorDisplay.textContent = pickedColor;
// 	for(var i =0; i < squeres.length; i++){		
// 			squeres[i].style.background = colors[i];		
// 			squeres[i].style.display ="block";		
// 	}
// });

resetButton.addEventListener("click",function(){
	reset();
});

colorDisplay.textContent = pickedColor;
console.log(colorDisplay);
console.log(colors[pickColor()]);
for(var i = 0; i < squeres.length; i++){
	//add initials colors to squeres
	squeres[i].style.backgroundColor = colors[i];

	//add click listeners to squeres
	squeres[i].addEventListener("click", function(){
		//grab color of clicked squere
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor == pickedColor){			
			displayMessage.textContent ="Correct";
			chnageColors(clickedColor);
			resetButton.textContent = "Play again?";
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.background = "#232323";
			displayMessage.textContent ="Try Again";
		}
	});
}

function chnageColors(color){
	//looop over all squeres
	for(var i=0; i < squeres.length; i++){
		//change each color to match given color
		squeres[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return random;
}

function generateRandomColors(num){
	var arr =[];

    for(var i = 0; i < num; i++ ){
    	//get random color and push into array
    	arr.push(randomColor());
    }
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";
}









