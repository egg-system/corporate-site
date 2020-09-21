<template>
  <div>
    <div class="content page-content">
      <the-hero-title main-text="わたしたちについて" />
      <the-message class="end" />
      <section>
        <the-sub-header class="blank" text="当社の強み" />
        <the-value class="end" />
      </section>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheValue from '~/components/pages/about/TheValue.vue'
import TheMessage from '~/components/pages/about/TheMessage.vue'
import TheColumn from '~/components/pages/about/TheColumn.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheValue,
    TheMessage,
    TheColumn
  },
  head() {
    return {
      title: 'わたしたちについて',
      meta: [
        {
          hid: 'about-description',
          name: 'description',
          content:
            '株式会社エッグシステムでは、《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》の実現のために、ITシステムを活用します。'
        },
        {
          hid: 'about-keywords',
          name: 'keywords',
          content:
            '献身的な人のためにITシステムを活用する, 100人のコンサルティングエンジニア集団をつくる, 圧倒的当事者意識'
        },
        {
          hid: 'about-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'about-og:type', property: 'og:type', content: 'article' },
        {
          hid: 'about-og:title',
          property: 'og:title',
          content: 'わたしたちについて'
        },
        {
          hid: 'about-og:description',
          property: 'og:description',
          content:
            '株式会社エッグシステムでは、《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》の実現のために、ITシステムを活用します。'
        },
        {
          hid: 'about-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/about'
        },
        {
          hid: 'about-og:image',
          property: 'og:image',
          content: 'https://eggsystem.co.jp/ogp/top-about.JPG'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.blank {
  margin-top: 70px;
  margin-bottom: 30px;
}
.end {
  margin: 0 0 50px;
}
@media screen and (max-width: 768px) {
  .end {
    margin: 0;
    padding-bottom: 0;
  }
}
</style>
