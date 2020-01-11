<template>
  <div>
    <the-hero-title :main-text="news.title" />
    <div class="news">
      <div class="sub">
        <span class="date">{{ news.date }}</span>
        <span class="tag is-warning">
          {{ news.label }}
        </span>
      </div>
      <div class="main">
        <div v-html="news.content" />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'

export default {
  components: {
    TheHeroTitle
  },
  data: () => ({
    news: {
      title: '本社移転のお知らせ',
      date: '2019/06/03',
      label: 'info',
      content: '<div>aaaa</div><div>bbbbb</div><div>ああああ</div>'
    }
  }),
  async asyncData({ params }) {
    // idからデータを取得
    return {
      id: params.id
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  width: 70%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
// スマホ版
@media screen and (max-width: 400px) {
  .news {
    width: 90%;
  }
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
</style>
