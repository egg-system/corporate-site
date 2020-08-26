<template>
  <div class="margin-1 center">
    <span class=" center" v-html="message" />
  </div>
</template>

<script>
export default {
  name: 'RecommendMessage',
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
