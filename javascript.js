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

function init() {
    window.addEventListener('scroll', function(){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            mq = window.matchMedia("only screen and (min-width: 1200px)"),
            mqT = window.matchMedia("(min-width: 680px) and (max-width: 1199px)"),
            mqS = window.matchMedia("(max-width: 679px)"),
            shrinkOn = 450,
            shrinkOnTablet = 230,
            shrinkOnSmartphone = 150,
            menu = document.getElementById('menu'),
            
            menuUl = document.getElementById('menuUl'),
            selector= '#menu li a',
            buttons = document.querySelectorAll(selector),
            arrayLength = buttons.length;
        if (mq.matches){
         if (distanceY > shrinkOn) {
            menu.classList.add('sticky');
            menuUl.classList.add('backgroundUl');
            for (i = 0; i <	arrayLength; i++) {
                buttons[i].classList.add('smaller');
            };
            
        } else if(menu.classList.contains('sticky')){
                menu.classList.remove('sticky');
                menuUl.classList.remove('backgroundUl');
                for (i = 0; i <	arrayLength; i++) {
                buttons[i].classList.remove('smaller');
                };
            
          }
        } else if (mqT.matches){
            
                
                if (distanceY > shrinkOnTablet) {
                    console.log('cośtr');
                  menu.classList.add('sticky');
                  menuUl.classList.add('backgroundUl');
                  for (i = 0; i <	arrayLength; i++) {
                      buttons[i].classList.add('smaller');
                  };

              } else if(menu.classList.contains('sticky')){
                      menu.classList.remove('sticky');
                      menuUl.classList.remove('backgroundUl');
                      for (i = 0; i <	arrayLength; i++) {
                      buttons[i].classList.remove('smaller');
                      };

                }
            } else { var hamburger = document.getElementById('HamburgerBtn'),
                     menuOpen = document.getElementById('menuUl');
                    
                if (distanceY > shrinkOnSmartphone){
                    menuOpen.classList.add('stickySMenuContent'),
                    hamburger.classList.add('sticky');
                    menuUl.classList.add('backgroundUl');
                    for (i = 0; i <	arrayLength; i++) {
                        buttons[i].classList.add('smaller');
                    };

                } else if(hamburger.classList.contains('sticky')){
                        menuOpen.classList.remove('stickySMenuContent'),
                        hamburger.classList.remove('sticky');
                        menuUl.classList.remove('backgroundUl');
                        for (i = 0; i <	arrayLength; i++) {
                        buttons[i].classList.remove('smaller');
                        };
                    }
                };
    });
    
};

window.onload = init();
