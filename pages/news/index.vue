<template>
  <div>
    <the-hero-title main-text="ニュース" />
    <div class="news page-content">
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
          hid: 'news-description',
          name: 'description',
          content: '株式会社エッグシステム ニュース'
        },
        {
          hid: 'news-keywords',
          name: 'keywords',
          content: 'ニュース, eggsystem, 株式会社エッグシステム'
        },
        {
          hid: 'news-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'news-og:type', property: 'og:type', content: 'article' },
        {
          hid: 'news-og:title',
          property: 'og:title',
          content: 'ニュース'
        },
        {
          hid: 'news-og:description',
          property: 'og:description',
          content: '株式会社エッグシステム ニュース'
        },
        {
          hid: 'news-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/news'
        },
        {
          hid: 'news-og:imgae',
          property: 'og:imgae',
          content: 'https://eggsystem.co.jp/logo.png'
        }
      ]
    }
  },

  asyncData() {
    return fetchCmsListDataNews()
  }
}
</script>

<style lang="scss" scoped>
.news {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
