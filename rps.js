var btn=document.querySelectorAll("button")
var userch=document.getElementById("player")
var botch=document.getElementById("bot")
var res=document.getElementById("result")

btn.forEach(btn => btn.addEventListener
    ("click",(e)=>{
        userchoice=e.target.id
        userch.innerHTML=userchoice
        botchoicegenerator();
        results()
    }))

 function botchoicegenerator(){
    var random=Math.floor(Math.random()*3)+1
    
    console.log(random)
    if(random===1)
    {
        botchoosen="Rock"
    }
    if(random===2)
    {
        botchoosen="Paper"
    }
    if(random===3)
    {
        botchoosen="Scissor"
    }
    botch.innerHTML=botchoosen
    return botchoosen;
 }

function results(){
    var result;
    if (botchoosen === userchoice) {
        result = "Hey its a draw. Please try again";
    } 
    else if ((botchoosen === "Rock" && userchoice === "Paper") ||
               (botchoosen === "Paper" && userchoice === "Scissor") ||
               (botchoosen === "Scissor" && userchoice === "Rock")) {
        result = "User WINS";
    } 
    else {
        result = "Bot WINS";
    }
    
 res.innerHTML=result
}

var closebtn=document.getElementById("close")

function btns(){
    popup.style.display="block"
    cover.style.display="block"
}
function clos(){
    popup.style.display="none"
    cover.style.display="none"
}

