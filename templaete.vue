  #元テンプレート
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

      <service-txt main="Promise" sub="お客さまとの６つの約束" />
      <service-img v-for="item in promise" :key="item.img"
                   :img="item.img"
                   :title="item.title"
                   :description="item.description"/>

      <case-study-btn />

      <service-txt main="Service" sub="サービス内容・料金" />
      <service-price
        :main="servicePrice.homepageLP.main"
        :sub="servicePrice.homepageLP.sub"
        :img="servicePrice.homepageLP.img"
        :price="servicePrice.homepageLP.price"
      />
      <service-price
        :main="servicePrice.homepageEP.main"
        :sub="servicePrice.homepageEP.sub"
        :img="servicePrice.homepageEP.img"
        :price="servicePrice.homepageEP.price"
      />
      <service-description />

      <div class="sub">
        <sub-title main="Webシステム開発 WEB SYSTEM" sub="お客さまの事業成長へ貢献できるWebシステムを開発します。"/>
      </div>
      <div class="subDescription">
        システム開発することが目的ではないため、検討した結果、<br>
        「システム開発は行わずに簡易的な無料ツールを使いましょう」<br>
        というご提案ができることが当社の強みです。
      </div>

      <service-txt main="Not doing" sub="当社がやらないこと" />
      <service-img v-for="item in notDoing" :key="item.img"
                   :img="item.img"
                   :title="item.title"
                   :description="item.description"/>

      <service-txt main="Service" sub="サービス内容・料金" />
      <service-price
        :main="servicePrice.webSystemMonthly.main"
        :sub="servicePrice.webSystemMonthly.sub"
        :img="servicePrice.webSystemMonthly.img"
        :price="servicePrice.webSystemMonthly.price"
      />
      <service-price
        :main="servicePrice.webSystem.main"
        :sub="servicePrice.webSystem.sub"
        :img="servicePrice.webSystem.img"
        :price="servicePrice.webSystem.price"
      />
      <service-description />

    </v-layout>
  </v-container>
</template>

<script>
import MainTitle from '~/components/pages/homepage-web/MainTitle.vue'
import MainImg from '~/components/pages/homepage-web/MainImg.vue'
import SubTitle from '~/components/pages/homepage-web/SubTitle.vue'
import ServiceTxt from '~/components/pages/homepage-web/ServiceTxt.vue'
import ServiceImg from '~/components/pages/homepage-web/ServiceImg.vue'
import CaseStudyBtn from '~/components/pages/homepage-web/CaseStudyBtn.vue'
import ServicePrice from '~/components/pages/homepage-web/ServicePrice.vue'
import ServiceDescription from '~/components/pages/homepage-web/ServiceDescription.vue'

export default {
  components: {
    MainTitle,
    MainImg,
    SubTitle,
    ServiceTxt,
    ServiceImg,
    CaseStudyBtn,
    ServicePrice,
    ServiceDescription
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
    ],
    notDoing: [
      {
        img: 'https://eggsystem.co.jp/image/icon_notdoing01.png',
        title: '言われたことだけをやる',
        description:
          'お客さまから言われたことをそのまま対応するのではなく、お客さまの立場にたって「何のために必要か？」「本当に必要か？」ということを考え、当社から「こうした方がより良い効果が得られます」というご提案をしながら進めます。'
      },
      {
        img: 'https://eggsystem.co.jp/image/icon_notdoing02.png',
        title: '開発したら終わり',
        description:
          'システムを開発し納品することがゴールではなく、お客さまにとってはシステム納品がスタートです。そのため、開発よりも「開発後」を第一に考えて運用保守まで一貫して行います。'
      },
      {
        img: 'https://eggsystem.co.jp/image/icon_notdoing03.png',
        title: 'システムのことだけ考える',
        description:
          'システムは単なるツールです。どの業務でどうやってシステムを使うかということが重要ですので、「業務」と「システム」の両面からサポートいたします。'
      }
    ],
    servicePrice: {
      homepageLP: {
        main: `ホームページ
クラウドサービスプラン`,
        sub: `・事業をスタートしたばかりの企業様
・小売／サービス業など店舗経営をされているオーナー様`,
        img: 'https://eggsystem.co.jp/image/icon_service01.png',
        price: '￥30,000'
      },
      homepageEP: {
        main: `ホームページ／ＬＰ
エンタープライズプラン`,
        sub: `・ホームページを自分で運用したい企業様／オーナー様`,
        img: 'https://eggsystem.co.jp/image/icon_service02.png',
        price: `￥100,000〜
都度お見積り`
      },
      webSystemMonthly: {
        main: `月額顧問サービス`,
        sub: `・事業をスタートしたばかりの企業様
・情報システム部門がない企業様`,
        img: 'https://eggsystem.co.jp/image/icon_service03.png',
        price: '￥0'
      },
      webSystem: {
        main: `開発サービス`,
        sub: `・やりたいことが固まっている企業様`,
        img: 'https://eggsystem.co.jp/image/icon_service04.png',
        price: `都度お見積り`
      }
    }
  })
}
</script>

<style scoped>
.sub {
  margin-top: 30px;
  width: 100%;
  background-color: #1f55a5;
}
.subDescription {
  width: 100%;
  margin: 20px auto;
}
</style>
