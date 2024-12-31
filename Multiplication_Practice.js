var Start_Time, End_Time, Wrong_Answers, Factor_1, Factor_2, Questions_Asked, Answer, Input;
const Time = [0,0];
var spans = document.getElementsByTagName('span');
var minimum = 0;
var valid_minimum = true;
var maximum = 12;
var valid_maximum = true;
var question_number = 20;
var valid_question_number = true;

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
    if (minimum > maximum || !valid_minimum || !valid_maximum || !valid_question_number)
    {
	document.getElementById("guidelines").hidden = false;
    }
    else
    {
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
    
}
function Hide() {
    document.getElementById("explanation").hidden = true;
    document.getElementById("question").hidden = true;
    document.getElementById("wrong_result").hidden = true;
    document.getElementById("answer").hidden = true;
    document.getElementById("restart").hidden = true;
    document.getElementById("start").hidden = true;
    document.getElementById("reset").hidden = true;
    document.getElementById("Timer").hidden = true;
    document.getElementById("settings").hidden = true;
}

function Back_To_Question() {
    document.getElementById("question").hidden = false;
    document.getElementById("answer").hidden = false;
    document.getElementById("Times").hidden = false;
    document.getElementById("explanation").hidden = true;
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
    document.getElementById("explanation").hidden = false;

}
function Continue() {
    Back_To_Question();
    document.getElementById("explanation").hidden = true;
    Next_Question();
}

function Right_Answer() {
    // Turn_Green();
    Next_Question();
}

function Next_Question() {
    if (Questions_Asked < question_number){
	Factor_1 = Math.floor(Math.random() * (maximum-minimum+1) + minimum);
	Factor_2 = Math.floor(Math.random() * (maximum-minimum+1) + minimum);
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
    document.getElementById("reset").hidden = false;
    document.getElementById("restart").hidden = false;
    document.getElementById("explanation").hidden = true
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
function Reset() {
    Hide();
    document.getElementById("start").hidden = false;
    document.getElementById("settings").hidden = false;
    document.getElementById("guidelines").hidden = true;
}
function Change_Minimum() {
    let temp = document.getElementById("new_min").value;
    temp = Number(temp);
    if((temp >= 0 || temp <= 0) && Number.isInteger(temp))
    {
	valid_minimum = true;
	minimum = temp;   
    }
    else
    {
	valid_minimum = false;
    }
}

function Change_Maximum() {
    let temp = document.getElementById("new_max").value;
    temp = Number(temp);
    if((temp >= 0 || temp <= 0) && Number.isInteger(temp))
    {
	valid_maximum = true;
	maximum = temp;   
    }
    else
    {
	valid_maximum = false;
    }
}
function Change_Question_Number() {
    let temp = document.getElementById("question_num").value;
    temp = Number(temp);
    if(temp >= 1 && Number.isInteger(temp))
    {
	valid_question_number = true;
	question_number = temp;   
    }
    else
    {
	valid_question_number = false;
    }
}
