<template>
  <div class="center">
    <question class="margin-2" question="情報を入力してください" />
    <error-message v-if="error" message="未入力の項目があります。"/>
    <sales-input-form />
    <landscape-button label="次へ" @next="next"/>
  </div>
</template>

<script>
import ErrorMessage from '~/components/atoms/ErrorMessage.vue'
import Question from '~/components/atoms/Question.vue'
import SalesInputForm from '~/components/organisms/SalesInputForm.vue'
import LandscapeButton from '~/components/atoms/LandscapeButton.vue'

export default {
  name: 'SalesInfoSubmitSection',
  components: {
    ErrorMessage,
    Question,
    SalesInputForm,
    LandscapeButton
  },
  data: () => ({
    errorFlg: false
  }),
  computed: {
    error: function() {
      return this.errorFlg
    }
  },
  methods: {
    next() {
      if (
        this.$store.state.simulator.simulationInfo.sales == '' ||
        this.$store.state.simulator.simulationInfo.employees == '' ||
        this.$store.state.simulator.simulationInfo.cost == ''
      ) {
        this.errorFlg = true
      } else {
        this.$store.dispatch('simulator/toCompany')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.margin-2 {
  margin: 2rem;
}
</style>
