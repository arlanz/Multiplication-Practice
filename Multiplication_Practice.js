var Time, Min, Time_One, Time_Two, w, Mult_1, Mult_2, Questions_Asked, Answer, Input;

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
    Hide()
    document.getElementById("question").hidden = false;
    document.getElementById("answer").hidden = false;
    document.getElementById("Times").hidden = false;
    document.getElementById("answer").focus();
    //document.getElementById("").hidden = false;
    Next_Question();
    Start_Timer();
    
}
function Hide() {
    document.getElementById("wrong").hidden = true;
    document.getElementById("question").hidden = true;
    document.getElementById("wrong_result").hidden = true;
    document.getElementById("answer").hidden = true;
    document.getElementById("start").hidden = true;
    document.getElementById("restart").hidden = true;
    document.getElementById("Timer").hidden = true;
}

function Show() {
    document.getElementById("question").hidden = false;
    document.getElementById("answer").hidden = false;
    document.getElementById("Times").hidden = false;
    document.getElementById("wrong").hidden = true;
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
	document.getElementById("Second_number").textContent = Time;
	document.getElementById("Minute_Number").textContent = Min;
    }
}

function Check_Answer() {
    Answer = Mult_1 * Mult_2;
    Input = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    if (Input == Answer && Input != "") {
	Right_Answer();
    } else {
	Wrong_Answer();
    }
}

function Wrong_Answer() {
    //Turn_Red();
    w = w+1;
    Hide();
    document.getElementById("answer_wrong").textContent = Input;
    document.getElementById("Problem_1").textContent = Mult_1;
    document.getElementById("Problem_2").textContent = Mult_2;
    document.getElementById("Answer").textContent = Answer;
    document.getElementById("wrong").hidden = false;

}
function Continue() {
    Show();
    document.getElementById("wrong").hidden = true;
    Next_Question();
}

function Right_Answer() {
    // Turn_Green();
    Next_Question();
}

function Next_Question() {
    if (Questions_Asked < 2){
	Mult_1 = Math.floor(Math.random() * 13);
        Mult_2 = Math.floor(Math.random() * 13);
	document.getElementById("Mult_1").textContent = Mult_1;
	document.getElementById("Mult_2").textContent = Mult_2;
	Questions_Asked = Questions_Asked + 1;
	document.getElementById("answer").focus();
    } else {
	Show_Results();
    }
}
function Show_Results() {
    Stop_Timer();
    document.getElementById("question").hidden = true;
    document.getElementById("wrong_result").hidden = false;
    document.getElementById("restart").hidden = false;
    document.getElementById("wrong").hidden = true
    document.getElementById("answer").hidden = true;
    document.getElementById("Timer").hidden = false;
    if (w>0) {
	document.getElementById("you_got").textContent = "You got";
	document.getElementById("Ending_#").textContent = w;
	document.getElementById("subtitle").textContent = "wrong.";
    } else {
	document.getElementById("Ending_#").textContent = "";
	document.getElementById("subtitle").textContent = "Perfect!"

    }
}
