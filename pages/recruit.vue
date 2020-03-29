<template>
  <div>
    <the-hero-title main-text="ジブンゴトで働こう" />
    <div class="content page-content">
      <the-main-image />
      <the-main-message />
      <the-entry />
      <the-contact />
    </div>
    <the-about />
    <div class="content page-content">
      <the-study />
      <!-- <the-sub-header class="blank" text="最近の活動・コラム" />
      <the-column class="end" /> -->
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
// import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheContact from '~/components/pages/common/TheContact.vue'
import TheMainImage from '~/components/pages/recruit/TheMainImage.vue'
import TheMainMessage from '~/components/pages/recruit/TheMainMessage.vue'
import TheAbout from '~/components/pages/top/TheAbout.vue'
import TheStudy from '~/components/pages/recruit/TheStudy.vue'
import TheEntry from '~/components/pages/recruit/TheEntry.vue'
// import TheColumn from '~/components/pages/about/TheColumn.vue'
import recruitTop from '~/staticrecruit-top-ogp.jpg'

export default {
  components: {
    TheHeroTitle,
    // TheSubHeader,
    TheContact,
    TheMainImage,
    TheMainMessage,
    TheAbout,
    TheStudy,
    TheEntry
    // TheColumn
  },
  head() {
    return {
      title: '採用ページ',
      meta: [
        {
          hid: 'recruit-description',
          name: 'description',
          content:
            'どこへ行っても通用するスキルを身につけたい『コンサルティングエンジニア(＝システムコンサルタント兼システムエンジニア)』を希望する方を募集しています。'
        },
        {
          hid: 'recruit-keywords',
          name: 'keywords',
          content:
            'ジブンゴトで働こう, システムエンジニア勉強会, コンサルティングエンジニア集団「x-faCE」の一員を募集しています'
        },
        {
          hid: 'recruit-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'recruit-og:type', property: 'og:type', content: 'article' },
        {
          hid: 'recruit-og:title',
          property: 'og:title',
          content: '採用ページ'
        },
        {
          hid: 'recruit-og:description',
          property: 'og:description',
          content:
            'どこへ行っても通用するスキルを身につけたい『コンサルティングエンジニア(＝システムコンサルタント兼システムエンジニア)』を希望する方を募集しています。'
        },
        {
          hid: 'recruit-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp'
        },
        { hid: 'recruit-og:image', property: 'og:image', content: recruitTop }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 50%;
  margin: 30px auto 30px;
  text-align: center;
}
.blank {
  margin-top: 70px;
  margin-bottom: 30px;
}
.end {
  margin: 0 0 50px;
}
@media screen and (max-width: 600px) {
  .end {
    margin: 0;
    padding-bottom: 0;
  }
}
</style>
