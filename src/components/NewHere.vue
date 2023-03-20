<template>
    <div class="panel left-panel">
        <div class="content">
            <h3>Novo aqui ?</h3>
            <p>
                Crie uma conta para ter acesso ao bicicletário
                da UniSales.
            </p>
            <button v-on:click="$event => { signUpBtnAnimation(); }" class="btn transparent" id="sign-up-btn">
                Criar conta
            </button>
        </div>
        <img src="@/assets/img/bike_ride-Blue.svg" class="image" alt="" />
    </div>
</template>

<script>
export default {
    name: "NewHere",
    methods: {
        signUpBtnAnimation() {
            const container = document.querySelector(".container");
            container.classList.add("sign-up-mode");
        }
    }
};
</script>

<style lang="scss" src="@/scss/style.scss"></style>