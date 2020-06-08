<template>
  <div>
    <div class="text-center bold question">{{ question }}</div>
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
.question {
  font-size: 30px;
}
</style>
