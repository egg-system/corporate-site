<template>
  <div>
    <div class="text-center bold font-30">{{ question }}</div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: {
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
.font-30 {
  font-size: 30px;
}
</style>
