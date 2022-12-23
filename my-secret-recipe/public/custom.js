//#region Enumerate
const statusMode = Object.freeze({
    create: 0,
    edit: 1,
    retired: 2,
});
//#endregion

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
    let imgNameIndex = img.lastIndexOf("/");
    return img.slice(imgNameIndex+1);
}
// put on img path to fileName
// return string
function getImgPath(dir,fileName){
    if(dir == "") return `/Img/${fileName}`;
    return `/Img/${dir}/${fileName}`;
  }