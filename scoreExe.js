var p1button=document.getElementById("p1");
var p2button=document.getElementById("p2");
var reset=document.querySelector("#reset");
var disp1=document.getElementById("dis1");
var disp2=document.getElementById("dis2");
var inp=document.querySelector("input");
var tarScore=document.getElementById("target");
var winDec=document.querySelector("#winDec");
var p1Score=0;
var p2Score=0;
var gameOver=false;
var winScore=5;


p1button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score===winScore){
			disp1.classList.add("winner");
			gameOver=true;
			winDec.innerHTML="YAYAYAY! PLAYER-1 WON";	
		}
		disp1.textContent=p1Score;
	}
	
});

p2button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score===winScore){
			disp2.classList.add("winner");
			gameOver=true;
			winDec.innerHTML="YAYAYAY! PLAYER-2 WON";			
		}
		disp2.textContent=p2Score;
	}
});


reset.addEventListener("click",function(){
	reset1();
});

function reset1(){
	p1Score=0;
	p2Score=0;
	disp1.textContent=0;
	disp2.textContent=0;
	disp1.classList.remove("winner");
	disp2.classList.remove("winner");
	gameOver=false;
	winDec.innerHTML="";
}

inp.addEventListener("change",function(){
	tarScore.textContent=inp.value;//.value is an operator used to get the value stored in inp
	winScore=Number(inp.value);//if string is there then program doesnr work coz of triple equals
	reset1();
});

