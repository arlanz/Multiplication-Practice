var Time, Min, Time_One, Time_Two, w, x, y, Questions_Asked;

/*
commands
performance.now 
is function, returns number of miliseconds since you loaded the webpage
Date.now
setTimeout
two arguments: function to be called when finished and number of miliseconds until end of timeout
setInterval
two arguments: function to be called when finished and number of miliseconds per interval.
requestAnimationFrame
one argument: function. next time browser draws run function.
*/




function Start_Button() {
    w = 0;
    Questions_Asked = 0;
    Min = 0
    document.getElementById("question").hidden = false;
    document.getElementById("answer").hidden = false;
    document.getElementById("start").hidden = true;
    document.getElementById("restart").hidden = true;
    document.getElementById("Wrong").textContent = "";
    document.getElementById("Wrong2").textContent = "";
    document.getElementById("Times").hidden = false;
    document.getElementById("answer").focus();
    document.getElementById("timer").hidden = true;
    document.getElementById("timer3").hidden = true;
    document.getElementById("timer2").textContent = "";
    document.getElementById("timer5").hidden = true;
    document.getElementById("timer4").textContent = "";
    document.getElementById("timer").hidden = true;
    document.getElementById("timer").textContext = ""
    Next_Question();
    Start_Timer();
    
}

function Start_Timer() {
    Time_One = performance.now();
}

function Stop_Timer() {
    Time_Two = performance.now();
    Check_Time();
}

function Check_Time() {
    Time = Time_Two - Time_One;
    Time = Time / 1000;
    Converter();
}

function Converter() {
    if (Time > 60) {
	Time = Time - 60;
	Min = Min + 1;
	Converter();
    }
    else {
	Time = Math.round(Time)
	document.getElementById("timer2").textContent = Time;
	document.getElementById("timer4").textContent = Min;
    }
}

function Check_Answer() {
    var z = x*y;
    var Input = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    if (Input == z && Input != "") {
	Right_Answer();
    } else {
	Wrong_Answer();
    }
}

function Right_Answer() {
    //Turn_Green();
    Next_Question();
}

function Next_Question() {
    if (Questions_Asked < 20){
	x = Math.floor(Math.random() * 13);
        y = Math.floor(Math.random() * 13);
	document.getElementById("X").textContent = x;
	document.getElementById("Y").textContent = y;
	Questions_Asked = Questions_Asked + 1;
    } else {
	Show_Results();
    }
}
function Wrong_Answer() {
    // Turn_Red();
    w = w+1;
    Next_Question();
}
function Show_Results() {
    Stop_Timer();
    document.getElementById("X").textContent = "";
    document.getElementById("Y").textContent = "";
    document.getElementById("Times").hidden = true;
    document.getElementById("answer").hidden = true;
    document.getElementById("restart").hidden = false;
    //document.getElementbyId("").hidden = false
    document.getElementById("timer").hidden = false;
    document.getElementById("timer3").hidden = false;
    document.getElementById("timer5").hidden = false;
    if (w>0) {
	document.getElementById("Wrong").textContent = w;
	document.getElementById("Wrong2").textContent = "wrong";
    } else {
	document.getElementById("Wrong").textContent = "Perfect!"

    }
}
