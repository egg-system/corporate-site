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
        <company-info-submit-section v-if="company" />
      </transition>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/molecules/Logo.vue'
import IndustryGenreSubmitSection from '~/components/templates/IndustryGenreSubmitSection.vue'
import IndustrySubmitSection from '~/components/templates/IndustrySubmitSection.vue'
import SalesInfoSubmitSection from '~/components/templates/SalesInfoSubmitSection.vue'
import CompanyInfoSubmitSection from '~/components/templates/CompanyInfoSubmitSection.vue'

export default {
  layout: 'SimulatorTemplate',
  components: {
    Logo,
    IndustryGenreSubmitSection,
    IndustrySubmitSection,
    IndustryGenreSubmitSection,
    CompanyInfoSubmitSection,
    SalesInfoSubmitSection
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
    }
  },
  created: function() {
    this.$store.dispatch('simulator/toGenre')
  },
  mounted: function() {
    this.$store.dispatch('simulator/toGenre')
  },
  methods: {
    toGenre() {
      this.$store.dispatch('simulator/toGenre')
    },
    toIndustry() {
      this.$store.dispatch('simulator/toIndustry')
    },
    toSales() {
      this.$store.dispatch('simulator/toSales')
    },
    toCompany() {
      this.$store.dispatch('simulator/toCompany')
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
