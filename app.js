//create onload handeler

//random rgb color genetor function

//collect all references


//handle click event

window.onload = function load(params) {
    main();
}

function main(){
 let root = document.getElementById('root');
 let btn = document.getElementById('button')
 btn.addEventListener('click',function(){
     
 })
}

function rgbcolor(){
    let red = Math.round(Math.random()*255) ;
    let blue =  Math.round(Math.random()*255);

    let green =  Math.round(Math.random()*255);

    return `rgb(${red},${green},${blue})`;
}