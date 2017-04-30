var pageNav = document.getElementById('pages');
var pageTriggers = pageNav.getElementsByTagName('li');
var newPageIndex, currentPageIndex = 0;   // page positions
var newPage, currentPage;                 // page contents

pageNav.addEventListener("click", activatePage);

function activatePage(e) {

  /* Iterates through page triggers and highlights clicked trigger
      **also finds location of selected page for animation**             */
  if (e.target.nodeName == "LI"){
    for(i = 0; i < e.target.parentNode.children.length; i++){
      pageTriggers[i].classList.remove("active");
      if(pageTriggers[i] == e.target)
        newPageIndex = i;
    }
    e.target.classList.add("active");       //highlights clicked page button
  }

  newPage = document.getElementById('container').getElementsByTagName('div')[newPageIndex];
  currentPage = document.getElementById('container').getElementsByTagName('div')[currentPageIndex];

  if(newPageIndex > currentPageIndex){      // If clicked page is below current page:
    resetClasses();                         //   Clear animation classes
    animateUp();                            //   Slide current page up out of view
  }                                         //   and clicked page up into view
  else if(newPageIndex < currentPageIndex){ // If clicked page is above current page:
    resetClasses();                         //   Clear animation classes
    animateDown();                          //   Slide current page down out of view
  }                                         //   and clicked page down into view
  currentPageIndex = newPageIndex;
}

function resetClasses(){
  newPage.classList.remove("slideOutUp");
  newPage.classList.remove("slideOutDown");
  currentPage.classList.remove("slideInUp");
  currentPage.classList.remove("slideInDown");
}
function animateUp(){
  currentPage.classList.add("slideOutUp");
  newPage.classList.add("slideInUp");
}
function animateDown(){
  currentPage.classList.add("slideOutDown");
  newPage.classList.add("slideInDown");
}
