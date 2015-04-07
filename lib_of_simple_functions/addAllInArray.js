var sumAll = function(array, callback){
    var result = array[0];
    for(i = 1; i < array.length; i++){
        result = callback(result, array[i]);
    }
    return result;
}

sumAll([3,3,3], function(total, num){
    return total + num;
});