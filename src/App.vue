<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
/* import HomeView from './views/HomeView.vue';
import ForgotPassView from './views/ForgotPassView.vue';
 */
export default {
  name: 'App'
};
</script>

<style lang="scss" src="@/scss/style.scss"></style>