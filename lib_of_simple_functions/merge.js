var merge = function(arr1, arr2){
    var result = [];
    var j = 0;
    var z=0;
    if (arr1.length<arr2.length){
        var short = arr1;
        var long = arr2;
    }else{
        var short = arr2;
        var long = arr2;
    }
    for (i=0; i<=short.length; i+=z){
        console.log(arr1[i], arr2[j]);
        console.log(i, j, z);
        if(arr1[i]<arr2[j]){
            if (i !== undefined){
                result.push(arr1[i]);
                z=1;
            }
        } else {
            if (arr2[j] !== undefined){
                result.push(arr2[j]);
                z=0;
            }
            if (j<short.length){
                j++;
            } else {
                for (var q = arr2.length; q < arr1.length; q++){
                result.push(arr1[q]);
                }
                return result;
            }
        }

    }
           return result; 
    
}

merge([1,3,5,7,9,11,15],[2,4,6,8,10]);