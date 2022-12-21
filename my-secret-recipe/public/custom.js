

// find index of obj in obj array
function findIndexOfObj(objs,obj){
    let objIds = objs.map(x => x.id);
    let index = objIds.indexOf(obj.id);
    return index;
}

// pic only need pic name to save into Db
function removeImgPath(img){
    let imgNameIndex = img.lastIndexOf("/");
    return img.slice(imgNameIndex+1);
}
// put on img path to fileName
function getImgPath(dir,fileName){
    if(dir == "") return `/Img/${fileName}`;
    return `/Img/${dir}/${fileName}`;
  }