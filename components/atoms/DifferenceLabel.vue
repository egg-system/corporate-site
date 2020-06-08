<template>
  <div>
    <div class="margin-1 center">
      {{ industry }}の平均値と比べて、システムコストが年間あたり
    </div>
  </div>
</template>

<script>
export default {
  name: 'DifferenceLabel',
  computed: {
    industry: function() {
      return this.$store.state.simulator.simulationInfo.industry
    }
  }
}
</script>
<style lang="scss" scoped>
.center {
  justify-content: center;
  align-items: center;
  text-align: center;
}
.margin-1 {
  margin: 1rem;
}
</style>
