//#region Enumerate
const statusMode = Object.freeze({
    create: 0,
    edit: 1,
    retired: 2,
});
//#endregion

// pic field only need pic name, don't need path
// frontend need server path
// backend only need pic name
function beforeSaveImage(obj){
    let picName = removeImgPath(obj.inputPic.value);
    // frontend need server path
    obj.storePic = getImgPath(obj.pathFloder,picName) ;
    // backend only need pic name
    obj.tempPic = picName;
}

// after action done, close dialog and show snackbar
function closeDialogShowSnackbar(closeDialog, mode, snackbar){
    closeDialog();
    let text = "not defined";
    switch (mode) {
        case statusMode.create:
            text = "完成新增!";
            break;
        case statusMode.edit:
            text = "完成修改";
            break;
        case statusMode.retired:
            text = "完成刪除";
            break;
    }

    // show snackbar
    snackbar.snackbarText = text;
    snackbar.snackbar = true;
}

// find index of obj in obj array
// return int
function findIndexOfObj(objs,obj){
    let objIds = objs.map(x => x.id);
    let index = objIds.indexOf(obj.id);
    return index;
}

// pic only need pic name to save into Db
// return string
function removeImgPath(img){
    // data from server
    let imgNameIndex = img.lastIndexOf("/");
    // data from local upload
    if (imgNameIndex == -1) {
        imgNameIndex = img.lastIndexOf("\\");
    }
    return img.slice(imgNameIndex+1);
}
// put on img path to fileName
// return string
function getImgPath(dir,fileName){
    /// get image from frontend
    // if(dir == "") return `/Img/${fileName}`;
    // return `/Img/${dir}/${fileName}`;

    /// get image from backend
    if(dir == "") return `${apiServer}/Image/${fileName}`;
    return `${apiServer}/Image/${dir}/${fileName}`;
  }