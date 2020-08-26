<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'body-class'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
.body-class {
  background-color: $lightBabyBlue;
}
</style>
