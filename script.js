//target all elements to save to constants

// home page
const page0btn=document.querySelector("#page0btn");

// button1 for menu1
const page1btn1=document.querySelectorAll(".page1btn")[0];
const page2btn1=document.querySelectorAll(".page2btn")[0];
const page3btn1=document.querySelectorAll(".page3btn")[0];
const page4btn1=document.querySelectorAll(".page4btn")[0];
const page5btn1=document.querySelectorAll(".page5btn")[0];
// button2 for menu2
const page1btn2=document.querySelectorAll(".page1btn")[1];
const page2btn2=document.querySelectorAll(".page2btn")[1];
const page3btn2=document.querySelectorAll(".page3btn")[1];
const page4btn2=document.querySelectorAll(".page4btn")[1];
const page5btn2=document.querySelectorAll(".page5btn")[1];

var allpages=document.querySelectorAll(".page"); //select all subtopic pages


var content1clickable=document.querySelectorAll(".content1");
var content2clickable=document.querySelectorAll(".content2");
var content3clickable=document.querySelectorAll(".content3");
var content4clickable=document.querySelectorAll(".content4");


console.log(allpages);
hideall();
show(0); // home page must be visible first

function hideall(){ //function to hide all pages
	for(let onepage of allpages){ //go through all subtopic pages
		onepage.style.display="none"; //hide it
	}
}
function show(pgno){ //function to show selected page no
	hideall();
	//select the page based on the parameter passed in
	let onepage=document.querySelector("#page"+pgno);
	//show the page
	onepage.style.display="block";

	let contentHide=onepage.querySelectorAll(".contents");
	for (let i = 0; i < contentHide.length; i++) {
		contentHide[i].style.display="none";
	}
}


function visibleContent(pageNo, contentNo) { //function to show/hide content
	let content=document.querySelector("#page"+pageNo+"content"+contentNo);
	if (content.style.display == "none") {
		content.style.display = "block";

	}
	else {
		content.style.display = "none";
	}
}



/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page0btn.addEventListener("click", function () {
	show(0);
});

//btn1 and btn2 of same page act as the same function for different menus
page1btn1.addEventListener("click", function () {
	show(1);
});
page1btn2.addEventListener("click", function () {
	show(1);
});
page2btn1.addEventListener("click", function () {
	show(2);
});
page2btn2.addEventListener("click", function () {
	show(2);
});
page3btn1.addEventListener("click", function () {
	show(3);
});
page3btn2.addEventListener("click", function () {
	show(3);
});
page4btn1.addEventListener("click", function () {
	show(4);
});
page4btn2.addEventListener("click", function () {
	show(4);
});
page5btn1.addEventListener("click", function () {
	show(5);
});
page5btn2.addEventListener("click", function () {
	show(5);
});




// 1st content
content1clickable[0].addEventListener("click", function () {
	visibleContent(1,1);
});
content1clickable[1].addEventListener("click", function () {
	visibleContent(2,1);
});
content1clickable[2].addEventListener("click", function () {
	visibleContent(3,1);
});
content1clickable[3].addEventListener("click", function () {
	visibleContent(4,1);
});

// 2nd content
content2clickable[0].addEventListener("click", function () {
	visibleContent(1,2);
});
content2clickable[1].addEventListener("click", function () {
	visibleContent(2,2);
});
content2clickable[2].addEventListener("click", function () {
	visibleContent(3,2);
});
content2clickable[3].addEventListener("click", function () {
	visibleContent(4,2);
});

// 3rd content
content3clickable[0].addEventListener("click", function () {
	visibleContent(2,3);
});
content3clickable[1].addEventListener("click", function () {
	visibleContent(3,3);
});
content3clickable[2].addEventListener("click", function () {
	visibleContent(4,3);
});

// 4th content
content4clickable[0].addEventListener("click", function () {
	visibleContent(2,4);
});
content4clickable[1].addEventListener("click", function () {
	visibleContent(3,4);
});
content4clickable[2].addEventListener("click", function () {
	visibleContent(4,4);
});





/*for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("#menuList");

function toggleMenus(){ /*open and close menu*/
	menuItemsList.classList.toggle("menuShow");
	 //if(menuItemsList.style.display=="block")
	 //	menuItemsList.style.display="none";
	 //else menuItemsList.style.display="block";
}//can optimize using toggle class with css transitions



/*for game*/
const startBtn = document.querySelector("#startBtn");
const redLine = document.querySelector("#line");
const basketball = document.querySelector("#ballGame");
const textForGame = document.querySelector("#gameText");


// click to play, will acts as a restart button once over
startBtn.addEventListener("click", function () {
		start();
		startBtn.style.display="none";
	});



