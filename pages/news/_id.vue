<template>
  <div>
    <the-hero-title :main-text="data.title" />
    <div class="news page-content">
      <div class="sub">
        <span class="date">{{ data.display_at | dayjs }}</span>
        <span class="tag is-primary">
          {{ data.label.label }}
        </span>
      </div>
      <div class="main">
        <div v-html="data.content" />
      </div>
      <p class="back">
        <nuxt-link to="/news">
          <i class="fas fa-caret-square-left"/>一覧に戻る
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import { fetchCmsDataNews } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle
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
        }
      ]
    }
  },

  asyncData({ params }) {
    return fetchCmsDataNews(params.id)
  }
}
</script>

<style lang="scss" scoped>
.news {
  margin-top: 5%;
  margin-bottom: 5%;
}
.date {
  font-size: 20px;
}
.tag {
  font-size: 14px;
}
.date {
  margin-right: 20px;
}
.main {
  margin-top: 20px;
  font-size: 24px;
}
.back {
  margin-top: 30px;
}
.back i {
  margin-right: 5px;
}
</style>
