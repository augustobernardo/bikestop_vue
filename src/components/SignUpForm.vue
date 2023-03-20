<template>
    <form class="sign-up-form">
        <h1 class="title-txt-register">BikeStop</h1>
        <h2 class="title">Criar conta</h2>
        <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" id="userRAReg" placeholder="RA" />
        </div>
        <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" id="userEmailReg" placeholder="Email" />
        </div>
        <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="userPassReg" placeholder="Senha" />
        </div>
        <input type="button" v-on:click="$event => { register(); }" id="btn-register" class="btn" value="Criar" />

    </form>
</template>

<script>

export default {
    name: "SignUpForm",
    data() {
        return {
            userRAReg: "",
            userEmailReg: "",
            userPassReg: ""
        }
    },
    methods: {
        register() {
            console.log("register");
        }
    }
}
</script>

<style lang="scss" src="@/scss/style.scss"></style>
