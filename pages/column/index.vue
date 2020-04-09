<template>
  <div>
    <the-hero-title main-text="最近の活動・コラム" />
    <div class="column-list page-content">
      <the-column-list :columns="listData" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import { fetchCmsListDataColumn } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheColumnList
  },
  head() {
    return {
      title: '最近の活動・コラム',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '最近の活動・コラム, eggsystem, 株式会社エッグシステム'
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
          content: '最近の活動・コラム'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/column'
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
    return fetchCmsListDataColumn()
  }
}
</script>

<style lang="scss" scoped>
.column-list {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
