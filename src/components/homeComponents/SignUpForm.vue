<template>
    <form class="sign-up-form">
        <h1 class="title-txt-register">BikeStop</h1>
        <h2 class="title">Criar conta</h2>
        <div class="input-field">
            <i class="fas fa-user">
                <fa-icon :icon="['fas', 'user']"/>
            </i>
            <input type="text" v-model="userRa" id="userRAReg" placeholder="RA" />
        </div>
        <div class="input-field">
            <i class="fas fa-envelope">
                <fa-icon :icon="['fas', 'envelope']"/>
            </i>
            <input type="email" v-model="userEmail" id="userEmailReg" placeholder="Email" />
        </div>
        <div class="input-field">
            <i class="fas fa-lock">
                <fa-icon :icon="['fas', 'lock']"/>
            </i>
            <input type="password" v-model="userPass" id="userPassReg" placeholder="Senha" />
        </div>
        <input type="button" v-on:click="$event => { signUp(); }" id="btn-register" class="btn" value="Criar" />

    </form>
</template>

<script>
import AlertClass from "@/model/AlertClass";
import FormController from "@/model/FormHandler";

export default {
    name: "SignUpForm",
    data() {
        return {
            userRa: "",
            userEmail: "",
            userPass: "",
            mode: "signUp"
        }
    },
    methods: {
        signUp() {
            let formValues = {
                userRa: this.userRa,
                userEmail: this.userEmail,
                userPass: this.userPass
            };
            
            FormController.setFormValues(formValues);
            FormController.setMode(this.mode);

            if(FormController.checkFields()) {
                AlertClass.success("Cadastro realizado com sucesso!");
            }
        }
    }
}
</script>

<style lang="scss" src="@/scss/style.scss"></style>
