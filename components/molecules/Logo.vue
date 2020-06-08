<template>
  <div class="flex align-center">
    <logo-image />
    <logo-title />
  </div>
</template>

<script>
import LogoImage from '~/components/atoms/LogoImage.vue'
import LogoTitle from '~/components/atoms/LogoTitle.vue'

export default {
  name: 'Logo',
  components: {
    LogoImage,
    LogoTitle
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}
.align-center {
  align-items: center;
}
</style>
