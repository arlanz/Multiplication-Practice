var Start_Time, End_Time, Wrong_Answers, Factor_1, Factor_2, Questions_Asked, Answer, Input;
const Time = [0,0];


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
    Wrong_Answers = 0;
    Questions_Asked = 0;
    Time[0] = 0;
    Time[1] = 0;
    Hide();
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
    Start_Time = performance.now();
}

function Stop_Timer() {
    End_Time = performance.now();
    Check_Time();
}

function Check_Time() {
    Time[1] = (End_Time - Start_Time)/1000;
    Converter();
}

function Converter() {
    if (Time[1] > 60) {
	Time[1] = Time[1] - 60;
	Time[0] = Time[0] + 1;
	Converter();
    }
    else {
	Time[1] = Math.round(Time[1])
	document.getElementById("Second_number").textContent = Time[1];
	document.getElementById("Minute_Number").textContent = Time[0];
    }
}

function Check_Answer() {
    Answer = Factor_1 * Factor_2;
    Input = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    if (Input !== "") {
	if (Input == Answer) {
	    Right_Answer();
	} else {
	    Wrong_Answer();
	}
    }
}
function Wrong_Answer() {
    //Turn_Red();
    Wrong_Answers = Wrong_Answers + 1;
    Hide();
    document.getElementById("answer_wrong").textContent = Input;
    document.getElementById("Problem_1").textContent = Factor_1;
    document.getElementById("Problem_2").textContent = Factor_2;
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
	Factor_1 = Math.floor(Math.random() * 13);
        Factor_2 = Math.floor(Math.random() * 13);
	document.getElementById("Factor_1").textContent = Factor_1;
	document.getElementById("Factor_2").textContent = Factor_2;
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
    if (Wrong_Answers>0) {
	document.getElementById("you_got").textContent = "You got";
	document.getElementById("Ending_#").textContent = Wrong_Answers;
	document.getElementById("subtitle").textContent = "wrong";
    } else {
	document.getElementById("you_got").textContent = "";
	document.getElementById("Ending_#").textContent = "";
	document.getElementById("subtitle").textContent = "Perfect!"

    }
}
