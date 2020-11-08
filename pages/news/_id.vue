<template>
  <div>
    <div class="news-item page-content">
      <figure class="image">
        <img v-if="data.img !== undefined" :src="data.img.url" :alt="data.title">
      </figure>
      <the-hero-title :main-text="data.title" />
      <div class="sub">
        <time
          :datetime="data.display_at"
          class="date"
          itemprop="datepublished"
        >
          公開日：{{ data.display_at | dayjs }}
        </time>
        <time
          :datetime="data.updatedAt"
          class="date"
          itemprop="datemodified"
        >
          更新日：{{ data.updatedAt | dayjs }}
        </time>
        <span class="tag info-color">
          {{ data.label.label }}
        </span>
      </div>
      <div class="main">
        <div v-html="data.content" />
      </div>
      <p class="back">
        <nuxt-link to="/news">
          <i/>一覧を見る<span>></span>
        </nuxt-link>
        <the-sub-header text="お知らせ" />
      </p>
      <div class="news-list">
        <the-news-list :news="list" />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheNewsList from '~/components/pages/common/TheNewsList.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import noImage from '~/assets/js/no-image.js'
import { fetchCmsDataNews, fetchCmsListDataNews } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheNewsList,
    TheSubHeader
  },
  head() {
    let image = this.data.img
    if (this.data.img == undefined) {
      image = noImage.noImage
    }
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
          content: 'https://eggsystem.co.jp/news/' + this.data.id
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image
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
@import '@/assets/posts.scss';

.news-item {
  margin-top: 5%;
  margin-bottom: 5%;
}

.main {
  /deep/ iframe {
    height: 400px;
  }
}

/deep/ .news-image img {
  display: none;
}

.image img {
  object-fit: contain;
  margin: 0 auto;
  @media screen and (min-width: 1030px) {
    height: 550px;
  }
  @media screen and (max-width: 1029px) and (min-width: 769px) {
    height: 400px;
  }
  @media screen and (max-width: 769px) and (min-width: 600px) {
    height: 300px;
  }
  @media screen and (max-width: 600px) {
    height: 200px;
  }
}
</style>
