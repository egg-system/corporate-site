<template>
  <div class="font-13">
    <span v-html="note" />
  </div>
</template>

<script>
export default {
  name: 'CostNote',
  props: {
    note: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.text-center {
  text-align: center;
}
.font-13 {
  font-size: 13px;
}
</style>
