<template>
  <div>
    <div class="news-item page-content">
      <figure class="image">
        <img v-if="data.img !== undefined" :src="data.img.url" :alt="data.title">
      </figure>
      <the-hero-title :main-text="data.title" />
      <div class="sub">
        <span class="date">{{ data.display_at | dayjs }}</span>
        <span class="tag info-color">
          {{ data.label.label }}
        </span>
      </div>
      <div class="main">
        <div v-html="data.content" />
      </div>
      <p class="back">
        <nuxt-link to="/news">
          <i/>一覧を見る<span>></span>
        </nuxt-link>
        <the-sub-header text="ニュース" />
      </p>
      <div class="news-list">
        <the-news-list :news="list" />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheNewsList from '~/components/pages/common/TheNewsList.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import noImage from '~/assets/js/no-image.js'
import { fetchCmsDataNews, fetchCmsListDataNews } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheNewsList,
    TheSubHeader
  },
  head() {
    let image = this.data.img
    if (this.data.img == undefined) {
      image = noImage.noImage
    }
    return {
      title: this.data.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'コラム, eggsystem, 株式会社エッグシステム'
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.data.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/news/' + this.data.id
        },
        {
          hid: 'og:image',
          property: 'og:image',
          // content: this.data.img.url
          content: image
        }
      ]
    }
  },
  async asyncData({ params }) {
    const data = await Promise.all([
      fetchCmsDataNews(params.id),
      fetchCmsListDataNews(3)
    ])
    return { data: data[0].data, list: data[1].listData }
  }
}
</script>

<style lang="scss" scoped>
.news-item {
  margin-top: 5%;
  margin-bottom: 5%;
}
.page-content {
  width: 65%;
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
.back a {
  color: $black;
}
.main {
  margin-top: 20px;
  font-size: 16px;
}
.main {
  /deep/ h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
  }
  /deep/ h2 {
    border-bottom: solid 2px $black;
    margin-bottom: 10px;
    font-size: 28px;
  }
  /deep/ h3 {
    position: relative;
    font-size: 22px;
    padding: 1rem 0 1rem 1rem;
    border-left: 2px solid $lightcream;
  }
  /deep/ img {
    display: block;
    margin: 0 auto;
  }
  /deep/ blockquote {
    position: relative;
    padding: 15px 15px 8px 15px;
    box-sizing: border-box;
    font-style: italic;
    background: $backwhite;
    color: $lightbrown;
  }
  /deep/ blockquote:before {
    display: inline-block;
    position: absolute;
    top: 13px;
    left: 15px;
    font-family: FontAwesome;
    color: $cream;
    font-size: 28px;
    line-height: 1;
    font-weight: 900;
  }

  /deep/ blockquote p {
    padding: 0;
    margin: 10px 0;
    line-height: 1.7;
  }

  /deep/ blockquote cite {
    display: block;
    text-align: right;
    color: $brown;
    font-size: 0.9em;
  }
  /deep/ ol li {
    margin-left: 20px;
  }
}
.back {
  margin-top: 30px;
}
.back a {
  border-top: solid 2px $backwhite;
  padding-top: 10%;
  display: block;
  text-align: right;
}
.back i {
  margin-right: 5px;
}
.back span {
  margin-left: 20px;
}
/deep/ div .btn-area {
  display: none;
}
/deep/ div .sub-header-container {
  margin-top: 0px;
  margin-left: 0px;
}
@media screen and (max-width: 600px) {
  .page-content {
    width: 85%;
  }
}
.info-color {
  color: $white;
  background-color: $black;
}
</style>
