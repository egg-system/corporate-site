<template>
  <div>
    <div class="news page-content">
      <the-hero-title main-text="ニュース" />
      <the-news-list :news="listData"/>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheNewsList from '~/components/pages/common/TheNewsList.vue'
import { fetchCmsListDataNews } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheNewsList
  },
  head() {
    return {
      title: 'ニュース',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '株式会社エッグシステム ニュース'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'ニュース, eggsystem, 株式会社エッグシステム'
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
          content: 'ニュース'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '株式会社エッグシステム ニュース'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/news'
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
    return fetchCmsListDataNews(23)
  }
}
</script>

<style lang="scss" scoped>
.news {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
