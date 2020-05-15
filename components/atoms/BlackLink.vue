<template>
  <div class="link">
    <a v-if="external" :href="url" target="_blank" class="button is-dark">
      <span class="link-message">{{ label }}</span>
      <span class="column-arrow" />
    </a>
    <nuxt-link v-else :to="url" class="button is-dark">
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
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    external() {
      return this.url.match(/http*/) != null
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
