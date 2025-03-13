module.exports.fact = function(a) {
    var i, f = 1;
    for (i = 1; i <= a; i++) {
        f = f * i;
    }
    return f;
}