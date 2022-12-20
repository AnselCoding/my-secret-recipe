
String.prototype.YYYYMMDD = function () {
    if (this === undefined || this === null) {
        return '';
    }
    return this.substr(0,10);
}