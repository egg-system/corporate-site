<template>
  <div class="about">
    <div class="value-container">
      <div class="value-inner">
        <div class="value-image">
          <figure class="image">
            <img :src="image1">
          </figure>
        </div>
        <h3 class="value-message">
          システムを売らない<br class="pc-br">中立的な立場
        </h3>
        <p class="text">
          弊社はシステムの販売を行っておらず、システムの開発もゴールにしていません。
          目的はお客様が抱える課題の解決であり、システムはあくまでも課題解決の手段の一つと捉えています。特定のシステムやサービスに縛られることなく、常に中立的な立場でお客様にとって最適な手段を選択します。
        </p>
      </div>
      <div class="value-inner">
        <div class="value-image">
          <figure class="image">
            <img :src="image2">
          </figure>
        </div>
        <h3 class="value-message">
          コンサルと開発の<br>豊富な経験とノウハウ
        </h3>
        <p class="text">
          メンバー全員がコンサルティング・エンジニアの経験とスキルを持っています。
          社員だけでなくフリーランスで活動する優秀な人材も集め、IT戦略策定や業務分析といった企画フェーズから、システム導入やユーザ教育といった開発・運用フェーズまで一貫して対応しています。
        </p>
      </div>
      <div class="value-inner">
        <div class="value-image">
          <figure class="image">
            <img :src="image3">
          </figure>
        </div>
        <h3 class="value-message">
          アドバイスで終わらない<br class="pc-br">&nbsp;
        </h3>
        <p class="text">
          ベンチャー・中小企業では、実務をこなすリソースも不足しているため、ノウハウやアドバイスの提供だけでは課題解決しません。現場へ入り込み、幅広い経験とスキルに基づきアドバイスから実務まで行うことで、徹底的に顧客へ寄り添った支援をしています。
        </p>
      </div>
    </div>
    <div class="link">
      <br class="pc-br">
      <a class="button is-dark" href="https://eggsystem.co.jp/service/">
        サービス詳細へ
      </a>
      <br class="pc-br">
      <br class="pc-br">
    </div>
    <div class="secline">
      <the-contact />
    </div>
  </div>
</template>

<script>
import strongImages from '~/assets/js/about-value.js'
import TheContact from '~/components/pages/top/TheContact.vue'
export default {
  components: {
    TheContact
  },
  data() {
    return {
      image1: strongImages.strongImage1,
      image2: strongImages.strongImage2,
      image3: strongImages.strongImage3
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  border-bottom: 1px solid $lightgray;
  padding-bottom: 80px;
}
.value-container {
  display: flex;
  justify-content: space-between;
}
.value-inner {
  width: 25%;
  border-bottom: 1px solid $lightgray;
  padding-bottom: 15px;
}
.image {
  margin: 0;
}
.value-message {
  font-size: 1.125rem;
  text-align: center;
}
.value-message p {
  text-align: center;
}
.text {
  font-size: 0.875rem;
  line-height: 32px;
}
.link {
  width: 30rem;
  margin: 30px auto;
}
.secline {
  border-top: 1px solid $lightgray;
}
@media screen and (max-width: 768px) {
  .about {
    border-bottom: none;
  }
  .value-container {
    display: block;
  }
  .value-inner {
    width: 100%;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .sp {
    display: none;
  }
  .link {
    width: 10rem;
  }
}
</style>
