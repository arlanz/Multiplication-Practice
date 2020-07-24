var w, x, y, Questions_Asked;

function Start_Button() {
    w = 0;
    Questions_Asked = 0;
    document.getElementById("question").hidden = false;
    document.getElementById("answer").hidden = false;
    document.getElementById("start").hidden = true;
    document.getElementById("restart").hidden = true;
    document.getElementById("Wrong").textContent = "";
    document.getElementById("Wrong2").textContent = "";
    document.getElementById("Times").hidden = false;
    document.getElementById("answer").focus();
    Next_Question();
    //start timer;
    
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
    if (Questions_Asked < 10){
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
    document.getElementById("X").textContent = "";
    document.getElementById("Y").textContent = "";
    document.getElementById("Times").hidden = true;
    document.getElementById("answer").hidden = true;
    document.getElementById("restart").hidden = false;
    if (w>0) {
	document.getElementById("Wrong").textContent = w;
	document.getElementById("Wrong2").textContent = "wrong";
    } else {
	document.getElementById("Wrong").textContent = "Perfect!"

    }
}
