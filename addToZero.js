// // Starting array
// let array = [28, 43, -12, 30, 4, 0, 12]

// // Write your solution below:
// function addToZero(a,b) {
//     let sumBox = []
//     for (let i = 0; i > array.length; i++) {

//     sumBox.push((a[i] + b[i]))
// }   if (sumBox === 0) {
//     console.log(true)
// }   else console.log(false)

// } 
// addToZero()
const subArrayExists = (arr) => {
    const sumSet = new Set();
let sum = 0;
for (let i = 0 ; i < arr.length ; i++)
{
    sum += arr[i];

    // If prefix sum is 0
    // or it is already present
    if (sum === 0 || sumSet.has(sum))
        return true;

    sumSet.add(sum);
}
return false;
}

const arr =  [-3, 2, 3, 1, 6];
if (subArrayExists(arr))
    console.log("Found a subarray with 0 sum");
else
    console.log("No Such Sub Array Exists!");