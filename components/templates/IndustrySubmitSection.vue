<template>
  <div class="center">
    <question class="margin-2" question="業種を選択してください。" />
    <select-box class="width-8 margin-3"/>
    <previous-button class="margin-top-5 margin-left-10" @previous="previous"/>
  </div>
</template>

<script>
import PreviousButton from '~/components/atoms/PreviousButton.vue'
import Question from '~/components/atoms/Question.vue'
import SelectBox from '~/components/atoms/SelectBox.vue'

export default {
  name: 'IndustrySubmitSection',
  components: {
    PreviousButton,
    Question,
    SelectBox
  },
  methods: {
    previous() {
      this.$store.dispatch('simulator/backGenre')
    }
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
.margin-3 {
  margin: 3rem;
}
.width-8 {
  width: 90%;
  margin: auto;
}
.margin-top-5 {
  margin-top: 5rem;
}
.margin-left-10 {
  margin-left: 10%;
}
</style>
