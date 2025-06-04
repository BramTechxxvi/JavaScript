class Median {

    concatList = (arr1, ar2)=> {
        const newArray = [arr1.length + arr2.length];
        let temp = 0;
        for (let count = 0; count < arr1.length; count++) {
            newArray[temp++] = arr1[count];
        }
        for (let counter = 0; counter < arr2.length; counter++) {
            newArray[temp++] = arr2[counter];
        } 
        return newArray;
    }

    sortList = (arr)=> {
        let result = arr[0];
        for (let count =0; count < arr.length; count++) {
            result = count
        for (let counter = count+1; counter <arr.length; counter++) {
            if(arr[counter] < arr[result]) result = arr[counter];
        }
        let temp = arr[result];
        arr[result] = arr[count]
        arr[count] = temp;
    } return arr;
}
array = [10, 40, 54, 90];

}
m