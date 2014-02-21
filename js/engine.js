var ctx = null;

var road = {
    src: 'img/road_texture.jpg',
    frames: 60,
    currentFrame: 0,
    width: 500,
    height: 500
};

var animHeight = road.height/road.frames;

var img = new Image();
img.addEventListener('load', function(){
    init();
});

img.src = road.src;


var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function init(){
    ctx = document.getElementById('game').getContext('2d');
    loop();
};

function loop(){
    ctx.clearRect ( 0 , 0 , 500 , 500 );
    drawRoad();
    requestAnimFrame(loop);
};

function drawRoad(){

    if(road.currentFrame == 0){
        ctx.drawImage(img, 0, 0);
        road.currentFrame++;
    } else if(road.currentFrame > 0){
        ctx.drawImage(img, 0, (road.frames - road.currentFrame) * animHeight, road.width, road.currentFrame * animHeight, 0, 0, road.width, road.currentFrame * animHeight);
        ctx.drawImage(img, 0, road.currentFrame * animHeight);
        if(road.currentFrame == road.frames){road.currentFrame = 0} else {road.currentFrame++};
    };
};

