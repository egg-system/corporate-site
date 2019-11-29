<template>
  <div class="main">
    <h2 :class="[isLine ? 'is-line' : '']" class="sub-header is-3">
      {{ text }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    isLine: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
}
.sub-header {
  margin-top: 30px;
  text-align: center;
}
.is-line {
  display: inline-block;
  border-bottom: solid 3px $lightBlue;
  margin-bottom: 20px;
  line-height: 1.5;
}
</style>
