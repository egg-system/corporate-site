<template>
  <div>
    <div class="cp_ipselect cp_sl04">
      <select v-model="selected" @change="select(selected)">
        <option disabled value="">選択して下さい</option>
        <option v-for="name in industryList" :key="name" :value="name">
          {{ name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import industryList from '~/assets/service/simulator/industryList.js'

export default {
  name: 'SelectBox',
  data: () => ({
    selected: 'seizou'
  }),
  computed: {
    industryList: function() {
      return 'hiseizou' == this.$store.state.simulator.simulationInfo.genre
        ? industryList.hiseizou
        : industryList.seizou
    }
  },
  methods: {
    select(value) {
      this.$store.dispatch('simulator/commitIndustry', value)
      this.$store.dispatch('simulator/toSales')
      this.$store.dispatch('simulator/commitSalesRequiredError', false)
      this.$store.dispatch('simulator/commitEmployeesRequiredError', false)
      this.$store.dispatch('simulator/commitCostRequiredError', false)
      this.$store.dispatch('simulator/commitSalesValidationError', false)
      this.$store.dispatch('simulator/commitEmployeesValidationError', false)
      this.$store.dispatch('simulator/commitCostValidationError', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.cp_ipselect {
  overflow: hidden;
  width: 90%;
  margin: 2em auto;
  text-align: center;
}
.cp_ipselect select {
  width: 100%;
  padding-right: 1em;
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  background: transparent;
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
  height: 50px;
  font-size: 24px;
}
.cp_ipselect select::-ms-expand {
  display: none;
}
.cp_ipselect.cp_sl04 {
  position: relative;
  border-radius: 2px;
  border: 6px solid $black;
  border-radius: 50px;
  background: #ffffff;
  margin-top: 50px;
  width: 80%;
}
.cp_ipselect.cp_sl04::before {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 0;
  height: 0;
  padding: 0;
  content: '';
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid $black;
  pointer-events: none;
}
.cp_ipselect.cp_sl04 select {
  padding: 8px 38px 8px 8px;
}
</style>
