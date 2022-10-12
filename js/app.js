//? VUE JS

const app = Vue.createApp({
    data() {
        return {
            isWhiteTheme: true, 
            isSignInActive: true, 
            isSignUpActive: false,

            passwordVal: "",
            isPasError: false,

            repeatPasswordVal: "",
            isRepError: false,

            passwordError: "",

            phoneVal: "",
            isPhoneError: false,

            phoneError: "",
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
        },
        phone(e){
            e.preventDefault();
            this.phoneVal = e.target.value;
            if(this.phoneVal != ''){
                if(this.phoneVal[0] == '+'){
                    if(this.phoneVal.length <= 13){
                        this.isPhoneError = false;

                        for(let i = 0; i < this.phoneVal.length; i++){
                            console.log(this.phoneVal.charCodeAt(i));
                            if((this.phoneVal.charCodeAt(i) > 47 && this.phoneVal.charCodeAt(i) < 58) || this.phoneVal.charCodeAt(i) == 43){
                                this.isPhoneError = false;
                                this.phoneError = "";
                            }else{
                                this.isPhoneError = true;
                                this.phoneError = "В номере должны быть только цифры и +";
                                break;
                            }
                        }
                    }else{
                        this.isPhoneError = true;
                        this.phoneError = "Вы ввели слишком много символов";
                    }
                }else{
                    this.isPhoneError = true;
                    this.phoneError = "Номер длжен начинатся с +";
                }
            }else{
                this.isPhoneError = false;
                this.phoneError = "";
            }
        },
        password(e){
            e.preventDefault();
            this.passwordVal = e.target.value;

            if(this.repeatPasswordVal != this.passwordVal){
                this.passwordError = "Пароли не совпадают";
                this.isPasError = true;
            }else{
                this.passwordError = "";
                this.isPasError = false;
                this.isRepError = false;
            }
        },
        repeatPassword(e){
            e.preventDefault();
            this.repeatPasswordVal = e.target.value;

            if(this.repeatPasswordVal != this.passwordVal){
                this.passwordError = "Пароли не совпадают";
                this.isRepError = true;
            }else{
                this.passwordError = "";
                this.isPasError = false;
                this.isRepError = false;
            }
        },
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

