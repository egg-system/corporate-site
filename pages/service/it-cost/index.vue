<template>
  <div>
    <div class="content page-content">
      <the-hero-title main-text="コストシミュレーション" />
      <the-form />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import PageDescription from '~/components/atoms/PageDescription.vue'
import TheForm from '~/components/organisms/SimulatorForm.vue'

export default {
  components: {
    TheHeroTitle,
    PageDescription,
    TheForm
  }
}
</script>

<style lang="scss" scoped>
</style>
