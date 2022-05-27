document.getElementById('search-input').onkeydown = function(e){
    if(e.key == "Enter"){
      document.getElementById('search-form').submit();
    }
 };

 function inputFocus(e) {
  if (e.key == "/" && e.ctrlKey) 
      document.getElementById("search-input").focus();
}

document.onkeydown = inputFocus;


    
