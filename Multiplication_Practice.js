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
    document.getElementById("question").hidden = false;
    document.getElementById("answer").hidden = false;
    document.getElementById("start").hidden = true;
    document.getElementById("restart").hidden = true;
    document.getElementById("Wrong").textContent = "";
    document.getElementById("Wrong2").textContent = "";
    document.getElementById("Times").hidden = false;
    document.getElementById("answer").focus();
    document.getElementById("Mult_1").textContent = "";
    document.getElementById("Mult_2").textContent = "";
    document.getElementbyId("wrong").hidden = true
    //document.getElementbyId("").hidden = false
    document.getElementById("It_took_you").hidden = true;
    document.getElementById("Seconds").hidden = true;
    document.getElementById("Minutes").hidden = true;
    Next_Question();
    Start_Timer();
    
}
function Hide() {
    document.getElementById("question").hidden = true;
    document.getElementById("answer").hidden = true;
    document.getElementById("start").hidden = true;
    document.getElementById("restart").hidden = true;
    document.getElementById("Times").hidden = true;
    document.getElementById("timer").hidden = true;
    document.getElementById("timer3").hidden = true;
    document.getElementById("timer5").hidden = true;
    document.getElementById("timer").hidden = true;
}

function Show() {
    document.getElementById("question").hidden = false;
    document.getElementById("answer").hidden = false;
    document.getElementById("Times").hidden = false;
    document.getElementbyId("wrong").hidden = true;
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
    var Answer = Mult_1 * Mult_2;
    var Input = document.getElementById("answer").value;
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
    document.getElementbyId("answer_wrong").textContent = Input;
    document.getElementbyId("Problem_1").textContent = Mult_1;
    document.getElementbyId("Problem_2").textContent = Mult_2;
    document.getElementbyId("Answer").textContent = Answer;
    document.getElementbyId("wrong").hidden = false;

}
function Continue() {
    Show();
    document.getElementbyId("wrong").hidden = true;
    Next_Question();
}

function Right_Answer() {
    // Turn_Green();
    Next_Question();
}

function Next_Question() {
    if (Questions_Asked < 20){
	Mult_1 = Math.floor(Math.random() * 13);
        Mult_2 = Math.floor(Math.random() * 13);
	document.getElementById("X").textContent = Mult_1;
	document.getElementById("Y").textContent = Mult_2;
	Questions_Asked = Questions_Asked + 1;
    } else {
	Show_Results();
    }
}
function Show_Results() {
    Stop_Timer();
    document.getElementById("Mult_1").textContent = "";
    document.getElementById("Mult_2").textContent = "";
    document.getElementById("Times").hidden = true;
    document.getElementById("answer").hidden = true;
    document.getElementById("restart").hidden = false;
    document.getElementbyId("wrong").hidden = true
    //document.getElementbyId("").hidden = false
    document.getElementById("It_took_you").hidden = false;
    document.getElementById("Seconds").hidden = false;
    document.getElementById("Minutes").hidden = false;
    if (w>0) {
	document.getElementById("Ending_#").textContent = w;
	document.getElementById("subtitle").textContent = "wrong";
    } else {
	document.getElementById("subtitle").textContent = "Perfect!"

    }
}
