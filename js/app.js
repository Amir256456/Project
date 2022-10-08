//? VUE JS

const app = Vue.createApp({
    data() {
        return {
            isWhiteTheme: true, // white theme
            isSignInActive: true, //toggle active SignIn and SignUp
            isSignUpActive: false
        }
    },
    methods: {
        toggleClass(){ //toggle active SignIn and SignUp
            this.isSignInActive = !this.isSignInActive; 
            this.isSignUpActive = !this.isSignUpActive;
        }
    }
})
app.mount('#app')





//? Native JS

let html = document.querySelector('html')
let panel = document.querySelector('.panel')
let themeBtn = document.querySelectorAll('.themeBtn')

themeBtn[0].addEventListener('click', function(){
    html.removeAttribute('class');
    html.classList.add('whiteTheme')
    document.cookie = "theme=0";
})
themeBtn[1].addEventListener('click', function(){
    html.removeAttribute('class');
    html.classList.add('blackTheme');
    panel.style.boxShadow = "none";
    document.cookie = "theme=1";
})

