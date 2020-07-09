<template>
  <div class="content page-content">
    <the-hero-title main-text="【無料で簡単に診断】ITコストシミュレーション" />
    <first-view />
    <first-lead />
    <experience />
    <simulation-example />
    <reference />
    <second-lead />
    <contact />
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
      title: 'ITコストシミュレーションLP',
      meta: [
        {
          hid: 'about-description',
          name: 'description',
          content:
            '株式会社エッグシステムでは、《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》の実現のために、ITシステムを活用します。'
        },
        {
          hid: 'about-keywords',
          name: 'keywords',
          content:
            '献身的な人のためにITシステムを活用する, 100人のコンサルティングエンジニア集団をつくる, 圧倒的当事者意識'
        },
        {
          hid: 'about-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'about-og:type', property: 'og:type', content: 'article' },
        {
          hid: 'about-og:title',
          property: 'og:title',
          content: 'わたしたちについて'
        },
        {
          hid: 'about-og:description',
          property: 'og:description',
          content:
            '株式会社エッグシステムでは、《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》の実現のために、ITシステムを活用します。'
        },
        {
          hid: 'about-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/about'
        },
        {
          hid: 'about-og:image',
          property: 'og:image',
          content: 'https://eggsystem.co.jp/ogp/top-about.JPG'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.blank {
}
@media screen and (max-width: 768px) {
}
</style>
