<template>
  <div>
    <div class="column-item page-content">
      <figure class="image">
        <img :src="data.img.url">
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
      <section>
        <p class="back">
          <nuxt-link to="/column">
            <i/>一覧を見る<span>></span>
          </nuxt-link>
          <the-sub-header text="最近の活動・コラム" />
        </p>
        <div class="column-list">
          <the-column-list :columns="list" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import { fetchCmsDataColumn, fetchCmsListDataColumn } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheColumnList,
    TheSubHeader
  },
  head() {
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
          content: 'https://eggsystem.co.jp/column/' + this.data.id
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.data.img.url
        }
      ]
    }
  },
  async asyncData({ params }) {
    const data = await Promise.all([
      fetchCmsDataColumn(params.id),
      fetchCmsListDataColumn(3)
    ])
    return { data: data[0].data, list: data[1].listData }
  }
}
</script>

<style lang="scss" scoped>
.column-item {
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
