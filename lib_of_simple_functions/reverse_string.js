//reverse string

var reverseString = function(string){
    var reversed = string[string.length-1];
    for (i = string.length-2; i >= 0; i--){
        console.log(string[i]);
        reversed = reversed + string[i];
    }
    return reversed;
}

reverseString("hello");