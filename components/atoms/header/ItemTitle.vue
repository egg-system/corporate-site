<template>
  <div class="item-title">
    <span v-html="message" />
  </div>
</template>

<script>
export default {
  name: 'ItemTitle',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.item-title {
  font-size: 1.25rem;
}
</style>
