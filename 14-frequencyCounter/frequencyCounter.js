function frequencyCounter(word) {
  // Insert code here;
   let frequency = {};
    for (let i=0; i<word.length;i++) {
        let character = word.charAt(i);
        if (frequency[character]) {
           frequency[character]++;
        } else {
           frequency[character] = 1;
        }
    }

    return frequency;

}

// Do not edit this line;
module.exports = frequencyCounter;