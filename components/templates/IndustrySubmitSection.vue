<template>
  <div class="center">
    <question class="margin-2" question="業種を選択してください" />
    <select-box class="width-8"/>
  </div>
</template>

<script>
import Question from '~/components/atoms/Question.vue'
import SelectBox from '~/components/atoms/SelectBox.vue'

export default {
  name: 'IndustrySubmitSection',
  components: {
    Question,
    SelectBox
  }
}
</script>
<style lang="scss" scoped>
.center {
  justify-content: center;
  align-items: center;
}
.margin-2 {
  margin: 2rem;
}
.width-8 {
  width: 90%;
  margin: auto;
}
</style>
