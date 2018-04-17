$(document).ready(function() {
  
  const tbody = $("tbody");
  const trash = $(".trash");
  const children = tbody.children();
  
  function remove() {
    for(i=0; i<children.length; i++) {
      if($(children[i].children[0]).find(":first-child").filter(":checked").length === 1) {
        children[i].remove();
      }
    }
  }
  
  trash.on('click', remove);
});