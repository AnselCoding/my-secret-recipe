// setup Model Schemas
function initialNum(value){
    return isUndefined(value) ? 0 : value;
}
function initialStr(value){
    return isUndefined(value) ? "" : value;
}
function initialDate(value){
    return isUndefined(value) ? new Date() : value;
}
function initialBool(value){
    return isUndefined(value) ? new false : value;
}
function isUndefined(obj){
    return obj == undefined;
}

// String prototype method
String.prototype.YYYYMMDD = function () {
    if (this === undefined || this === null) {
        return '';
    }
    return this.substr(0,10);
}