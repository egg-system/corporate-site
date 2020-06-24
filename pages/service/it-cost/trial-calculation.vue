<template>
  <div>
    <div class="page-content content">
      <logo />
      <transition name="fade">
        <industry-genre-submit-section v-if="genre" />
      </transition>
      <transition name="fade">
        <industry-submit-section v-if="industry" />
      </transition>
      <transition name="fade">
        <sales-info-submit-section v-if="sales" />
      </transition>
      <transition name="fade">
        <div v-if="result">
          <sales-result-section />
          <employees-result-section />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/molecules/Logo.vue'
import IndustryGenreSubmitSection from '~/components/templates/IndustryGenreSubmitSection.vue'
import IndustrySubmitSection from '~/components/templates/IndustrySubmitSection.vue'
import SalesInfoSubmitSection from '~/components/templates/SalesInfoSubmitSection.vue'
import SalesResultSection from '~/components/templates/SalesResultSection.vue'
import EmployeesResultSection from '~/components/templates/EmployeesResultSection.vue'

export default {
  layout: 'SimulatorTemplate',
  components: {
    Logo,
    IndustryGenreSubmitSection,
    IndustrySubmitSection,
    IndustryGenreSubmitSection,
    SalesInfoSubmitSection,
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
    result: function() {
      return this.$store.state.simulator.activeFlg.result
    }
  },
  transition: {
    name: 'fade'
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
