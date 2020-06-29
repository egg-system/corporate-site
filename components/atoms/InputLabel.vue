<template>
  <div>
    <div>{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'InputLabel',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
