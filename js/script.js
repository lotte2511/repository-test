//Titel-------------------------------------------------

let titel = document.querySelector('.titel');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let titelPositie = titel.getBoundingClientRect();

        if (titelPositie.bottom < windowHeight) {
            titel.classList.add('scale'); 
        }
})

//S1--------------------------------------------------
let S1 = document.querySelector('.steen1');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let S1Positie = S1.getBoundingClientRect();

   
        if (S1Positie.top < windowHeight && S1Positie.bottom > 0) {
            S1.classList.add('rotate'); 
        }
});

//S2-------------------------------------------------
let S2 = document.querySelector('.steen2');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let S2Positie = S2.getBoundingClientRect();

        if (S2Positie.top < windowHeight && S2Positie.bottom > 0) 
            {setTimeout(function(){ S2.classList.add('rotate') }, 600);
        }; 
}); 

//S3-------------------------------------------------
let S3 = document.querySelector('.steen3');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let S3Positie = S3.getBoundingClientRect();

        if (S3Positie.top < windowHeight && S3Positie.bottom > 0) 
            {setTimeout(function(){ S3.classList.add('rotate') }, 1000);
        }; 
}); 

//S4-------------------------------------------------
let S4 = document.querySelector('.steen4');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let S4Positie = S4.getBoundingClientRect();

        if (S4Positie.top < windowHeight && S4Positie.bottom > 0) 
            {setTimeout(function(){ S4.classList.add('rotate') }, 1400);
        }; 
}); 

//S5-------------------------------------------------

let S5 = document.querySelector('.steen5');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let S5Positie = S5.getBoundingClientRect();

        if (S5Positie.top < windowHeight && S5Positie.bottom > 0) 
            {setTimeout(function(){ S5.classList.add('rotate') }, 1700);
        }; 
}); 

//S6-------------------------------------------------

let S6 = document.querySelector('.steen6');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let S6Positie = S6.getBoundingClientRect();

        if (S6Positie.top < windowHeight && S6Positie.bottom > 0) 
            {setTimeout(function(){ S6.classList.add('rotate') }, 1900);
        }; 
}); 

//S7-------------------------------------------------

let S7 = document.querySelector('.steen7');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let S7Positie = S7.getBoundingClientRect();

        if (S7Positie.top < windowHeight && S7Positie.bottom > 0) 
            {setTimeout(function(){ S7.classList.add('rotate') }, 2200);
        }; 
}); 

//S8-------------------------------------------------

let S8 = document.querySelector('.steen8');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let S8Positie = S8.getBoundingClientRect();

        if (S8Positie.top < windowHeight && S8Positie.bottom > 0) 
            {setTimeout(function(){ S8.classList.add('rotate') }, 2400);
        }; 
}); 

//S9-------------------------------------------------

let S9 = document.querySelector('.steen9');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let S9Positie = S9.getBoundingClientRect();

        if (S9Positie.top < windowHeight && S9Positie.bottom > 0) 
            {setTimeout(function(){ S9.classList.add('rotate') }, 2600);
        }; 
}); 

//S10-------------------------------------------------

let S10 = document.querySelector('.steen10');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let S10Positie = S10.getBoundingClientRect();

        if (S10Positie.top < windowHeight && S10Positie.bottom > 0) 
            {setTimeout(function(){ S10.classList.add('rotate') }, 2800);
        }; 
}); 

//S10-------------------------------------------------

let S11 = document.querySelector('.steen11');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let S11Positie = S11.getBoundingClientRect();

        if (S11Positie.top < windowHeight && S11Positie.bottom > 0) 
            {setTimeout(function(){ S11.classList.add('fall') }, 3000);
        }; 
})

//Swater-------------------------------------------------

let Swater = document.querySelector('.steenWater');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let SwaterPositie = Swater.getBoundingClientRect();

        if (SwaterPositie.top < windowHeight && SwaterPositie.bottom > 0) {
            setTimeout(function(){ Swater.classList.add('float') }, 3000);
        }
        
})

//SLand-------------------------------------------------

let SLand = document.querySelector('.steenLand');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let SLandPositie = SLand.getBoundingClientRect();

        if (SLandPositie.top < windowHeight && SLandPositie.bottom > 0) {
            setTimeout(function(){ SLand.classList.add('fadeIn') }, 1000);
        }
        
})

//lichaam-------------------------------------------------

let lichaam = document.querySelector('.body');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let lichaamPositie = lichaam.getBoundingClientRect();

        if (lichaamPositie.top < windowHeight && lichaamPositie.bottom > 0) {
            setTimeout(function(){ lichaam.classList.add('slideIn') }, 1000);
        }
        
})



//handLinks-------------------------------------------------

let links = document.querySelector('.handLinks');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let linksPositie = links.getBoundingClientRect();

    if (linksPositie.top < windowHeight && linksPositie.bottom > 0) {
        setTimeout(function(){ links.classList.add('slideLeft') }, 1000);
    }
})

//handRechts-------------------------------------------------

let rechts = document.querySelector('.handRechts');

window.addEventListener('scroll', function () {

    let windowHeight = window.innerHeight;
    let rechtsPositie = rechts.getBoundingClientRect();

    if (rechtsPositie.top < windowHeight && rechtsPositie.bottom > 0) {
        setTimeout(function(){ rechts.classList.add('slideRight') }, 1000);
    }
})

