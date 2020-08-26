<template>
  <div class="large-message">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'LargeMessage',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.large-message {
  font-size: 2.3rem;
}
</style>
