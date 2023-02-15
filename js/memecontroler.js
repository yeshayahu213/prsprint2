function onMemePageLoud(){
console.log('ggg');
   var el= document.querySelector(".memeBody")
   el.style.display='flex'
 var id= getValByQSParams('imgid')
 drawintext()
 renderMeme(id)

}
function renderMeme(id){
    var el=document.querySelector(".memeedit")
// el.innerHTML=`<img src="meme-imgs (square)/${id}.jpg" alt="" />`
}


