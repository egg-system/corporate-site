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
        <nuxt-link to="/cases">
          <i/>一覧を見る<span>></span>
        </nuxt-link>
        <the-sub-header text="顧客インタビュー・事例紹介" />
      </p>
      <div class="news-list">
        <the-case-list :cases="list" />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheCaseList from '~/components/pages/common/TheCaseList.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import noImage from '~/assets/js/no-image.js'
import { fetchCmsDataCase, fetchCmsListDataCase } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheCaseList,
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
          content: '株式会社エッグシステム 顧客インタビュー・事例紹介'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '顧客インタビュー・事例紹介, eggsystem, 株式会社エッグシステム'
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
          content: '株式会社エッグシステム 顧客インタビュー・事例紹介'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/cases/' + this.data.id
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image
        }
      ]
    }
  },
  async asyncData({ params }) {
    const data = await Promise.all([
      fetchCmsDataCase(params.id),
      fetchCmsListDataCase(3)
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
    border-top: 1px solid $black;
    border-bottom: 1px solid $black;
    padding: 15px;
    margin: 30px;
  }
  /deep/ blockquote:before {
    position: absolute;
    background-color: $white;
    color: $black;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f10d';
    line-height: 1;
    text-align: center;
    top: -20px;
    left: -10px;
    padding: 10px;
    font-size: 15px;
  }
  /deep/ blockquote:after {
    position: absolute;
    background-color: $white;
    color: $black;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f10e';
    line-height: 1;
    text-align: center;
    bottom: -20px;
    right: -10px;
    padding: 10px;
    font-size: 15px;
  }
  /deep/ blockquote cite {
    display: block;
    padding-right: 30px;
    font-size: 0.8rem;
    text-align: right;
    color: $black;
  }
  /deep/ ol li {
    margin-left: 20px;
  }
  /deep/ iframe {
    height: 400px;
  }
}
/deep/ .news-image img {
  display: none;
}
/deep/ .news-title {
  height: 80px;
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
.image img {
  object-fit: contain;
  margin: 0 auto;
}
@media screen and (min-width: 1030px) {
  .image img {
    height: 550px;
  }
}
@media screen and (max-width: 1029px) and (min-width: 769px) {
  .image img {
    height: 400px;
  }
}
@media screen and (max-width: 769px) and (min-width: 600px) {
  .image img {
    height: 300px;
  }
}
@media screen and (max-width: 600px) {
  .image img {
    height: 200px;
  }
  .page-content {
    width: 85%;
  }
  /deep/ blockquote a {
    word-break: break-all;
  }
  .main {
    /deep/ blockquote {
      margin-right: 10px;
      margin-left: 10px;
    }
  }
}
.info-color {
  color: $white;
  background-color: $black;
}
</style>
