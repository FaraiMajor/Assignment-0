class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
     if (nums.length === 0) {
    return false;
  } else {
    let midpoint = Math.floor(nums.length / 2);

    if (nums[midpoint] === target) {
      return true;
    } else {
      if (nums[midpoint] < target) {
        return this.binarySearch(nums.slice(midpoint + 1), target);
      } else if (nums[midpoint] > target) {
        return this.binarySearch(nums.slice(0, midpoint), target);
        }
      }
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;