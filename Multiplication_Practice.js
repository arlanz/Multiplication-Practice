var x, y;

function Start_Button() {
    /*
    show all;
    hide start button;
    Next_Question();
    start timer;
    */
}

function Check_Answer() {
    var z = x*y;
    if (answer = z) {
	Right_Answer();
    } else {
	Wrong_Answer();
    }
}

function Right_Answer() {
    Turn_Green();
    Next_Question();
}

function Next_Question() {
    x = Math.floor(Math.random() * 13);
    y = Math.floor(Math.random() * 13);
    document.getElementById("X").textContent = x;
    document.getElementById("Y").textContent = y;
}
function Wrong_Answer() {
    Turn_Red()
}
