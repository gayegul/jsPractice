var isValid = function(s) {
    var expected = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };
    var tracker = [];
    for (var i = 0; i < s.length; i++) {
       if (expected.hasOwnProperty(s[i])) {
           tracker.push(expected[s[i]]);
       }
       else if (tracker.pop() !== s[i]) {
            return false;
        }
    }
    if (tracker.length) {
        return false;
    }
    return true;
};
