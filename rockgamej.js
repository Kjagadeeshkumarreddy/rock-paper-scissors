let cs=0;
let us=0;
const choices=document.querySelectorAll(".choice");
const genCompChoice= ()=>{
    let a=["rock","paper","scissors"];
    return a[Math.floor(Math.random()*3)];
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    let mess=document.querySelector("#message");
    let youc=document.querySelector("#you");
    let compc=document.querySelector("#comp");
    console.log(`computer choice is ${compChoice} and user choise is ${userChoice}`);

    if(userChoice==="rock")
    {
        if(compChoice=="rock")
        {
            mess.innerHTML="It was draw";
            mess.style.backgroundColor = "#060f1a";
            mess.style.color="white";
        }
        else if(compChoice=="scissors")
        {
            us++;
            youc.innerHTML=us;
            mess.innerHTML=`You Won. ${userChoice} beats ${compChoice}`;
            mess.style.backgroundColor = "green";
            mess.style.color="white";
        }else{
            cs++;
            compc.innerHTML=cs;
            mess.innerHTML=`You lost. ${compChoice} beats ${userChoice}`;
            mess.style.backgroundColor = "red";
            mess.style.color="white";
        }
    }else if(userChoice=="paper")
    {
        if(compChoice=="paper")
        {
            mess.innerHTML="It was draw";
            mess.style.backgroundColor = "#060f1a";
            mess.style.color="white";
        }
        else if(compChoice=="rock")
        {
            us++;
            youc.innerHTML=us;
            mess.innerHTML=`You Won. ${userChoice} beats ${compChoice}`;
            mess.style.backgroundColor = "green";
            mess.style.color="white";
        }else{
        cs++;
        compc.innerHTML=cs;
        mess.innerHTML=`You lost. ${compChoice} beats ${userChoice}`;
        mess.style.backgroundColor = "red";
        mess.style.color="white";
        }
    }else{
        if(compChoice=="scissors")
            {
                mess.innerHTML="It was draw";
                mess.style.backgroundColor = "#060f1a";
                mess.style.color="white";
            }
            else if(compChoice=="paper")
            {
            us++;
            youc.innerHTML=us;
            mess.innerHTML=`You Won. ${userChoice} beats ${compChoice}`;
            mess.style.backgroundColor = "green";
            mess.style.color="white";
            }else{
            cs++;
            compc.innerHTML=cs;
            mess.innerHTML=`You lost. ${compChoice} beats ${userChoice}`;
            mess.style.backgroundColor = "red";
            mess.style.color="white";
            }
    }
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        let id=choice.getAttribute("id");
        playGame(id);
    });
});