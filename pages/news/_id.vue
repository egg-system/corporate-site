<template>
  <div>
    <div class="news page-content">
      <the-hero-title :main-text="data.title" />
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
        <the-sub-header text="お知らせ" />
        <nuxt-link to="/news">
          <i class=""/>一覧を見る<span>></span>
        </nuxt-link>
      </p>
      <the-news-list :news="list" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheNewsList from '~/components/pages/common/TheNewsList.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import { fetchCmsDataNews, fetchCmsListDataNews } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheNewsList,
    TheSubHeader
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

  async asyncData({ params }) {
    const data = await Promise.all([
      fetchCmsDataNews(params.id),
      fetchCmsListDataNews(3)
    ])
    return { data: data[0].data, list: data[1].listData }
  }
}
</script>

<style lang="scss" scoped>
.news {
  margin-top: 5%;
  margin-bottom: 5%;
}
.page-content {
  width: 65%;
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
  font-size: 16px;
}
.main {
  /deep/ img {
    display: block;
    margin: 0 auto;
  }
  /deep/ div .sub-header-container {
    margin-top: 0px;
    margin-left: 0px;
  }
}
.back {
  margin-top: 30px;
}
.back a {
  display: block;
  text-align: right;
}
.back i {
  margin-right: 5px;
}
.back span {
  margin-left: 20px;
}
@media screen and (max-width: 600px) {
  .page-content {
    width: 85%;
  }
}
</style>
