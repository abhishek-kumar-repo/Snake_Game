
    var cvs=document.getElementById("canvas");
  
  var ctx=cvs.getContext("2d");
    var cvsW=cvs.width;
  var cvsH=cvs.height;
    var snakeW=10;
    var snakeH=10;
    var direction="right";
     var score=0;
     var f=false;

     document.addEventListener("Keydown",getDirection1,false);
     document.addEventListener("keyup", getDirection2, false);  
        function getDirection1(e){
          var keycode = e.keyCode;
      if(keycode==37&&direction!="right"){
        direction="left";

      }
      else if(keycode==38&&direction!="down"){
        direction="up";
      }
      else if(keycode==39&&direction!="left"){
        direction="right";
      }
      else if(keycode==40&&direction!="up"){
        direction="down";   
      }
     }
      function getDirection2(e){
          var keycode = e.keyCode;
      if(keycode==37&&direction!="right"){
        direction="left";

      }
      else if(keycode==38&&direction!="down"){
        direction="up";
      }
      else if(keycode==39&&direction!="left"){
        direction="right";
      }
      else if(keycode==40&&direction!="up"){
        direction="down";   
      }
     }



        function drawSnake(x,y){
         ctx.fillStyle="black";
      ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
        ctx.fillStyle="#000";
      ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
        }
         

         var len=4;
         var snake=[];

   for (var i = len-1; i >= 0; i--) {
         snake.push({
          x:i,
          y:0 
         }
       );

       }
        food={
      x:Math.round(Math.random()*(cvsW/snakeW-2)+1),
      y:Math.round(Math.random()*(cvsH/snakeH-2)+1)
     }
      function drawfood(x,y){
      ctx.fillStyle="cyan";
      ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
        ctx.fillStyle="grey";
      ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH); 
     }
      function drawScore(x){
    ctx.fillStyle="black";
    ctx.fillText("score:"+x,5,cvsH-5);
    ctx.font="20px Arial";
   }
     
    function draw(){
      ctx.clearRect(0,0,cvsW,cvsH); 
       for(var i=0;i<snake.length;i++){
                var x=snake[i].x;
                var y=snake[i].y;
                drawSnake(x,y);
              }
                 
           drawfood(food.x,food.y); 
          //Snake head
              var snakeX=snake[0].x;
              var snakeY=snake[0].y;
          // game over
               if(snakeX<0||snakeY<0||snakeX>=cvsW/snakeW||snakeY>=cvsH/snakeH){
                
                 window.location.href="GameOver.html";
                 f=true;
                       
             }   

         
          
             if(direction=="left")snakeX--;
              else if(direction=="up")snakeY--;
              else if(direction=="right")snakeX++;
              else if(direction=="down")snakeY++;
           
              if(snakeX==food.x&&snakeY==food.y){
                food={
                    x:Math.round(Math.random()*(cvsW/snakeW-1)+1),
                      y:Math.round(Math.random()*(cvsH/snakeH-1)+1)
                }
                var newHead={
                  x:snakeX,
                  y:snakeY
                };
                score++;
                document.cookie="score";
              }else{
                     snake.pop();
                 var newHead={
                  x:snakeX,
                  y:snakeY
                }  ;  
              }
          
             snake.unshift(newHead);
             drawScore(score);
             

    
    }  setInterval(draw,50);
    
    
   