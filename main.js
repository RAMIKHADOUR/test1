let myWindow;

function openWin(){
    myWindow = window.open("","myWindow","width=400, height=200");
    console.log(myWindow);
}

function closeWin(){
    if(myWindow){
        myWindow.close();
    }
}

function checkWin(){
    let text = "";
    if (!myWindow){
        text = "It has never been opened!";
    }else{
        if(myWindow.closed){
            text = "It is closed.";
        }else{
            text = "It is open.";
        }
    }
    document.getElementById("demo").innerHTML = text;
}