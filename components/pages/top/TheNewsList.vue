<template>
  <div class="news">
    <the-sub-header text="お知らせ" />
    <div class="news-link">
      <a href="/news" target="_brunk">一覧をみる　　　></a>
    </div>
    <the-news-list :news="news"/>
  </div>
</template>

<script>
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import TheNewsList from '~/components/pages/common/TheNewsList.vue'
import method from '~/mixins/method'

export default {
  components: {
    TheSubHeader,
    TheNewsList
  },
  mixins: [method],
  data: () => ({
    news: [
      {
        title: 'Soup Stock Tokyo ルクア大阪店 改装に伴う一時休業のお知らせ',
        date: '2020.1.6',
        label: 'info',
        url: '/news/aaa'
      },
      {
        title: 'Soup Stock Tokyo ホワイティうめだ店、12月5日(木)11:00オープン',
        date: '2019.11.26',
        label: 'info',
        url: '/news/aaa'
      },
      {
        title: 'Soup Stock Tokyo Echika池袋店 12/1(日)リニューアルオープン',
        date: '2019.11.15',
        label: 'info',
        url: '/news/aaa'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.news {
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
.news-link {
  width: auto;
  margin: 30px auto;
  text-align: right;
}
.news-link a {
  display: inline-block;
  font-size: 16px;
  color: $black;
}
.more {
  margin-top: 30px;
}
.more-btn {
  width: 50%;
  margin: auto;
}
.border {
  border-right: 1px solid $lightgray;
}
@media screen and (max-width: 600px) {
  .news-link {
    margin: 15px auto;
  }
}
</style>
