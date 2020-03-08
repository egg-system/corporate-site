<template>
  <div>
    <the-hero-title :main-text="data.title" />
    <div class="news page-content">
      <div class="sub">
        <span class="date">{{ data.createdAt | dayjs }}</span>
        <span class="tag is-warning">
          {{ data.label.label }}
        </span>
      </div>
      <div class="main">
        <div v-html="data.content" />
      </div>
      <p class="back">
        <nuxt-link to="/news">
          <i class="fas fa-caret-square-left"/>一覧に戻る
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import { fetchCmsDataNews } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle
  },
  asyncData({ params }) {
    return fetchCmsDataNews(params.id)
  }
}
</script>

<style lang="scss" scoped>
.news {
  margin-top: 5%;
  margin-bottom: 5%;
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
