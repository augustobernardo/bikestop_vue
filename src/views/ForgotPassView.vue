<template>
    <div class="container">
        <div class="forms-container">
            <div class="signin-signup">
                <ForgotPassForm />
            </div>
        </div>
        <div class="panels-container">
            <ForgotPassPanel />
        </div>
    </div>
</template>

<script>
import ForgotPassForm from '@/components/forgotPassComponents/ForgotPassForm.vue';
import ForgotPassPanel from '@/components/forgotPassComponents/ForgotPassPanel.vue';

export default {
    name: "ForgotPassView",
    components: {
        ForgotPassForm,
        ForgotPassPanel
    }
};

</script>


<style lang="scss" src="@/scss/style.scss"></style>