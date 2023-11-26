const navList = document.getElementById("nav-list-sidebar");
const sidebarBar = document.getElementById("bar-sidebar");
const sidebar = document.getElementById("sidebar");
const barSidebar = document.getElementById("bar-sidebar");

document.addEventListener("load", function () {
  navList.style.display = "none";
});

sidebarBar.addEventListener("click", function () {
  navList.style.display = "none";

  if (sidebar.classList.contains("sidebar-enabled")) {
    barSidebar.classList.remove("bar-active");
    sidebar.classList.add("sidebar-disabled");
    sidebar.classList.remove("sidebar-enabled");
  } else {
    barSidebar.classList.add("bar-active");
    sidebar.classList.remove("sidebar-disabled");
    sidebar.classList.add("sidebar-enabled");

    sidebar.addEventListener("transitionend", function () {
      navList.style.display = "block";
    });
  }
});
