<template>
  <div>
    <div class="column-item page-content">
      <figure class="image">
        <img :src="data.img.url">
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
          :datetime="data.updated_at"
          class="date"
          itemprop="datemodified"
        >
          更新日：{{ data.updated_at | dayjs }}
        </time>
        <span class="tag info-color">
          {{ data.label.label }}
        </span>
      </div>
      <div class="main">
        <div v-html="data.content" />
      </div>
      <section>
        <p class="back">
          <nuxt-link to="/column">
            <i/>一覧を見る<span>></span>
          </nuxt-link>
          <the-sub-header text="最近の活動・コラム" />
        </p>
        <div class="column-list">
          <the-column-list :columns="list" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import { fetchCmsDataColumn, fetchCmsListDataColumn } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheColumnList,
    TheSubHeader
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
  async asyncData({ params }) {
    const data = await Promise.all([
      fetchCmsDataColumn(params.id),
      fetchCmsListDataColumn(3)
    ])
    return { data: data[0].data, list: data[1].listData }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/posts.scss';

.column-item {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
