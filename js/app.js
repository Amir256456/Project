//? VUE JS

const app = Vue.createApp({
    data() {
        return {
            html: document.querySelector('html'),

            isLightThemeBtnActive: true,
            isDarkThemeBtnActive: false,

            isSignInActive: true, 
            isSignUpActive: false,

            isPanelActive: false,
            isContentActive: false,

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
        changeTheme(a){
            if(a == 1){
                this.isLightThemeBtnActive = true;
                this.isDarkThemeBtnActive = false;
				localStorage.setItem('theme', "lightTheme");
                this.html.removeAttribute('class');
                this.html.classList.add('lightTheme');
            }else{
                this.isLightThemeBtnActive = false;
                this.isDarkThemeBtnActive = true;
				localStorage.setItem('theme', "darkTheme");
                this.html.removeAttribute('class');
                this.html.classList.add('darkTheme');
            }

        },
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
        panel(a){
            this.isContentActive = true;
            if(a == 1){
                this.isSignInActive = true;
                this.isSignUpActive = false;
                this.isPanelActive = true;
            }else if(a == 2){
                this.isSignUpActive = true;
                this.isSignInActive = false;
                this.isPanelActive = true;
            }else{
                this.isPanelActive = false;
                this.isContentActive = false;
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
                                this.phoneError = "В номере могут быть только цифры и +";
                                break;
                            }
                        }
                    }else{
                        this.isPhoneError = true;
                        this.phoneError = "Вы ввели слишком много символов";
                    }
                }else{
                    this.isPhoneError = true;
                    this.phoneError = "Номер может начинатся только с +";
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
    },
     mounted(){
        document.querySelector('html').removeAttribute('class');
        document.querySelector('html').classList.add(`${localStorage.getItem('theme')}`);
     }
})
app.mount('#app')





//? Native JS




//? QR CODE
// let header = document.querySelector(".qr");
// function onScanSuccess(decodedText, decodedResult) {
//       header.innerHTML = `Result: ${decodedText}`;
// }
// var html5QrcodeScanner = new Html5QrcodeScanner(
//   "qr-reader", { fps: 10, qrbox: 250 });
// html5QrcodeScanner.render(onScanSuccess);


// let test = document.querySelectorAll('img')

// for(var i = 0; i < test.length; i++){
//     if(test[i].getAttribute('alt') == 'Info icon');
//     test[i].style.display = "none";
// }


