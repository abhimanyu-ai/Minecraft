var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y, left: player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("Shift and P pressed together");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById('current_width').innerHTML=block_width;
        document.getElementById('current_height').innerHTML=block_height;
    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("Shift and P pressed together");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById('current_width').innerHTML=block_width;
        document.getElementById('current_height').innerHTML=block_height;
    }
    if (keypressed == '38') {
        up();
        console.log("Up");
    }
    if (keypressed == '39') {
        right();
        console.log("Right");
    }
    if (keypressed == '40') {
        down();
        console.log("Down");
    }
    if (keypressed == '37') {
        left();
        console.log("Left");
    }
    if (keypressed == '87') {
        new_image('wall.jpg');
        console.log("W");
    }
    if (keypressed == '71') {
        new_image('ground.png');
        console.log("G");
    }
    if (keypressed == '76') {
        new_image('light_green.png');
        console.log("L");
    }
    if (keypressed == '84') {
        new_image('trunk.jpg');
        console.log("T");
    }
    if (keypressed == '82') {
        new_image('roof.jpg');
        console.log("R");
    }
    if (keypressed == '89') {
        new_image('yellow_wall.png');
        console.log("Y");
    }
    if (keypressed == '68') {
        new_image('dark_green.png');
        console.log("D");
    }
    if (keypressed == '85') {
        new_image('unique.png');
        console.log("U");
    }
    if (keypressed == '67') {
        new_image('cloud.jpg');
        console.log("C");
    }
}