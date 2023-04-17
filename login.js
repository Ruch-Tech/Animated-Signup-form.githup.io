var a = 0;

function mouseOver(){

const username = document.forms['suForm']['username'].value;
const email = document.forms['suForm']['email'].value;
const password = document.forms['suForm']['password'].value;
const tick = document.querySelector('#check');

const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if((username == "" || !email.match(emailCheck) || password == "" || tick.checked == false) && a==0){
  buttonMoveLeft();
  a = 1;
  return false; 
}

if((username == "" || !email.match(emailCheck) || password == "" || tick.checked == false) && a==1){
  buttonMoveRight();
  a = 2;
  return false; 
}

if((username == "" || !email.match(emailCheck) || password == "" || tick.checked == false) && a==2){
  buttonMoveLeft();
  a = 1;
  return false; 
}

else{
  
  document.getElementById("submit-btn").style.cursor = 'pointer';
  return false;
};


};


function buttonMoveLeft(){
    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(-160)';
};

function buttonMoveRight(){

    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';
};

 function resetBtn(){
    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';
};