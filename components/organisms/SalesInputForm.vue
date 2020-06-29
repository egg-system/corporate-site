<template>
  <div class="center form">
    <sales-input />
    <employees-input />
    <cost-input />
  </div>
</template>

<script>
import SalesInput from '~/components/molecules/InputItem/SalesInput.vue'
import EmployeesInput from '~/components/molecules/InputItem/EmployeesInput.vue'
import CostInput from '~/components/molecules/InputItem/CostInput.vue'

export default {
  name: 'SalesInputForm',
  components: {
    SalesInput,
    EmployeesInput,
    CostInput
  }
}
</script>
<style lang="scss" scoped>
.center {
  justify-content: center;
  align-items: center;
  margin: auto;
}
.form {
  width: 80%;
}
</style>
