function onMoveToEditor(id){
    console.log('fgdf');
    var el=document.querySelector(".gridgalleryhide")
    el.style.display = "none"
    var imgid={idimg:id}
    setQueryParams(imgid)
    onMemePageLoud()
}