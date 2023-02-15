function drawintext(){
    var el= document.querySelector('#mycanvas');
    console.log(el);
    var context=el.getContext("2d")
    context.fillStyle="#009578"
    context.font="bold 20px sans-serif"
   
    context.textAlighn="right";
    context.fillText("letter",el.width /2 ,el.height /2)
    


 }
//  start,end,line
// function drawText(x, y, size, color, txt, font) {
//     gCtx.lineWidth = 1
//     gCtx.strokeStyle = 'brown'
//     gCtx.fillStyle = color
//     gCtx.font = `${size}px ${font}`
//     gCtx.textAlign = 'center'
//     gCtx.textBaseline = 'middle'
  
//     gCtx.fillText(txt, x, y) // Draws (fills) a given text at the given (x, y) position.
//     gCtx.strokeText(txt, x, y) // Draws (strokes) a given text at the given (x, y) position.
//   }