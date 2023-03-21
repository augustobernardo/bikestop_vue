<template>
    <div class="panel left-panel">
        <div class="content">
            <h3>Lembrou da sua Senha ?</h3>
            <p>
                Volte para a tela de Login para entrar ou criar uma
                conta.
            </p>
            <button class="btn transparent" v-on:click="$event => { backToLogin(); }" id="sign-up-btn">
                Voltar
            </button>
        </div>
        <img src="@/assets/svg/forgotPass.svg" class="image" alt="" />
    </div>
</template>

<script> 

export default {
    name: "AuthView",
    methods: {
        backToLogin() {
            this.$router.push({ name: 'home' });
        }
    }
};

</script>

<style lang="scss" src="@/scss/style.scss"></style>