<template>
  <div class="center">
    <question class="margin-2" question="会社情報を入力してください" />
    <company-input-form />
    <nuxt-link to="/service/it-cost/trial-calculation">
      <landscape-button label="結果を見る"/>
    </nuxt-link>
  </div>
</template>

<script>
import Question from '~/components/atoms/Question.vue'
import CompanyInputForm from '~/components/organisms/CompanyInputForm.vue'
import LandscapeButton from '~/components/atoms/LandscapeButton.vue'

export default {
  name: 'CompanyInfoSubmitSection',
  components: {
    Question,
    CompanyInputForm,
    LandscapeButton
  }
}
</script>
<style lang="scss" scoped>
.margin-2 {
  margin: 2rem;
}
</style>
