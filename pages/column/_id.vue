<template>
  <div>
    <div class="column-item page-content">
      <figure class="image">
        <img :src="data.img.url">
      </figure>
      <the-hero-title :main-text="data.title" />
      <div class="sub">
        <span class="date">{{ data.display_at | dayjs }}</span>
        <span class="tag is-primary">
          {{ data.label.label }}
        </span>
      </div>
      <div class="main">
        <div v-html="data.content" />
      </div>
      <p class="back">
        <nuxt-link to="/column">
          <i class="fas fa-caret-square-left"/>一覧に戻る
        </nuxt-link>
      </p>
      <div class="column-list page-content">
        <!-- <the-column-list :columns="list" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheColumnList from '~/components/pages/top/TheColumnList.vue'
import { fetchCmsDataColumn, fetchCmsListDataColumn } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheColumnList
  },
  head() {
    return {
      title: this.data.title,
      meta: [
        {
          hid: 'column-description',
          name: 'description',
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'column-keywords',
          name: 'keywords',
          content: 'コラム, eggsystem, 株式会社エッグシステム'
        },
        {
          hid: 'column-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'column-og:type', property: 'og:type', content: 'article' },
        {
          hid: 'column-og:title',
          property: 'og:title',
          content: this.data.title
        },
        {
          hid: 'column-og:description',
          property: 'og:description',
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'column-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/column/' + this.data.id
        }
      ]
    }
  },
  data() {
    return {
      data: '',
      list: []
    }
  },
  asyncData({ params }) {
    const data = fetchCmsDataColumn(params.id)
    // const list = fetchCmsListDataColumn(3)
    const promise1 = new Promise(function(resolve, reject) {
      resolve(data)
    })
    // const promise2 = new Promise(function(resolve, reject) {
    //   resolve(list)
    // })

    // Promise.resolve().then(function() {
    //   return new Promise(function(fulfilled, rejected) {
    //     asyncFunc(function() {
    //       fulfilled(data)
    //     })
    //   }).then(function() {
    //     return new Promise(function(fulfilled, rejected) {
    //       asyncFunc(function() {
    //         fulfilled(list)
    //       })
    //     })
    //   })
    // })
    return promise1.then(function(data) {
      // console.log('promise')
      // console.log(data)
      return { data: data.data }
    })
    // list: promise2.then(function(list) {
    //   // console.log('promise')
    //   console.log('promise2')
    //   console.log(list.listData)
    //   return list.listData
    // })
    // return {
    //   promise1,
    //   promise2
    // }
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
    border-bottom: solid 2px black;
    margin-bottom: 10px;
  }
  /deep/ h3 {
    position: relative;
    color: black;
  }
  /deep/ h3::after {
    position: absolute;
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
    content: '';
    width: 3px;
    height: 1em;
    background-color: #446689;
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
    background: #efefef;
    color: #555;
  }
  /deep/ blockquote:before {
    display: inline-block;
    position: absolute;
    top: 13px;
    left: 15px;
    font-family: FontAwesome;
    color: #cfcfcf;
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
    color: #888888;
    font-size: 0.9em;
  }
}
.back {
  margin-top: 30px;
}
.back i {
  margin-right: 5px;
}
</style>
