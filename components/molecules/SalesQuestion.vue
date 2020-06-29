<template>
  <div class="align-center">
    <question question="概算の数字をご入力ください。" />
  </div>
</template>

<script>
import Question from '~/components/atoms/Question.vue'

export default {
  name: 'SalesQuestion',
  components: {
    Question
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}
.align-center {
  align-items: center;
}
</style>
