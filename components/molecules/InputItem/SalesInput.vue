<template>
  <div class="flex center columns">
    <input-label class="column is-4" label="売上高" />
    <input-box class="column" label="例）10000000000" @input="input" />円
  </div>
</template>

<script>
import InputLabel from '~/components/atoms/InputLabel.vue'
import InputBox from '~/components/atoms/InputBox.vue'

export default {
  name: 'CompanyNameInput',
  components: {
    InputLabel,
    InputBox
  },
  methods: {
    input(value) {
      this.$store.dispatch('simulator/commitSales', value)
    }
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}
.center {
  justify-content: center;
  align-items: center;
}
</style>
