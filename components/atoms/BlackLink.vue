<template>
  <div class="link">
    <a v-if="external" :href="href" target="_blank" class="button is-dark">
      <span class="link-message">{{ label }}</span>
      <span class="column-arrow" />
    </a>
    <nuxt-link v-if="internal" :to="to" class="button is-dark">
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
    href: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  computed: {
    external() {
      return this.href != ''
    },
    internal() {
      return this.href == ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
