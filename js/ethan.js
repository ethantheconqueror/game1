var ethan = ani.obiWanKenobi("ethan");
ethan.x = 100;
window.addEventListener("keydown", function(event){
    console.log(event.keyCode);
    if(event.keyCode === 39){
        console.log( "move right");
        ethan.speed = 4;
        ethan.reverse = false;
        ethan.play("walk")
    } else if(event.keyCode === 37){
        console.log("move left");
        ethan.speed = -4;
        ethan.reverse = true;
        ethan.play("walk")
    } else if(event.keyCode === 38){
        console.log("move up");
        ethan.reverse = false;
        ethan.play("jump")
        ethan.y -= 200;
    }

});