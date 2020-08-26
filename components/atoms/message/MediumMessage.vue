<template>
  <div class="medium-message">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'MediumMessage',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.medium-message {
  font-size: 1.5rem;
}
</style>
