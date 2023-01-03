//for first member
//Generate random number from 1 to 6
const member1=Math.floor(Math.random()*6)+1;
//dice images
const diceImageMem1='dice images/dice'+member1+'.png';
document.querySelectorAll('img')[0].setAttribute('src',diceImageMem1);

//for second member
//Generate random number from 1 to 6
const member2=Math.floor(Math.random()*6)+1;
//dice images
const diceImageMem2='dice images/dice'+member2+'.png';
document.querySelectorAll('img')[1].setAttribute('src',diceImageMem2);

//for third member
//Generate random number from 1 to 6
const member3=Math.floor(Math.random()*6)+1;
//dice images
const diceImageMem3='dice images/dice'+member3+'.png';
document.querySelectorAll('img')[2].setAttribute('src',diceImageMem3);

//Logic for Winner
if(member1>member2 && member1>member3 && member2>member3){
    document.querySelector("h1").innerHTML= "Winner is: Member-A 🤴";
    //for green color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img2').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
}
else if(member1>member2 && member1>member3 && member2<member3){
    document.querySelector("h1").innerHTML= "Winner is: Member-A 🤴";
    //for green color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img3').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
}

else if(member3>member2 && member3>member1 && member2>member1){
    document.querySelector("h1").innerHTML= "Winner is: Member-C 👸";
    //for green color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img2').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
    
}
else if(member3>member2 && member3>member1 && member2<member1){
    document.querySelector("h1").innerHTML= "Winner is: Member-C 🤴";
    //for green color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img1').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
    
}

else if(member2 > member1 && member2 > member3 && member3>member1){
    document.querySelector("h1").innerHTML= "Winner is: Member-B 👩‍🦰";
    //for green color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img3').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
}
else if(member2 > member1 && member2 > member3 && member3<member1){
    document.querySelector("h1").innerHTML= "Winner is: Member-B 👩‍🦰";
    //for green color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img1').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
}
 
else if((member1 == member2) && (member1 > member3 || member3>member1)){
    document.querySelector("h1").innerHTML= "Draw 😇";
    //for green color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //for green color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
}

else if((member1 == member3) && (member1 > member2 || member1<member2)){
    document.querySelector("h1").innerText= "Draw 😇";
    //for blue color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //for green color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
}
else if((member2 == member3) && (member2 > member1 || member2<member1)){
    document.querySelector("h1").innerText= "Draw 😇";
    //for green color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //for green color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";

}
else if(member1==member2 && member3==member1){
    document.querySelector("h1").innerText= "Draw 😇";
    //for green color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for green color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for green color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    
}