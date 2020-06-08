<template>
  <div>
    <recommend-message :message="message" />
    <contact-button />
  </div>
</template>

<script>
import RecommendMessage from '~/components/atoms/RecommendMessage.vue'
import ContactButton from '~/components/atoms/ContactButton.vue'

export default {
  name: 'Recommend',
  components: {
    RecommendMessage,
    ContactButton
  },
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
