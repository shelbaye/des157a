(function(){
    "use strict";
    console.log('reading JS');

    const arrowLeft = document.querySelector("#navigation img[src='images/arrowLeft.png']");
    const arrowRight = document.querySelector("#navigation img[src='images/arrowRight.png']");
    const previews = document.querySelector("#previews");
    const description = document.querySelector("#description");
    const pressLeft = document.querySelector("#hovered img[src='images/pressedLeft.png']");
    const pressRight = document.querySelector("hovered img[src='images/pressRight.png']");

    //gameCards
    const piplup = document.querySelector('#piplupCard');
    const dragon = document.querySelector('#dragonCard');
    const Hellokitty = document.querySelector('#helloKittyCard');
    const hirono = document.querySelector('#hironoCard');
    const pochaco = document.querySelector('#pochacoCard');

    //descriptions
    const piplupGame = document.querySelector('#piplupGame');
    const dragonGame = document.querySelector('#dragonGame');
    const HellokittyGame = document.querySelector('#hellokittyGame');
    const hironoGame = document.querySelector('#hironoGame');
    const pochacoGame = document.querySelector('#pochacoGame');

    //to close each tab
    const piplupClose = document.querySelector("#piplupGame img[src='images/close.png']");
    const dragonClose = document.querySelector("#dragonGame img[src='images/close.png']");
    const HellokittyClose = document.querySelector("#hellokittyGame img[src='images/close.png']");
    const hironoClose = document.querySelector("#hironoGame img[src='images/close.png']");
    const pochacoClose = document.querySelector("#pochacoGame img[src='images/close.png']");


    
    
    //to move the game cards
    function slideLeft(){
        previews.scrollLeft -= 200;
    }

    function slideRight(){
        previews.scrollLeft += 200;
    }
    
    arrowLeft.addEventListener('click', slideLeft);
    arrowRight.addEventListener('click', slideRight);


    //open and close the piplup game description
    piplup.addEventListener('click', function(event){
        event.preventDefault();
        piplupGame.classList.remove('hidden');
    });

    piplupClose.addEventListener('click', function(event){
        event.preventDefault();
        piplupGame.classList.add('hidden');
    });
    
    //open and close the dragon game description
    dragon.addEventListener('click', function(event){
        event.preventDefault();
        dragonGame.classList.remove('hidden');
    }); 

    dragonClose.addEventListener('click', function(event){
        event.preventDefault();
        dragonGame.classList.add('hidden');
    });

    //open and close the hello kitty game description
    Hellokitty.addEventListener('click', function(event){
        event.preventDefault();
        HellokittyGame.classList.remove('hidden');
    }); 

    HellokittyClose.addEventListener('click', function(event){
        event.preventDefault();
        HellokittyGame.classList.add('hidden');
    });
    
    //open and close the hirono game description
    hirono.addEventListener('click', function(event){
        event.preventDefault();
        hironoGame.classList.remove('hidden');
    }); 

    hironoClose.addEventListener('click', function(event){
        event.preventDefault();
        hironoGame.classList.add('hidden');
    });
    
    //open and close the pochaco game description
    pochaco.addEventListener('click', function(event){
        event.preventDefault();
        pochacoGame.classList.remove('hidden');
    }); 

    pochacoClose.addEventListener('click', function(event){
        event.preventDefault();
        pochacoGame.classList.add('hidden');
    });


    //final project part

    //piplup section//

    //piplup levels
    const piplup1 = document.querySelector('#piplup1');
    const piplup2 = document.querySelector('#piplup2');
    const piplup3 = document.querySelector('#piplup3');
    const piplupWin = document.querySelector('#piplupWin');

    //button for intro
    const piplupPlay = document.querySelector('#piplupGame .play');

    //button for level 1
    const piplup1next = document.querySelector('#piplup1 .next');

    //button for level 2
    const piplup2prev = document.querySelector('#piplup2 .previous')
    const piplup2next = document.querySelector('#piplup2 .next')

    //button for level 3
    const piplup3prev = document.querySelector('#piplup3 .previous')
    const piplup3next = document.querySelector('#piplup3 .next')


    //to close each level
    const piplup1Close = document.querySelector("#piplup1 img[src='images/close.png']");
    const piplup2Close = document.querySelector("#piplup2 img[src='images/close.png']");
    const piplup3Close = document.querySelector("#piplup3 img[src='images/close.png']");
    const piplupWinClose = document.querySelector("#piplupWin img[src='images/close.png']")

    piplup1Close.addEventListener('click', function(event){
        event.preventDefault();
        piplup1.classList.add('hidden');
    });

    piplup2Close.addEventListener('click', function(event){
        event.preventDefault();
        piplup2.classList.add('hidden');
    });
    
    piplup3Close.addEventListener('click', function(event){
        event.preventDefault();
        piplup3.classList.add('hidden');
    });

    piplupWinClose.addEventListener('click', function(event){
        event.preventDefault();
        piplupWin.classList.add('hidden');
    });

    //functions for piplup level 
    piplupPlay.addEventListener('click', function(event){
        console.log('Play button clicked');
        event.preventDefault();
        piplup1.classList.remove('hidden');
        piplupGame.classList.add('hidden');
    });

    piplup1next.addEventListener('click', function(event){
        event.preventDefault();
        piplup1.classList.add('hidden');
        piplup2.classList.remove('hidden');
    });

    piplup2prev.addEventListener('click', function(event){
        event.preventDefault();
        piplup1.classList.remove('hidden');
        piplup2.classList.add('hidden');
    });

    piplup2next.addEventListener('click', function(event){
        event.preventDefault();
        piplup3.classList.remove('hidden');
        piplup2.classList.add('hidden');
    });

    piplup3prev.addEventListener('click', function(event){
        event.preventDefault();
        piplup3.classList.add('hidden');
        piplup2.classList.remove('hidden');
    });

    piplup3next.addEventListener('click', function(event){
        event.preventDefault();
        piplup3.classList.add('hidden');
        piplupWin.classList.remove('hidden');
    });



    //for the dragon levels
    const dragon1 = document.querySelector('#dragon1');
    const dragon2 = document.querySelector('#dragon2');
    const dragon3 = document.querySelector('#dragon3');
    const dragonWin = document.querySelector('#dragonWin');

    //button for intro
    const dragonPlay = document.querySelector('#dragonGame .play');

    //button for level 1
    const dragon1next = document.querySelector('#dragon1 .next');

    //button for level 2
    const dragon2prev = document.querySelector('#dragon2 .previous')
    const dragon2next = document.querySelector('#dragon2 .next')

    //button for level 3
    const dragon3prev = document.querySelector('#dragon3 .previous')
    const dragon3next = document.querySelector('#dragon3 .next')


    //to close each level
    const dragon1Close = document.querySelector("#dragon1 img[src='images/close.png']");
    const dragon2Close = document.querySelector("#dragon2 img[src='images/close.png']");
    const dragon3Close = document.querySelector("#dragon3 img[src='images/close.png']");
    const dragonWinClose = document.querySelector("#dragonWin img[src='images/close.png']")

    dragon1Close.addEventListener('click', function(event){
        event.preventDefault();
        dragon1.classList.add('hidden');
    });

    dragon2Close.addEventListener('click', function(event){
        event.preventDefault();
        dragon2.classList.add('hidden');
    });
    
    dragon3Close.addEventListener('click', function(event){
        event.preventDefault();
        dragon3.classList.add('hidden');
    });

    dragonWinClose.addEventListener('click', function(event){
        event.preventDefault();
        dragonWin.classList.add('hidden');
    });

    //functions for dragon level 
    dragonPlay.addEventListener('click', function(event){
        console.log('Play button clicked');
        event.preventDefault();
        dragon1.classList.remove('hidden');
        dragonGame.classList.add('hidden');
    });

    dragon1next.addEventListener('click', function(event){
        event.preventDefault();
        dragon1.classList.add('hidden');
        dragon2.classList.remove('hidden');
    });

    dragon2prev.addEventListener('click', function(event){
        event.preventDefault();
        dragon1.classList.remove('hidden');
        dragon2.classList.add('hidden');
    });

    dragon2next.addEventListener('click', function(event){
        event.preventDefault();
        dragon3.classList.remove('hidden');
        dragon2.classList.add('hidden');
    });

    dragon3prev.addEventListener('click', function(event){
        event.preventDefault();
        dragon3.classList.add('hidden');
        dragon2.classList.remove('hidden');
    });

    dragon3next.addEventListener('click', function(event){
        event.preventDefault();
        dragon3.classList.add('hidden');
        dragonWin.classList.remove('hidden');
    });


   
    //for the hello kitty levels
    const hellokitty1 = document.querySelector('#hellokitty1');
    const hellokitty2 = document.querySelector('#hellokitty2');
    const hellokitty3 = document.querySelector('#hellokitty3');
    const hellokittyWin = document.querySelector('#hellokittyWin');

    //button for intro
    const hellokittyPlay = document.querySelector('#hellokittyGame .play');

    //button for level 1
    const hellokitty1next = document.querySelector('#hellokitty1 .next');

    //button for level 2
    const hellokitty2prev = document.querySelector('#hellokitty2 .previous')
    const hellokitty2next = document.querySelector('#hellokitty2 .next')

    //button for level 3
    const hellokitty3prev = document.querySelector('#hellokitty3 .previous')
    const hellokitty3next = document.querySelector('#hellokitty3 .next')


    //to close each level
    const hellokitty1Close = document.querySelector("#hellokitty1 img[src='images/close.png']");
    const hellokitty2Close = document.querySelector("#hellokitty2 img[src='images/close.png']");
    const hellokitty3Close = document.querySelector("#hellokitty3 img[src='images/close.png']");
    const hellokittyWinClose = document.querySelector("#hellokittyWin img[src='images/close.png']")

    hellokitty1Close.addEventListener('click', function(event){
        event.preventDefault();
        hellokitty1.classList.add('hidden');
    });

    hellokitty2Close.addEventListener('click', function(event){
        event.preventDefault();
        hellokitty2.classList.add('hidden');
    });
    
    hellokitty3Close.addEventListener('click', function(event){
        event.preventDefault();
        hellokitty3.classList.add('hidden');
    });

    hellokittyWinClose.addEventListener('click', function(event){
        event.preventDefault();
        hellokittyWin.classList.add('hidden');
    });

    //functions for hellokitty level 
    hellokittyPlay.addEventListener('click', function(event){
        console.log('Play button clicked');
        event.preventDefault();
        hellokitty1.classList.remove('hidden');
        hellokittyGame.classList.add('hidden');
    });

    hellokitty1next.addEventListener('click', function(event){
        event.preventDefault();
        hellokitty1.classList.add('hidden');
        hellokitty2.classList.remove('hidden');
    });

    hellokitty2prev.addEventListener('click', function(event){
        event.preventDefault();
        hellokitty1.classList.remove('hidden');
        hellokitty2.classList.add('hidden');
    });

    hellokitty2next.addEventListener('click', function(event){
        event.preventDefault();
        hellokitty3.classList.remove('hidden');
        hellokitty2.classList.add('hidden');
    });

    hellokitty3prev.addEventListener('click', function(event){
        event.preventDefault();
        hellokitty3.classList.add('hidden');
        hellokitty2.classList.remove('hidden');
    });

    hellokitty3next.addEventListener('click', function(event){
        event.preventDefault();
        hellokitty3.classList.add('hidden');
        hellokittyWin.classList.remove('hidden');
    });

        //for the hirono levels
        const hirono1 = document.querySelector('#hirono1');
        const hirono2 = document.querySelector('#hirono2');
        const hirono3 = document.querySelector('#hirono3');
        const hironoWin = document.querySelector('#hironoWin');
    
        //button for intro
        const hironoPlay = document.querySelector('#hironoGame .play');
    
        //button for level 1
        const hirono1next = document.querySelector('#hirono1 .next');
    
        //button for level 2
        const hirono2prev = document.querySelector('#hirono2 .previous')
        const hirono2next = document.querySelector('#hirono2 .next')
    
        //button for level 3
        const hirono3prev = document.querySelector('#hirono3 .previous')
        const hirono3next = document.querySelector('#hirono3 .next')
    
    
        //to close each level
        const hirono1Close = document.querySelector("#hirono1 img[src='images/close.png']");
        const hirono2Close = document.querySelector("#hirono2 img[src='images/close.png']");
        const hirono3Close = document.querySelector("#hirono3 img[src='images/close.png']");
        const hironoWinClose = document.querySelector("#hironoWin img[src='images/close.png']")
    
        hirono1Close.addEventListener('click', function(event){
            event.preventDefault();
            hirono1.classList.add('hidden');
        });
    
        hirono2Close.addEventListener('click', function(event){
            event.preventDefault();
            hirono2.classList.add('hidden');
        });
        
        hirono3Close.addEventListener('click', function(event){
            event.preventDefault();
            hirono3.classList.add('hidden');
        });
    
        hironoWinClose.addEventListener('click', function(event){
            event.preventDefault();
            hironoWin.classList.add('hidden');
        });
    
        //functions for hirono level 
        hironoPlay.addEventListener('click', function(event){
            console.log('Play button clicked');
            event.preventDefault();
            hirono1.classList.remove('hidden');
            hironoGame.classList.add('hidden');
        });
    
        hirono1next.addEventListener('click', function(event){
            event.preventDefault();
            hirono1.classList.add('hidden');
            hirono2.classList.remove('hidden');
        });
    
        hirono2prev.addEventListener('click', function(event){
            event.preventDefault();
            hirono1.classList.remove('hidden');
            hirono2.classList.add('hidden');
        });
    
        hirono2next.addEventListener('click', function(event){
            event.preventDefault();
            hirono3.classList.remove('hidden');
            hirono2.classList.add('hidden');
        });
    
        hirono3prev.addEventListener('click', function(event){
            event.preventDefault();
            hirono3.classList.add('hidden');
            hirono2.classList.remove('hidden');
        });
    
        hirono3next.addEventListener('click', function(event){
            event.preventDefault();
            hirono3.classList.add('hidden');
            hironoWin.classList.remove('hidden');
        });

     //for the pochaco levels
     const pochaco1 = document.querySelector('#pochaco1');
     const pochaco2 = document.querySelector('#pochaco2');
     const pochaco3 = document.querySelector('#pochaco3');
     const pochacoWin = document.querySelector('#pochacoWin');
 
     //button for intro
     const pochacoPlay = document.querySelector('#pochacoGame .play');
 
     //button for level 1
     const pochaco1next = document.querySelector('#pochaco1 .next');
 
     //button for level 2
     const pochaco2prev = document.querySelector('#pochaco2 .previous')
     const pochaco2next = document.querySelector('#pochaco2 .next')
 
     //button for level 3
     const pochaco3prev = document.querySelector('#pochaco3 .previous')
     const pochaco3next = document.querySelector('#pochaco3 .next')
 
 
     //to close each level
     const pochaco1Close = document.querySelector("#pochaco1 img[src='images/close.png']");
     const pochaco2Close = document.querySelector("#pochaco2 img[src='images/close.png']");
     const pochaco3Close = document.querySelector("#pochaco3 img[src='images/close.png']");
     const pochacoWinClose = document.querySelector("#pochacoWin img[src='images/close.png']")
 
     pochaco1Close.addEventListener('click', function(event){
         event.preventDefault();
         pochaco1.classList.add('hidden');
     });
 
     pochaco2Close.addEventListener('click', function(event){
         event.preventDefault();
         pochaco2.classList.add('hidden');
     });
     
     pochaco3Close.addEventListener('click', function(event){
         event.preventDefault();
         pochaco3.classList.add('hidden');
     });
 
     pochacoWinClose.addEventListener('click', function(event){
         event.preventDefault();
         pochacoWin.classList.add('hidden');
     });
 
     //functions for hirono level 
     pochacoPlay.addEventListener('click', function(event){
         console.log('Play button clicked');
         event.preventDefault();
         pochaco1.classList.remove('hidden');
         pochacoGame.classList.add('hidden');
     });
 
     pochaco1next.addEventListener('click', function(event){
         event.preventDefault();
         pochaco1.classList.add('hidden');
         pochaco2.classList.remove('hidden');
     });
 
     pochaco2prev.addEventListener('click', function(event){
         event.preventDefault();
         pochaco1.classList.remove('hidden');
         pochaco2.classList.add('hidden');
     });
 
     pochaco2next.addEventListener('click', function(event){
         event.preventDefault();
         pochaco3.classList.remove('hidden');
         pochaco2.classList.add('hidden');
     });
 
     pochaco3prev.addEventListener('click', function(event){
         event.preventDefault();
         pochaco3.classList.add('hidden');
         pochaco2.classList.remove('hidden');
     });
 
     pochaco3next.addEventListener('click', function(event){
         event.preventDefault();
         pochaco3.classList.add('hidden');
         pochacoWin.classList.remove('hidden');
     });

     //profile picture

     const pic = document.querySelector('#pp');
     const profile = document.querySelector('#profile');
     const profileClose = document.querySelector("#profile img[src='images/close.png']");

     pic.addEventListener('click', function(event){
        event.preventDefault();
        profile.classList.remove('hidden');
     });

     profileClose.addEventListener('click', function(event){
        event.preventDefault();
        profile.classList.add('hidden');
     });
     

}());