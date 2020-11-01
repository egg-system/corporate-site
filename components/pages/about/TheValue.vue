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
          「コンサル」「開発」の経験とスキルを持つ
        </h3>
        <p class="text">
          弊社メンバーは『コンサルティングエンジニア』（システムコンサルティング＋システム開発）と名乗っています。全員がコンサルティングとシステム開発の経験・スキルを持っているため、中長期的なIT戦略策定やシステム選定といった「企画フェーズ」から、システム導入・開発や社員へのセキュリティ教育といった「開発・運用フェーズ」まで対応することが可能です。
        </p>
      </div>
      <div class="value-inner">
        <div class="value-image">
          <figure class="image">
            <img :src="image2">
          </figure>
        </div>
        <h3 class="value-message">
          圧倒的な<br class="pc-br">コストパフォーマンス
        </h3>
        <p class="text">
          弊社は営業部門や事務部門がなく、全員が実務を担当することで間接費用を抑えています。
          大手コンサルティング会社や大手システム開発会社の約半分という報酬額で、圧倒的なコストパフォーマンスをご提供することが可能です。
        </p>
      </div>
      <div class="value-inner">
        <div class="value-image">
          <figure class="image">
            <img :src="image3">
          </figure>
        </div>
        <h3 class="value-message">
          ベンチャー・中小企業に特化<br>&nbsp;
        </h3>
        <p class="text">
          顧客の約90%が社員数100名以下のベンチャー・中小企業です。
          ベンチャー・中小企業ではノウハウの提供やアドバイスの提示だけでなく、実務をこなすリソースが不足しています。顧客企業の現場へ入り込み、幅広い経験とスキルに基づきアドバイスから実務まで行うことで、徹底的に顧客へ寄り添ったご支援をしています。
        </p>
      </div>
    </div>
    <div class="link">
      <a class="button is-dark" href="https://eggsystem.co.jp/service/">
        サービス詳細へ
      </a>
    </div>
  </div>
</template>

<script>
import strongImages from '~/assets/js/about-value.js'
export default {
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
