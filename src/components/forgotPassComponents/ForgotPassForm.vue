<template>
    <form class="sign-in-form">
        <h1 class="title-txt-login">BikeStop</h1>
        <h2 class="title">Esqueci minha Senha</h2>
        <div class="input-field">
            <i class="fas fa-envelope">
                <fa-icon :icon="['fas', 'envelope']"/>
            </i>
            <input type="text" v-model="emailAuth" id="emailAuth" placeholder="Email" />
        </div>
        <p class="social-text">
            Após validar o email, você recceberá email com uma senha provisória
            para você poder entrar na sua conta e alterar-lá.
        </p>
        <p class="social-text">
            <b>Verifique sua caixa de entrada, spam ou na lixeira.</b>
        </p>
        <input type="button" v-on:click="$event => { forgotPass(); }" id="btn-login" value="Validar Email" class="btn solid" />
    </form>
</template>

<script>
import AlertClass from "@/model/AlertClass";

export default {
    name: "ForgotPassForm",
    data() {
        return {
            emailAuth: ""
        }
    },
    methods: {
        forgotPass() {
            // console.log("forgotPass");
            AlertClass.sendEmail('Email enviado com sucesso.');

        }
    }
}

</script>