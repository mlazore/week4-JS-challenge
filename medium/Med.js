// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem. 


// using arrays

let nums = [4,5,6,7,0,1,2];
function numbers (x) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == x) {
            return i
        }else{
            return -1
        }
    }

}
console.log(numbers(2));