<template>
  <div class="align-center">
    <question question="情報をご入力ください。" />
    <question-note note="概算の数字をご入力ください。" />
  </div>
</template>

<script>
import Question from '~/components/atoms/Question.vue'
import QuestionNote from '~/components/atoms/QuestionNote.vue'

export default {
  name: 'SalesQuestion',
  components: {
    Question,
    QuestionNote
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
