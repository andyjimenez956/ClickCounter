const startButton= document.getElementById('startButton');
const timer = document.getElementById('timer');
const restartButton = document.getElementById('restartButton');
startButton.addEventListener('click', function(){
  game();
}, {once: true});

function game(){
  let count = 0;
  
startButton.addEventListener('click', function(){
  count++;
  startButton.innerHTML = count;
});

  

  let time = 10;

  let interval = setInterval(function(){

    time--;
    timer.innerHTML = time;
    
    if(time == 0){
      clearInterval(interval);
      timer.innerHTML = ('You can do ' + count * 6 + ' clicks in 1 minute.');
      startButton.disabled = true;
      restartButton.disabled = false;
    }
  }, 1000);



restartButton.addEventListener('click', function(){
  startButton.disabled = false;
  restartButton.disabled = true;
  timer.innerHTML = '10 Seconds On the Clock';
  startButton.innerHTML = 'Click Me';
  startButton.addEventListener('click', function(){
  game();
}, {once: true});
});
};