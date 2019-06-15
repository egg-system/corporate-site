<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <main-title />

      <main-img v-for="item in mainImg" :key="item.imgUrl"
                :link-url="item.linkUrl"
                :img-url="item.imgUrl"
                :img-title="item.title"
                :img-sub-title="item.subTitle"
      />

      <div class="sub">
        <sub-title main="ホームページ制作 HOME PAGE" sub="高品質なホームページを制作します。"/>
      </div>

      <promise-txt/>
      <promise-img v-for="item in promise" :key="item.img"
                   :img="item.img"
                   :title="item.title"
                   :description="item.description"/>


      <v-flex xs12>
        <v-card-text class="px-0">事例はこちら</v-card-text>
      </v-flex>

      <v-flex xs12>
        <v-card-text class="px-0">サービス</v-card-text>
      </v-flex>
      <v-flex xs12>
        <v-card-text class="px-0">テーブルで表示</v-card-text>
      </v-flex>

      <v-flex xs12>
        <v-card-text class="px-0">Webシステム</v-card-text>
        <v-card-text class="px-0">
          システム開発することが目的ではないため、検討した結果、
          「システム開発は行わずに簡易的な無料ツールを使いましょう」
          というご提案ができることが当社の強みです。
        </v-card-text>
      </v-flex>


      <v-flex xs12>
        <v-card-text class="px-0">Not Doing 当社がやらないこと</v-card-text>
      </v-flex>

      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>
      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>
      <v-flex xs4>
        <v-card-text class="px-0">画像と説明</v-card-text>
      </v-flex>

      <v-flex xs12>
        <v-card-text class="px-0">サービス</v-card-text>
      </v-flex>
      <v-flex xs12>
        <v-card-text class="px-0">テーブルで表示</v-card-text>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import MainTitle from '~/components/pages/homepage-web/MainTitle.vue'
import MainImg from '~/components/pages/homepage-web/MainImg.vue'
import SubTitle from '~/components/pages/homepage-web/SubTitle.vue'
import PromiseTxt from '~/components/pages/homepage-web/PromiseTxt.vue'
import PromiseImg from '~/components/pages/homepage-web/PromiseImg.vue'

export default {
  components: {
    MainTitle,
    MainImg,
    SubTitle,
    PromiseTxt,
    PromiseImg
  },
  data: () => ({
    mainImg: [
      {
        linkUrl: '/',
        imgUrl: 'https://eggsystem.co.jp/image/btn_homepage.jpg',
        title: 'ホームページ制作',
        subTitle: 'Home Page'
      },
      {
        linkUrl: '/',
        imgUrl: 'https://eggsystem.co.jp/image/btn_websystem.jpg',
        title: 'Webシステム開発',
        subTitle: 'Web system development'
      }
    ],
    promise: [
      {
        img: 'https://eggsystem.co.jp/image/icon_promise01.png',
        title: '目的に合わせる',
        description:
          'ホームページを作ることが目的ではありません。ホームページを作って何を実現したいのか丁寧にヒアリングさせて頂いた上で、目的に合わせたホームページを制作します。'
      },
      {
        img: 'https://eggsystem.co.jp/image/icon_promise02.png',
        title: 'お客様の手間を最小限に',
        description:
          '事業内容を詳しくヒアリングさせて頂き、お客様の会社・事業のことを十分理解した状態で制作することで、キャッチコピーや掲載する文章は当社で作成することが可能となります。'
      },
      {
        img: 'https://eggsystem.co.jp/image/icon_promise03.png',
        title: '豊富な事例を紹介',
        description:
          '他の会社ではこういうやり方をしていますよ、といった豊富な事例を紹介しながら、お客様の事業成長へ貢献できるホームページを制作します。'
      },
      {
        img: 'https://eggsystem.co.jp/image/icon_promise04.png',
        title: 'コストパフォーマンス',
        description:
          '大手制作会社の半分以下の費用で対応します。仕様書や打ち合わせは必要最低限に抑えるだけでなく、社内の間接費用を最小限に抑えているため、このコストパフォーマンスを実現できています。'
      },
      {
        img: 'https://eggsystem.co.jp/image/icon_promise05.png',
        title: '魅力を伝えるデザイン',
        description:
          'きれいなデザインにすることは当たり前。あなたの会社やサービスの魅力を引き出し、本当に伝えたい事が伝わるデザインを提供します。'
      },
      {
        img: 'https://eggsystem.co.jp/image/icon_promise06.png',
        title: 'レスポンシブ対応',
        description:
          'スマホ普及率は6割を超えています。PCだけでなく、スマホやタブレットでもきれいに表示されるように、レイアウト・デザインを調整します。'
      }
    ]
  })
}
</script>

<style scoped>
.sub {
  margin-top: 30px;
  width: 100%;
  background-color: #1f55a5;
}
</style>
