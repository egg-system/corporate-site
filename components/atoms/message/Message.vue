<template>
  <div class="message">
    <span v-html="message" />
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.message {
  font-size: 1.25rem;
  background-color: $white;
}
</style>
