let theme = document.cookie;
let html = document.querySelector('html')

document.addEventListener("DOMContentLoaded", function(){

    if(theme == "theme=0"){
        html.removeAttribute('class');
        html.classList.add('whiteTheme');
    }else if(theme == "theme=1"){
        html.removeAttribute('class');
        html.classList.add('blackTheme');
        
    }

});