window.addEventListener('DOMContentLoaded', () => {
    
    
    // Grabbing Canvas + Ctx
    let c = document.getElementById('myCanvas')
    
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    


    // Adding input
    let input = document.getElementById('toTake')

    input.addEventListener("input", () => {
        
        // Random placement of letters

        let x = Math.round(Math.random() *c.width )
        let y = Math.round(Math.random() *c.height )
                             // let x = 150
        
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