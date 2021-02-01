<template>
  <div>
    <div class="column-item page-content">
      <figure class="image">
        <img :src="data.img.url">
      </figure>
      <the-hero-title :main-text="data.title" />
      <div class="categories-wrapper">
        <span
          v-for="category in data.categories"
          :key="category.id"
          class="tag info-color"
        >
          {{ category.name }}
        </span>
      </div>
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
      </div>
      <div class="main">
        <div v-html="data.content" />
      </div>
      <section v-for="caseList in caseLists" :key="caseList.name">
        <p class="back">
          <nuxt-link to="/cases">
            <i/>一覧を見る<span>></span>
          </nuxt-link>
          <the-sub-header :text="`${caseList.name}の事例紹介`" />
        </p>
        <div class="column-list">
          <the-case-list :cases="caseList.list" />
        </div>
      </section>
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
import TheCaseList from '~/components/pages/common/TheCaseList.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import {
  fetchCmsDataColumn,
  fetchCmsListDataColumn,
  fetchCmsListDataCaseByCategoryId
} from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheCaseList,
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
          content: this.data.description
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
          content: this.data.description
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

    const columnData = data[0].data
    const casePromises = columnData.categories.map(async category => {
      const { listData } = await fetchCmsListDataCaseByCategoryId(
        category.id,
        3
      )
      return {
        name: category.name,
        list: listData
      }
    })

    const caseListsData = await Promise.all(casePromises)
    const caseLists = caseListsData.filter(caseList => caseList.list.length > 0)
    return { data: columnData, list: data[1].listData, caseLists }
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
