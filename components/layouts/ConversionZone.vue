<template>
  <component v-if="shouldShow" :is="convertionComponent" />
</template>

<script>
import { mapState } from 'vuex'
import DefaultConversionComponent from '~/components/atoms/conversions/DefaultConversionComponent.vue'

export default {
  components: {
    DefaultConversionComponent
  },
  computed: {
    ...mapState('conversion', ['shouldShow', 'convertionComponent'])
  }
}
</script>
