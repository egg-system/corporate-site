<template>
  <div class="link">
    <component
      :is="isExternalLink(link) ? 'a' : 'nuxt-link'"
      :href="isExternalLink(link) ? link : ''"
      :to="isExternalLink(link) ? '' : link"
      :target="isExternalLink(link) ? '_blank' : ''"
      class="button is-dark"
    >
      <span class="link-message">{{ label }}</span>
      <span class="column-arrow" />
    </component>
  </div>
</template>

<script>
export default {
  name: 'BlackLink',
  props: {
    label: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    isExternalLink(link) {
      return /^https?:\/\//.test(link)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
