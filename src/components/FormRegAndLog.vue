<template>
    <div class="container">
        <div class="forms-container">
            <div class="signin-signup">
                <SignInForm />
                <SignUpForm />
            </div>
        </div>

        <div class="panels-container">
            <NewHere />
            <AreMember />
        </div>
    </div>
</template>

<script>
import SignInForm from "@/components/SignInForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import NewHere from "@/components/NewHere.vue";
import AreMember from "@/components/AreMember.vue";

export default {
    name: "FormRegAndLog",
    components: {
        SignInForm,
        SignUpForm,
        NewHere,
        AreMember
    }
};
</script>

<style lang="scss" src="@/scss/style.scss"></style>