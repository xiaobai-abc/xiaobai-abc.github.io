(function () {
    var switchButton = $(".menu_switch");
    var menuNav = $(".menu_nav");


    function toggleNav() {
        switchButton.classList.toggle("menu_switch--expand");
        menuNav.classList.toggle("menu_nav--visible");
    }
    switchButton.onclick = toggleNav;
    menuNav.onclick = toggleNav;
})()