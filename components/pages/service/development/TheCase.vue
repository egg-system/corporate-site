<template>
  <div>
    <h4 class="is-6">①ホームページ制作</h4>
    <div class="columns is-1">
      <div v-for="(item, i) in homePage" :key="i" class="column">
        <nuxt-link :to="item.url">
          <div class="card-image">
            <figure class="image">
              <img :src="item.img" :alt="item.title">
            </figure>
          </div>
          <p class="home-page-title">{{ item.title }}</p>
        </nuxt-link>
      </div>
    </div>
    <div class="more-button">
      <button class="button is-fullwidth" @click="go('/')">もっとみる</button>
    </div>

    <h4 class="is-6 case-2">②Webシステム開発</h4>
    <div class="columns">
      <div class="column is-two-fifths">
        <figure class="image">
          <img src="https://eggsystem.co.jp/wp-content/uploads/2019/01/websystem-case01-1024x683.jpg">
        </figure>
      </div>
      <div class="column">
        <div class="example">
          <p>
            <b>サブスクリプションサービスの会員管理システム開発およびクレジットカード決済（月額費）との自動連動システム</b>
          </p>
          <p class="small">
            <b>【ベンチャー企業、参考費用：約30〜60万円】】</b><br>
          </p>
        </div>
        <div class="example">
          <p>
            <b>代理店サービスの報酬金額自動算出機能開発</b>
          </p>
          <p class="small">
            <b>【ベンチャー企業、参考費用：月額5万円〜】</b><br>
          </p>
        </div>
        <div class="example">
          <p>
            <b>小売業（メガネ）におけるECサイトの構築支援</b>
          </p>
          <p class="small">
            <b>【小売事業者、参考費用：10万円】】</b><br>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import method from '~/mixins/method'

export default {
  mixins: [method],
  data: () => ({
    homePage: [
      {
        title: 'セミパーソナルボクシングジム',
        url: 'https://boxing.go-kigen.jp/',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/06/gokigen-boxing.png'
      },
      {
        title: 'パーソナルトレーニングジム',
        url: 'https://flowpersonal.go-kigen.jp/',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/06/flow-personal-new.png'
      },
      {
        title: '出張マッサージ',
        url: 'https://body-task.com/',
        img: 'https://eggsystem.co.jp/wp-content/uploads/2018/12/body-task.png'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
h4 {
  text-align: center;
  color: $blue;
}
.image {
  margin: auto;
}
.example {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: $black;
  background: $whitesmoke;
  border-radius: 9px;
  max-width: 800px;
  margin: 0 auto 10px;
}
.example p {
  margin: 10px;
  padding: 0;
}
.small {
  font-size: 14px;
}
.more-button {
  width: 50%;
  margin: auto;
}
.case-2 {
  margin-top: 50px;
}
.home-page-title {
  text-align: center;
}
</style>
