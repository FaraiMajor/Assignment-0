function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let union = new Set();
 for(let i = 0; i < args.length; i++){ 
  args[i].forEach((elements) => union.add(elements));
  } 
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;