canvas = document.getElementById("Arpitcanvas");
ctx = canvas.getContext("2d")
var mouseEvent = "empty"; 
var last_position_of_x, last_position_of_y;
color = "black"; width_of_line = 1;
canvas,addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("colour").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;


}