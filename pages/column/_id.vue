<template>
  <div>
    <the-hero-title :main-text="column.title" />
    <div class="column-item">
      <figure class="image">
        <img :src="column.img">
      </figure>
      <div class="sub">
        <span class="date">{{ column.date }}</span>
        <span class="tag is-warning">
          {{ column.label }}
        </span>
      </div>
      <div class="main">
        <div v-html="column.content" />
      </div>
      <p class="back">
        <nuxt-link to="/column">
          <i class="fas fa-caret-square-left"/>一覧に戻る
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'

export default {
  components: {
    TheHeroTitle
  },
  data: () => ({
    column: {
      title:
        'デジタルトランスフォーメーション（DX）とは？DXレポートから中小企業での活用方法まで解説（前編）',
      date: '2019/11/03',
      label: 'info',
      url: '/about',
      img:
        'https://eggsystem.co.jp/wp-content/uploads/2019/10/201910-dx3-1024x682.jpg',
      content: '<div>aaaa</div><div>bbbbb</div><div>ああああ</div>'
    }
  }),
  async asyncData({ params }) {
    // idからデータを取得
    return {
      id: params.id
    }
  }
}
</script>

<style lang="scss" scoped>
.column-item {
  width: 70%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
// スマホ版
@media screen and (max-width: 400px) {
  .column-item {
    width: 90%;
  }
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
  font-size: 24px;
}
.back {
  margin-top: 30px;
}
.back i {
  margin-right: 5px;
}
</style>
