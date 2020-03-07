<template>
  <div>
    <the-hero-title :main-text="column.title" />
    <div class="column-item page-content">
      <figure class="image">
        <img :src="column.img.url">
      </figure>
      <div class="sub">
        <span class="date">{{ column.createdAt | moment }}</span>
        <span class="tag is-warning">
          {{ column.label.label }}
        </span>
      </div>
      <div class="main">
        <div v-html="column.content" />
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
import axios from 'axios'
const PAGE_NAME = 'column'
const API_VERSION = 'v1'
const microCmsUrl = [
  process.env.microCmsApiDomain,
  API_VERSION,
  PAGE_NAME
].join('/')

export default {
  components: {
    TheHeroTitle
  },
  data() {
    return {}
  },
  async asyncData({ params }) {
    const { data } = await axios
      .get(`${microCmsUrl}/${params.id}`, {
        headers: { 'X-API-kEY': process.env.microCmsApiKey }
      })
      .catch(err => {
        return err.response
      })
    return {
      column: data
    }
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
