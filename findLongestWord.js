// Write your solution below:
function findLongestWord(arr) {
    let len = 0
    for (let i = 0; i < arr.length; i++) {
      if( arr[i].length > len) {
        len = arr[i].length
      }
    }
    console.log(len)
  }

  findLongestWord(["hi", "hello"])