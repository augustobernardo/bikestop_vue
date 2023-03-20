<template>
    <div class="container">
        <div class="forms-container">
            <div class="signin-signup">
                <ForgotPassForm />

            </div>
        </div>
        <div class="panels-container">
            <ForgotPassPanels />
        </div>
    </div>
</template>

<script>
import ForgotPassForm from '@/components/ForgotPassForm.vue';
import ForgotPassPanels from '@/components/ForgotPassPanels.vue';

export default {
    name: "ForgotPassView",
    components: {
        ForgotPassForm,
        ForgotPassPanels
    }
};

</script>


<style lang="scss" src="@/scss/style.scss"></style>