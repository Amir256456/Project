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