function start() {
	const shootBtn = document.querySelector("#shootBtn");
	// for line
	var currentPos = 0;
	var changeDirection = "right";
	let moveLine = null;
	var stopLine = "false";

	// for ball
	var ballPosX = 72;
	var ballPosY = 200;
	var pastPeak = "false";
	let moveBall = null;
	
	
	// reset everything in html
	redLine.style.left=currentPos + "px";
	basketball.style.zIndex=5;
	basketball.style.right=ballPosX + "px";
	basketball.style.top=ballPosY + "px";
	shootBtn.style.display="block";
	shootBtn.style.position="relative";
	shootBtn.style.left="45%";
	textForGame.innerHTML="Click to shoot!";
	

	if (stopLine=="false"){ //animation for line moving
		moveLine = setInterval(frame, 1);
	}

	//shoot button, press when red line over green box to make the shot
	shootBtn.addEventListener("click", shootClickHandler);
	//created function so can removeEventListener for shootBtn later, need to remove or else it keeps multiplying the EventListener
	function shootClickHandler() {
		shootBtn.style.display="none";
		stopLine = "true";
		console.log("Accuracy:" + currentPos); //200-300 is good
		moveBall = setInterval(frame2, 1);
	};

	function frame(){ //for line
		if (stopLine=="true"){
			clearInterval(moveLine);
		}
		else if (currentPos == 0){ //line moves to right
			currentPos++;
			redLine.style.left = currentPos + "px";
			changeDirection = "right";
		}
		else if (currentPos < 500 && changeDirection=="right"){
			currentPos++;
			redLine.style.left = currentPos + "px";
		}
		else if (currentPos == 500){ //line moves to left
			currentPos--;
			redLine.style.left = currentPos + "px";
			changeDirection = "left";
		}
		else if (currentPos > 0 && changeDirection=="left"){
			currentPos--;
			redLine.style.left = currentPos + "px";
		}
	}


	function frame2(){ //for ball
		if (currentPos < 200){ // Shoot left
			if (ballPosY == 100 && pastPeak=="true"){ //ball will stop here
				clearInterval(moveBall);
				console.log("MISS");
				startBtn.style.display="block";
				startBtn.style.position="relative";
				startBtn.style.left="45%";
				shootBtn.removeEventListener("click", shootClickHandler);
				textForGame.innerHTML="Try again!";
			}
			else if (ballPosY == -170){ //max 'height' ball will reach
				pastPeak="true";
				ballPosX++;
				ballPosY++;
				ballPosY++;
				basketball.style.right = ballPosX + "px";
				basketball.style.top = ballPosY + "px";
			}
			else if (ballPosY <= 200 && pastPeak=="false"){ //ball starts here
				ballPosX++;
				ballPosY--;
				ballPosY--;
				basketball.style.right = ballPosX + "px";
				basketball.style.top = ballPosY + "px";
			}
			else if (pastPeak="true"){ //ball starts falling
				ballPosX++;
				ballPosY++;
				ballPosY++;
				basketball.style.right = ballPosX + "px";
				basketball.style.top = ballPosY + "px";
			}
		}
		else if (currentPos >= 200 && currentPos <=300){ //Shoot center
			if (ballPosY == 100 && pastPeak=="true"){ //ball will stop here
				clearInterval(moveBall);
				console.log("IN");		
				startBtn.style.display="block";
				startBtn.style.position="relative";
				startBtn.style.left="45%";
				shootBtn.removeEventListener("click", shootClickHandler);
				textForGame.innerHTML="Nice Shot!";
			}
			else if (ballPosY == -170){ //max 'height' ball will reach
				pastPeak="true";
				ballPosY++;
				ballPosY++;
				basketball.style.top = ballPosY + "px";
				basketball.style.zIndex=3;
			}
			else if (ballPosY <= 200 && pastPeak=="false"){ //ball starts here
				ballPosY--;
				ballPosY--;
				basketball.style.top = ballPosY + "px";
			}
			else if (pastPeak="true"){ //ball starts falling
				ballPosY++;
				ballPosY++;
				basketball.style.top = ballPosY + "px";
			}
		}
		else if (currentPos > 300){ //Shoot right
			if (ballPosY == 100 && pastPeak=="true"){ //ball will stop here
				clearInterval(moveBall);
				console.log("MISS");
				startBtn.style.display="block";
				startBtn.style.position="relative";
				startBtn.style.left="45%";
				shootBtn.removeEventListener("click", shootClickHandler);
				textForGame.innerHTML="Try again!";
			}
			else if (ballPosY == -170){ //max 'height' ball will reach
				pastPeak="true";
				ballPosX--;
				ballPosY++;
				ballPosY++;
				basketball.style.right = ballPosX + "px";
				basketball.style.top = ballPosY + "px";
			}
			else if (ballPosY <= 200 && pastPeak=="false"){ //ball starts here
				ballPosX--;
				ballPosY--;
				ballPosY--;
				basketball.style.right = ballPosX + "px";
				basketball.style.top = ballPosY + "px";
			}
			else if (pastPeak="true"){ //ball starts falling
				ballPosX--;
				ballPosY++;
				ballPosY++;
				basketball.style.right = ballPosX + "px";
				basketball.style.top = ballPosY + "px";
			}
		}
	}
	
}


