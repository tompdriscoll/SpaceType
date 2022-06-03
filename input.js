window.addEventListener('DOMContentLoaded', () => {
    
    
    // Grabbing Canvas + Ctx
    let c = document.getElementById('myCanvas')
    
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";


    //Drag 

    const ele = document.getElementById('container');
    ele.scrollTop = 100;
    ele.scrollLeft = 150;

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
    pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    };
  
    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    // Adding input logic
    let input = document.getElementById('toTake')

    input.addEventListener("input", () => {
        
        // Removing ability to backspace
        input.onkeydown = function (event) {
        if (event.which == 8 || event.which == 46) {     
               event.preventDefault();
        }};      
       
        // Random placement of letters

        let x = Math.round(Math.random() *c.width )
        let y = Math.round(Math.random() *c.height )
        
        // Making text color random 
        // if(document.getElementById('randomColor').checked){
        // var color = '#' + randomColor()
        // ctx.fillStyle = color
        // }

        //Grabbing input text a drawing
        let text = input.value.charAt(input.value.length-1)
        ctx.fillText(text, x, y);

       
    })

    // Adding Clear Button
    let clear = document.getElementById('clear')

    clear.addEventListener('mousedown', (e) => {
        
        e.preventDefault()
        ctx.clearRect(0, 0, c.width, c.height);
        input.value=''
    })

})

//random color function

let randomColor = function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}