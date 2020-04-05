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
      title: this.data.title,
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
          content: this.data.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '株式会社エッグシステム ニュース'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/news/' + this.data.id
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://eggsystem.co.jp/logo.png'
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
