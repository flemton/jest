function stringLength(string) {
    if (!(string.length >= 1 & string.length <= 10))
    {
        return ('error, string length less than 1 or greater than 10');
    }
    return string.length; 
}

module.exports = stringLength;