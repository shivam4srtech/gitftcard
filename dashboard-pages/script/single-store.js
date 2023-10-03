// Single Store tab Selection
 function displayItem(itemID) {
    var storeElement = document.querySelectorAll('.store-menu');
    for (var i = 0; i < storeElement.length; i++) {
      storeElement[i].style.display = 'none';
    }
    document.getElementById(itemID).style.display = 'block';
  
    localStorage.setItem('selectedContent', itemID);
  }
  
  var lastStoreMenu = localStorage.getItem('selectedContent');
  if (lastStoreMenu) {
    displayItem(lastStoreMenu); 
  }