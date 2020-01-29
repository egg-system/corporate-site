<template>
  <div>
    <the-hero-title main-text="お問い合わせ" />
    <div class="content page-content">
      <the-form />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheForm from '~/components/pages/contact/TheForm.vue'

export default {
  components: {
    TheHeroTitle,
    TheForm
  }
}
</script>

<style lang="scss" scoped>
</style>
