<template>
  <div>
    <the-system-consulting class="lightgray-underline" />
    <the-special-consulting class="lightgray-underline" />
  </div>
</template>

<script>
import TheSystemConsulting from '~/components/pages/service/consulting/TheSystemConsulting.vue'
import TheSpecialConsulting from '~/components/pages/service/consulting/TheSpecialConsulting.vue'

export default {
  components: {
    TheSystemConsulting,
    TheSpecialConsulting
  }
}
</script>

<style lang="scss" scoped>
</style>
