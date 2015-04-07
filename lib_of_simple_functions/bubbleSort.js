var arr = [4,5,16,22,14,2,1,6];

var bubbleSort = function(arr){
    for (var q = 0; q < arr.length; q++){
       for (var x = 1; x < arr.length; x++){
            var y = x-1;
            if (arr[y] > arr[x]){
                var z = arr[x];
                var w = arr[y];
                arr[y] = z;
                arr[x] = w;
            }
        }
    }
    return arr;
}

bubbleSort(arr);

