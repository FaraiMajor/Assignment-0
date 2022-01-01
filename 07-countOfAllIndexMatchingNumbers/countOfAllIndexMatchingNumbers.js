function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let count = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] == i){
      count += 1;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;