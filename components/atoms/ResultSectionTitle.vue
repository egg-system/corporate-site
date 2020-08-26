<template>
  <div>
    <h3>・{{ label }}のシミュレーション結果</h3>
  </div>
</template>

<script>
export default {
  name: 'ResultSectionTitle',
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
