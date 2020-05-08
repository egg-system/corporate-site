<template>
  <div class="link">
    <nuxt-link :to="to" class="button is-dark">
      <span class="link-message">{{ label }}</span>
      <span class="column-arrow" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>
