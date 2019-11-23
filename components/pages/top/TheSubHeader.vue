<template>
  <p class="sub-header">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-header {
  display: inline-block;
  border-bottom: solid 3px #87cefa;
}
</style>
