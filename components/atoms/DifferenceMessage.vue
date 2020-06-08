<template>
  <div>
    <div class="margin-1 center">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'DifferenceMessage',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.center {
  justify-content: center;
  align-items: center;
  text-align: center;
}
.margin-1 {
  margin: 1rem;
}
</style>
