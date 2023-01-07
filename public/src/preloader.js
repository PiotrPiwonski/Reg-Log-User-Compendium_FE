"use strict";
console.time();
window.addEventListener('load',()=>{
    const preloader = document.querySelector('#preloader');
    if(document.readyState ==='complete'){
        return preloader.remove();
    }
})
console.timeEnd();