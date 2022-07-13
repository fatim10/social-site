var settingmenu = document.querySelector(".setting-menu");
var darkbtn = document.getElementById("dark-btn");
function SettingsMenuToggle(){

    settingmenu.classList.toggle("setting-menu-height");
}
darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}