var c;
var ctx;

function init(){
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    draw();
}

function draw(){
    var posX = 0;
    var posY = 0;
    setInterval(function(){
        posX += 1;
        posY += 1;
        
        ctx.fillStyle="black";
        ctx.fillRect(0,0,c.width,c.height);
        
        ctx.fillStyle="white";
        ctx.beginPath();
        ctx.arc(posX,120,55,0,Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle="red";
        ctx.beginPath();
        ctx.arc(150,posY,78,0,Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle="blue";
        ctx.beginPath();
        ctx.arc(350,posY,38,0,Math.PI * 2);
        ctx.fill();
    },4);
}