<template>
  <div class="bold font-20">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'PageDescription',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.font-20 {
  font-size: 20 px;
}
</style>
