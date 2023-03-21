<template>
    <div class="panel right-panel">
        <div class="content">
            <h3>Já possui uma conta ?</h3>
            <p>
                Entre com ela para ter acesso ao bicicletário
                da UniSales.
            </p>
            <button v-on:click="$event => { signInBtnAnimation(); }" class="btn transparent" id="sign-in-btn">
                Entrar
            </button>
        </div>
        <!-- #7D93FE -->
        <img src="@/assets/svg/signUp.svg" class="image" alt="" />
    </div>
</template>

<script>
export default {
    name: "AreMember",
    methods: {
        signInBtnAnimation() {
            const container = document.querySelector(".container");
            container.classList.remove("sign-up-mode");
        }
    }
};
</script>

<style lang="scss" src="@/scss/style.scss"></style>