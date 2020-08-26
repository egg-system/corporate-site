<template>
  <div>
    <div>{{ label }}「{{ range }}」の同業他社との比較</div>
  </div>
</template>

<script>
export default {
  name: 'ResultSectionDescription',
  props: {
    label: {
      type: String,
      default: ''
    },
    range: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
