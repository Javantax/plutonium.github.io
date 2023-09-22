var pageIndex = {
  0: ["Introduction","index.html"],
  1: ["Installation","installation.html"],
  2: ["Basic Datatypes","datatypes.html"],
  3: ["Variables","variables.html"],
  4: ["Comments","comments.html"],
  5: ["Operators","operators.html"],
  6: ["Type Conversion","typeconversion.html"],
  7: ["Conditionals","conditionals.html"],
  8: ["Loops","loops.html"],
  9: ["Functions","functions.html"],
  10: ["Builtin functions","builtins.html"],
  11: ["Lists","lists.html"],
  12: ["Bytearrays","bytearrays.html"],
  13: ["foreach loop","foreach.html"],
  14: ["Dictionaries","dict.html"],
  15: ["Classes","classes.html"],
  16: ["Extending Classes","extclass.html"],
  17: ["Operator overloading","operatoroverloading.html"],
  18: ["Coroutines","coroutines.html"],
  19: ["Namespaces","namespaces.html"],
  20: ["Multifile programs","multifile.html"],
  21: ["Macros","macros.html"],
  22: ["File Handling","filehandling.html"],
  23: ["Error handling","errorhandling.html"],
  24: ["Standard Library","stdlib.html"],
  "total": 25
};
function removeWatermark()
{
  var coll = document.getElementsByTagName('img');
  for(var i=0;i<coll.length;i++)
  {
    if(coll[i].alt == "www.000webhost.com")
    {
      coll[i].style.display = "none";
    }
  }
}
window.addEventListener("load",removeWatermark);