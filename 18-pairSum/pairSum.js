function pairSum(nums, target) {
  // Insert code here;
  if(nums.length <= 1){
    throw "ERROR!!!";
  }
  let map = new Map;
  for(let i = 0; i < nums.length; i ++){
    let complement = target - nums[i];
    if(map.has(complement)){
      return true;
    }
    map.set(nums[i], i)
  }
  return false;
}
// Do not edit this line;
module.exports = pairSum;