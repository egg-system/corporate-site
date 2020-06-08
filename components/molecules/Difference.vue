<template>
  <div>
    <difference-label />
    <difference-value :value="value"/>
    <difference-message :message="message" />
  </div>
</template>

<script>
import DifferenceLabel from '~/components/atoms/DifferenceLabel.vue'
import DifferenceValue from '~/components/atoms/DifferenceValue.vue'
import DifferenceMessage from '~/components/atoms/DifferenceMessage.vue'

export default {
  name: 'Difference',
  components: {
    DifferenceLabel,
    DifferenceValue,
    DifferenceMessage
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
