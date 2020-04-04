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
