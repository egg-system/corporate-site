<template>
  <div class="content page-content">
    <the-hero-title main-text="【無料で簡単に診断】ITコストシミュレーション" />
    <first-view class="padding-0" />
    <first-lead class="padding-top-0" />
    <experience class="lightgray-underline" />
    <simulation-example class="lightgray-underline" />
    <reference class="lightgray-underline" />
    <second-lead class="lightgray-underline" />
    <contact class="padding-bottom-8rem" />
  </div>
</template>

<script>
import TheHeroTitle from '~/components/atoms/header/TheHeroTitle.vue'
import FirstView from '~/components/templates/service/it-cost-lp/FirstView.vue'
import FirstLead from '~/components/templates/service/it-cost-lp/FirstLead.vue'
import Experience from '~/components/templates/service/it-cost-lp/Experience.vue'
import SimulationExample from '~/components/templates/service/it-cost-lp/SimulationExample.vue'
import Reference from '~/components/templates/service/it-cost-lp/Reference.vue'
import SecondLead from '~/components/templates/service/it-cost-lp/SecondLead.vue'
import Contact from '~/components/templates/service/it-cost-lp/Contact.vue'

export default {
  components: {
    TheHeroTitle,
    FirstView,
    FirstLead,
    Experience,
    SimulationExample,
    Reference,
    SecondLead,
    Contact
  },
  head() {
    return {
      title: 'ITコストシミュレーション',
      meta: [
        {
          hid: 'it-cost-lp-description',
          name: 'description',
          content:
            'ITコストが妥当かどうか5分で簡単に診断できる「ITコストシミュレーション」を無料でご利用頂けます。貴社の業務・売上規模・従業員数・ITコストを入力することで経済産業省が公表しているデータに基づき同業他社と比較してITコストが妥当かどうか判定します。'
        },
        {
          hid: 'it-cost-lp-keywords',
          name: 'keywords',
          content:
            'ITコスト, シミュレーション, ITコストシミュレーション, シミュレーター, ITコストシミュレーター, '
        },
        {
          hid: 'it-cost-lp-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'it-cost-lp-og:type', property: 'og:type', content: 'article' },
        {
          hid: 'it-cost-lp-og:title',
          property: 'og:title',
          content: 'ITコストシミュレーション'
        },
        {
          hid: 'it-cost-lp-og:description',
          property: 'og:description',
          content:
            'ITコストが妥当かどうか5分で簡単に診断できる「ITコストシミュレーション」を無料でご利用頂けます。'
        },
        {
          hid: 'it-cost-lp-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/'
        },
        {
          hid: 'it-cost-lp-og:image',
          property: 'og:image',
          content: 'https://eggsystem.co.jp/ogp/top_pc.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.blank {
}
.padding-0 {
  padding: 0 !important;
}
.padding-top-0 {
  padding-top: 0 !important;
}
.padding-bottom-8rem {
  padding-bottom: 8rem !important;
}
@media screen and (max-width: 769px) {
}
</style>
