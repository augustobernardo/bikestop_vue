<template>
    <form class="sign-in-form">
        <h1 class="title-txt-login">BikeStop</h1>
        <h2 class="title">Entrar</h2>
        <div class="input-field">
            <i class="fas fa-user">
                <fa-icon :icon="['fas', 'user']"/>
            </i>
            <!-- @keypress="$event => { signIn(); }" -->
            <input v-model="userRa" type="text" id="userRALogin" placeholder="RA" />
        </div>
        <div class="input-field">
            <i class="fas fa-lock" >
                <fa-icon :icon="['fas', 'key']"/>
            </i>
            
            <input v-model="userPass" type="password" id="userPassLogin" placeholder="Senha" />
        </div>
        <div class="forgot-pass">
            <router-link to="/forgot-pass" class="forgot-pass">Esqueceu a senha ?</router-link>
        </div>
        <input type="button" v-on:click="$event => { signIn(); }" id="btn-login" value="Entrar" class="btn solid" />

    </form>
</template>

<script>

import AlertClass from "@/model/AlertClass";
import FormController from "@/model/FormHandler";

export default {
    name: "SignInForm",
    data() {
        return {
            userRa: "",
            userPass: "",
            mode: "signIn"
        }
    },
    methods: {
        signIn() {
            let formValues = {
                userRa: this.userRa,
                userPass: this.userPass
            };
            
            FormController.setFormValues(formValues);
            FormController.setMode(this.mode);

            if(FormController.checkFields()) {
                AlertClass.success("Login realizado com sucesso!");
            }
        }
    }
}
</script>

<style lang="scss" src="@/scss/style.scss"></style>