<template>
  <div>
    <the-hero-title :main-text="data.title" />
    <div class="column-item page-content">
      <figure class="image">
        <img :src="data.img.url">
      </figure>
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
        <nuxt-link to="/column">
          <i class="fas fa-caret-square-left"/>一覧に戻る
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import { fetchCmsDataColumn } from '~/lib/cms'

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
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'コラム, eggsystem, 株式会社エッグシステム'
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
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/column/' + this.data.id
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.data.img.url
        }
      ]
    }
  },

  asyncData({ params }) {
    return fetchCmsDataColumn(params.id)
  }
}
</script>

<style lang="scss" scoped>
.column-item {
  margin-top: 5%;
  margin-bottom: 5%;
}
.sub {
  margin-top: 20px;
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
