function addSidebarListeners() {
  const pageOverlay = document.getElementById("page-overlay");
  const sidebar = document.getElementsByClassName("offcanvas")[0];
  const sidebarWidth = sidebar.clientWidth;

  const openSidebar = () => {
    sidebar.classList.add(`right-[-${sidebarWidth}px]`);
    sidebar.classList.remove("right-0");
    pageOverlay.classList.add("invisible");
  }

  const closeSidebar = () => {
    sidebar.classList.remove(`right-[-${sidebarWidth}px]`);
    sidebar.classList.add("right-0");
    pageOverlay.classList.remove("invisible");
  }

  const burgerButton = document.getElementById("burger-button");
  const closeButton = document.getElementById("close-button");
  
  burgerButton.addEventListener("click", closeSidebar);
  closeButton.addEventListener("click", openSidebar);
  pageOverlay.addEventListener("click", openSidebar)
}

addSidebarListeners();