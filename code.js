function pancakeSort(array) 
{
    // only use flip to manipulate the array
    for (var j = array.length; j > 1; j--)
    {
        var mi = findMax(array, j);
        if (mi != j - 1)
        {
            flip(array, mi);
            flip(array, j - 1);
        }
    }
    return array;
}

function flip(array, n) 
{
    var start = 0;
    while (start < n)
    {
        var temp = array[start];
        array[start] = array[n];
        array[n] = temp;
        start++;
        n--;
    }
    return array;
}

function findMax(array, n)
{
    for (var temp = 0, i = 0; i < n; i++)
    {
        if (array[i] > array[temp])
        {
            temp = i;
        }
    }
    return temp;
}

