<template>
  <div class="news">
    <the-sub-header text="news" />
    <the-news-list :news="news"/>
    <div class="more-btn">
      <button class="button is-fullwidth more" @click="go('/news')">もっと見る</button>
    </div>
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
        title: '本社移転のお知らせ',
        date: '2019/06/03',
        label: 'info',
        url: '/news/aaa'
      },
      {
        title: 'H30年度（2019年度） IT導入支援事業者として登録されました',
        date: '2019/04/26',
        label: 'info',
        url: '/news/aaa'
      },
      {
        title: '近代中小企業（KinChu）2019年4月号 掲載のお知らせ',
        date: '2019/04/03',
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
.news p {
  margin-bottom: 30px;
}
.more {
  margin-top: 30px;
}
.more-btn {
  width: 50%;
  margin: auto;
}
</style>
