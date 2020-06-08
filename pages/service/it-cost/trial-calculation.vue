<template>
  <div>
    <div class="page-content content">
      <logo />
      <sales-result-section />
      <employees-result-section />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/molecules/Logo.vue'
import SalesResultSection from '~/components/templates/SalesResultSection.vue'
import EmployeesResultSection from '~/components/templates/EmployeesResultSection.vue'

export default {
  layout: 'SimulatorTemplate',
  components: {
    Logo,
    SalesResultSection,
    EmployeesResultSection
  },
  computed: {
    genre: function() {
      return this.$store.state.simulator.activeFlg.genre
    },
    industry: function() {
      return this.$store.state.simulator.activeFlg.industry
    },
    sales: function() {
      return this.$store.state.simulator.activeFlg.sales
    },
    company: function() {
      return this.$store.state.simulator.activeFlg.company
    },
    genreVal: function() {
      return this.$store.state.simulator.simulationInfo.genre
    },
    industryVal: function() {
      return this.$store.state.simulator.simulationInfo.industry
    },
    salesVal: function() {
      return this.$store.state.simulator.simulationInfo.sales
    },
    employeesVal: function() {
      return this.$store.state.simulator.simulationInfo.employees
    },
    costVal: function() {
      return this.$store.state.simulator.simulationInfo.cost
    },
    companyNameVal: function() {
      return this.$store.state.simulator.companyInfo.companyName
    },
    UserNameVal: function() {
      return this.$store.state.simulator.companyInfo.userName
    },
    mailAddressVal: function() {
      return this.$store.state.simulator.companyInfo.mailAddress
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
