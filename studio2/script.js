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

}());