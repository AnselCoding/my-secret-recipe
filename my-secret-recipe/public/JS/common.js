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

// method
var todayStr = function () {
    let date = new Date();
    let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return today;
}

// String prototype method
String.prototype.YYYYMMDD = function () {
    if (this === undefined || this === null) {
        return '';
    }
    return this.substr(0,10);
}
// another way
// String.prototype.YYYYMMDD = function () {
//     if (this === undefined || this === null) {
//         return '';
//     }
//     var dt = new Date(this);
//     var month = (dt.getMonth() + 1).pad();
//     var day = dt.getDate().pad();

//     return `${dt.getFullYear()}-${month}-${day}`
// }

// Date prototype method
Date.prototype.YYYYMMDD = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
        ].join('-');
}

// // Number prototype method
// Number.prototype.pad = function () {
//     return (this > 9 ? '' : '0') + this;
// }