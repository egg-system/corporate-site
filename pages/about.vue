<template>
  <div>
    <div class="content page-content">
      <the-hero-title main-text="わたしたちについて" />
      <the-message class="end" />
      <the-sub-header class="blank" text="当社の強み" />
      <the-value class="end" />
      <div class="column-header blank">
        <the-sub-header text="最近の活動・コラム" />
        <div class="link">
          <nuxt-link class="column-button" to="/column">
            <div class="left">一覧を見る</div>
            <div class="right">></div>
          </nuxt-link>
        </div>
      </div>
      <the-column-list :columns="columns" class="last-content"/>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheValue from '~/components/pages/about/TheValue.vue'
import TheMessage from '~/components/pages/about/TheMessage.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import { fetchCmsListDataColumn, fetchCmsListDataNews } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheValue,
    TheMessage,
    TheColumnList
  },
  async asyncData() {
    const data = await Promise.all([
      fetchCmsListDataColumn(3),
      fetchCmsListDataNews(3)
    ])
    return { columns: data[0].listData, news: data[1].listData }
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
  margin-bottom: 50px;
}
.end {
  margin: 0 0 50px;
}
.column-header {
  display: flex;
  .link {
    margin: auto;
    margin-right: 0;
    margin-bottom: 0;
    a {
      display: flex;
      width: 8rem;
      margin-right: 2rem;
      color: inherit;
      .left {
        margin-right: auto;
      }
      .right {
        margin-left: auto;
      }
    }
  }
}
.last-content {
  margin-bottom: 2rem;
}
@media screen and (max-width: 600px) {
  .end {
    margin: 0;
    padding-bottom: 0;
  }
  .column-header {
    display: block;
    .link a {
      margin-left: auto;
      margin-right: 1rem;
    }
  }
}
</style>
