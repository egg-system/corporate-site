<template>
  <div>
    <div class="content page-content">
      <the-hero-title main-text="ITコスト シミュレーション" />
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
  },
  head() {
    return {
      title:
        'ITコストシミュレーション | コスト削減のため、参考となる情報を提供させていただきます。',
      meta: [
        {
          hid: 'trial-calculation-description',
          name: 'description',
          content:
            '株式会社エッグシステム ITコストシミュレーション。コスト削減のため、参考となる情報を提供させていただきます。'
        },
        {
          hid: 'trial-calculation-keywords',
          name: 'keywords',
          content:
            'コスト削減, ITコスト, シミュレーション, ITコストシミュレーション, シミュレーター, ITコストシミュレーター, '
        },
        {
          hid: 'trial-calculation-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'trial-calculation-og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'trial-calculation-og:title',
          property: 'og:title',
          content:
            'ITコストシミュレーション | コスト削減のため、参考となる情報を提供させていただきます。'
        },
        {
          hid: 'trial-calculation-og:description',
          property: 'og:description',
          content:
            '株式会社エッグシステム ITコストシミュレーション | コスト削減のため、参考となる情報を提供させていただきます。'
        },
        {
          hid: 'trial-calculation-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
