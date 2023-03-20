<template>
    <form class="sign-in-form">
        <h1 class="title-txt-login">BikeStop</h1>
        <h2 class="title">Entrar</h2>
        <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" id="userRALogin" placeholder="RA" />
        </div>
        <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="userPassLogin" placeholder="Senha" />
        </div>
        <div class="forgot-pass">
            <router-link to="/forgot-pass" class="forgot-pass">Esqueceu a senha ?</router-link>
        </div>
        <input type="button" v-on:click="$event => { login(); }" id="btn-login" value="Entrar" class="btn solid" />

    </form>
</template>


<script>

import AlertClass from '@/assets/classes/AlertClass';

export default {
    name: "SignInForm",
    data() {
        return {
            userRALogin: "",
            userPassLogin: ""
        }
    },
    methods: {
        login() {
            AlertClass.success("Login realizado com sucesso!");
        }
    }
}
</script>

<style lang="scss" src="@/scss/style.scss"></style>