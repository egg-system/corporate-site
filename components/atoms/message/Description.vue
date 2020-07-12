<template>
  <div class="description">
    <span v-html="message" />
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.description {
}
</style>
