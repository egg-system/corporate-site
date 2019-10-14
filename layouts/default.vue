<template>
  <v-app>
    <app-header />
    <nuxt/>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from '~/components/layouts/Header.vue'
import AppFooter from '~/components/layouts/Footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
</style>
