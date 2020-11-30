<template>
  <div>
    <app-header />
    <nuxt/>
    <app-conversion-zone />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/layouts/Header.vue'
import AppFooter from '~/components/layouts/Footer.vue'
import AppConversionZone from '~/components/layouts/ConversionZone.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppConversionZone
  },
  middleware: ['conversion-zone']
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
</style>
