<template>
  <div>
    <div class="page-content">
      <the-hero-title main-text="顧客インタビュー・事例紹介" />
      <the-case-list :cases="listData"/>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheCaseList from '~/components/pages/common/TheCaseList.vue'
import { fetchCmsListDataCase } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheCaseList
  },
  head() {
    return {
      title: '顧客インタビュー・事例紹介',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '株式会社エッグシステム 顧客インタビュー・事例紹介'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '顧客インタビュー・事例紹介, eggsystem, 株式会社エッグシステム'
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '顧客インタビュー・事例紹介'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '株式会社エッグシステム 顧客インタビュー・事例紹介'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/cases'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://eggsystem.co.jp/logo.png'
        }
      ]
    }
  },

  asyncData() {
    return fetchCmsListDataCase(23)
  }
}
</script>
