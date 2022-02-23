
let outputscreen=document.getElementById("output-screen");
let bracketSwitch = false;


function Display(num){
    outputscreen.value+=num;
}

function Calculate(){
    try{
        outputscreen.value=eval (outputscreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    outputscreen.value="";
}
function paranthese(){
    var prac;
        if(!bracketSwitch){
            prac = "("
        } else {
            prac = ")"
        };
        bracketSwitch = !bracketSwitch;
        outputscreen.value+=prac;
}
function Delete(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}
