<template>
  <div class="text-center bold font-13">
    <span>{{ note }}</span>
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
.blod {
  font-weight: bold;
}
.font-13 {
  font-size: 13px;
}
</style>
