let gMeme;



function getmeme(){
   var furrMeme=gMeme
   return furrMeme
}


function setLineTxt(currLine,prop,value){
  var curr=  gMeme.lines[currLine]
  function drawText(x, y, size, color, txt, font) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = color
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
  
    gCtx.fillText(txt, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(txt, x, y) // Draws (strokes) a given text at the given (x, y) position.
  }



}


    




