<template>
  <div class="black-link">
    <component
      :is="isExternalLink(link) ? 'a' : 'nuxt-link'"
      :href="isExternalLink(link) ? link : ''"
      :to="isExternalLink(link) ? '' : link"
      :target="isExternalLink(link) ? '_blank' : ''"
      class="button is-dark"
    >
      <span class="black-link-message">{{ label }}</span>
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
.black-link {
  margin: auto;
  width: 100%;
  a.button {
    font-size: 14px;
    height: 49px;
    width: 100%;
    .black-link-message {
      margin: auto;
      margin-left: 0;
    }
  }
}
</style>
