//? VUE JS

const app = Vue.createApp({
    data() {
        return {
            isWhiteTheme: true, 
            isSignInActive: true, 
            isSignUpActive: false
        }
    },
    methods: {
        toggleClassSignUp(){ 
            if(!this.isSignUpActive){
                this.isSignUpActive = true;
                this.isSignInActive = false;
            }
        },
        toggleClassSignIn(){ 
            if(!this.isSignInActive){
                this.isSignInActive = true;
                this.isSignUpActive = false;
            }
        }
    }
})
app.mount('#app')





//? Native JS

// let html = document.querySelector('html')
// let panel = document.querySelector('.panel')
// let themeBtn = document.querySelectorAll('.themeBtn')

// themeBtn[0].addEventListener('click', function(){
//     html.removeAttribute('class');
//     html.classList.add('whiteTheme')
//     document.cookie = "theme=0";
// })
// themeBtn[1].addEventListener('click', function(){
//     html.removeAttribute('class');
//     html.classList.add('blackTheme');
//     panel.style.boxShadow = "none";
//     document.cookie = "theme=1";
// })

