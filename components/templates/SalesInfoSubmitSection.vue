<template>
  <div class="center">
    <sales-question class="margin-2" />
    <sales-input-form />
    <landscape-button label="結果を見る" @next="next" />
    <previous-button class="margin-top-5 margin-left-10 margin-bottom-10" @previous="previous"/>
  </div>
</template>

<script>
import PreviousButton from '~/components/atoms/PreviousButton.vue'
import ErrorMessage from '~/components/atoms/ErrorMessage.vue'
import SalesQuestion from '~/components/molecules/SalesQuestion.vue'
import SalesInputForm from '~/components/organisms/SalesInputForm.vue'
import LandscapeButton from '~/components/atoms/LandscapeButton.vue'

export default {
  name: 'SalesInfoSubmitSection',
  components: {
    PreviousButton,
    ErrorMessage,
    SalesQuestion,
    SalesInputForm,
    LandscapeButton
  },
  methods: {
    next() {
      if (this.required() | this.validation()) return
      else this.$store.dispatch('simulator/toResult')
      ga('send', 'event', 'click', 'ITコスト結果表示')
    },
    previous() {
      this.$store.dispatch('simulator/backIndustry')
    },
    required() {
      var salesFlg = this.$store.state.simulator.simulationInfo.sales == 0
      var employeesFlg =
        this.$store.state.simulator.simulationInfo.employees == 0
      var costFlg = this.$store.state.simulator.simulationInfo.cost == 0
      this.$store.dispatch('simulator/commitSalesRequiredError', salesFlg)
      this.$store.dispatch(
        'simulator/commitEmployeesRequiredError',
        employeesFlg
      )
      this.$store.dispatch('simulator/commitCostRequiredError', costFlg)
      if (salesFlg || employeesFlg || costFlg) return true
      else return false
    },
    validation() {
      if (
        this.$store.state.simulator.requiredErrorFlg.sales ||
        this.$store.state.simulator.requiredErrorFlg.employees ||
        this.$store.state.simulator.requiredErrorFlg.cost
      )
        return true
      else return false
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
.margin-bottom-10 {
  margin-bottom: 10%;
}
</style>
