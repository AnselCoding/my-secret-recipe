
function getImgPath(dir,fileName){
    if(dir == "") return `/Img/${fileName}`;
    return `/Img/${dir}/${fileName}`;
  }