<template>
  <div>
    <the-hero-title main-text="コラム" />
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
      title: 'コラム',
      meta: [
        {
          hid: 'column-description',
          name: 'description',
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'column-keywords',
          name: 'keywords',
          content: 'コラム, eggsystem, 株式会社エッグシステム'
        },
        {
          hid: 'column-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'column-og:type', property: 'og:type', content: 'article' },
        {
          hid: 'column-og:title',
          property: 'og:title',
          content: 'コラム'
        },
        {
          hid: 'column-og:description',
          property: 'og:description',
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'column-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/column'
        },
        {
          hid: 'column-og:imgae',
          property: 'og:imgae',
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
