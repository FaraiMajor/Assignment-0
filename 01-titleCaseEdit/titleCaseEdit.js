function titleCaseEdit(title) {
  // Insert code here;
  if ((title===null) || (title===''))
       return false;
  else
   title = title.toString();
  
 return title.replace(/\w\S*/g, 
function(txt){return txt.charAt(0).toUpperCase() +
       txt.substr(1).toLowerCase();});
}

// Do not edit this line;
module.exports = titleCaseEdit;