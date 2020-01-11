<template>
  <div>
    <the-hero-title main-text="ニュース" />
    <div class="news">
      <the-news-list :news="news"/>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheNewsList from '~/components/pages/common/TheNewsList.vue'

export default {
  components: {
    TheHeroTitle,
    TheNewsList
  },
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
      },
      {
        title: '《2019年新春》本年もよろしくお願い致します',
        date: '2019/01/07',
        label: 'info',
        url: '/news/aaa'
      },
      {
        title:
          'H29年度IT導入補助金の採択状況、【三次公募、第一回】弊社申請分は全て交付決定いたしました',
        date: '2018/10/09',
        label: 'info',
        url: '/news/aaa'
      },
      {
        title:
          'H29年度IT導入補助金【二次公募】弊社申請分は全て交付決定いたしました',
        date: '2018/08/18',
        label: 'info',
        url: '/news/aaa'
      },
      {
        title:
          'H29年度IT導入補助金【一次公募】弊社申請分は全て交付決定いたしました',
        date: '2018/06/15',
        label: 'info',
        url: '/news/aaa'
      },
      {
        title: 'ホームページをリニューアルいたしました',
        date: '2018/06/04',
        label: 'info',
        url: '/news/aaa'
      },
      {
        title: 'H29年度 IT導入支援事業者として登録されました',
        date: '2018/05/11',
        label: 'info',
        url: '/news/aaa'
      }
    ]
  })
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
</style>
