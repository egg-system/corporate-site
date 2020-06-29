<template>
  <div class="center">
    <question class="margin-2" question="会社情報を入力してください" />
    <company-input-form />
    <nuxt-link to="/service/it-cost/trial-calculation">
      <landscape-button label="結果を見る"/>
    </nuxt-link>
    <previous-button class="margin-top-5 margin-left-10" @previous="previous"/>
  </div>
</template>

<script>
import PreviousButton from '~/components/atoms/PreviousButton.vue'
import Question from '~/components/atoms/Question.vue'
import CompanyInputForm from '~/components/organisms/CompanyInputForm.vue'
import LandscapeButton from '~/components/atoms/LandscapeButton.vue'

export default {
  name: 'CompanyInfoSubmitSection',
  components: {
    PreviousButton,
    Question,
    CompanyInputForm,
    LandscapeButton
  },
  methods: {
    previous() {
      this.$store.dispatch('simulator/backSales')
    }
  }
}
</script>
<style lang="scss" scoped>
.margin-2 {
  margin: 2rem;
}
.margin-top-5 {
  margin-top: 5rem;
}
.margin-left-10 {
  margin-left: 10%;
}
</style>
