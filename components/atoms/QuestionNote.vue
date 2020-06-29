<template>
  <div class="text-center bold font-20">
    <span>{{ note }}</span>
  </div>
</template>

<script>
export default {
  name: 'QuestionNote',
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
.font-20 {
  font-size: 20px;
}
</style>
