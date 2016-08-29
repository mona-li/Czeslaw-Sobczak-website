function showHMenu() {
document.getElementById('HamburgerBtn').classList.toggle('open');
document.getElementById('menuUl').classList.toggle('show'); 
};

window.onclick = function(event) {
    var menuH = document.getElementById('menuUl').classList;
    var menuHBtn = document.getElementById('HamburgerBtn').classList;
    if (!event.target.matches('#HamburgerBtn')) {   
        if (menuH.contains('show') || menuHBtn.contains('open')) {
            menuH.remove('show');
            menuHBtn.remove('open');
        };
    };
};
