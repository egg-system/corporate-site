<template>
  <div>
    <the-hero-title main-text="ニュース" />
    <div class="news page-content">
      <the-news-list :news="news"/>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheNewsList from '~/components/pages/common/TheNewsList.vue'
import axios from 'axios'
const PAGE_NAME = 'news'
const API_VERSION = 'v1'
const microCmsUrl = [
  process.env.eggSystemApiDomain,
  API_VERSION,
  PAGE_NAME
].join('/')

export default {
  components: {
    TheHeroTitle,
    TheNewsList
  },
  data() {
    return {
      news: ''
    }
  },
  head: {
    script: []
  },
  async asyncData() {
    const { data } = await axios
      .get(microCmsUrl, {
        headers: { 'X-API-kEY': process.env.microCmsApiKey }
      })
      .catch(err => {
        return err.response
      })
    return {
      news: data.contents
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
