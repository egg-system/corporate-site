<template>
  <div>
    <div class="columns">
      <div class="column is-half">
        <h2>業界特化型<br>システムコンサルティングサービス</h2>
        <div class="message">
          サロン・整体・エステ・接骨院・マッサージ・トレーニングジムの業界に特化したコンサルティングサービスを行っています。<br>
          事業戦力の策定や集客の支援から、手間がかかるホームページ等のシステム面のサポートまでオールインワンで行います。
        </div>
        <div class="message">まずは問い合わせフォームよりお気軽にご相談ください。</div>
      </div>
      <div class="column is-half">
        <figure class="image special-consulting">
          <img :src="specialConsultingImage">
        </figure>
      </div>
    </div>
    <div>
      <h3 class="table-title">サロン業界特化型コンサルティングサービス</h3>
      <div class="columns table">
        <div class="column is-4 left">
          <div class="table-content target">
            <h6>対象者</h6>
            <p>- サロン・整体・エステ・接骨院・マッサージ・トレーニングジムの事業を行っているオーナー様</p>
            <p>- 売上100万円/月を目指して事業を行っているオーナー様</p>
          </div>
          <div class="table-content duration-cost">
            <h6>参考期間/費用</h6>
            <p>- 約3か月～約6か月程度</p>
            <p>- 約5万円～10万円程度/月</p>
            <p class="note">※1か月単位でのご契約となります。</p>
          </div>
        </div>
        <div class="column is-8">
          <div class="table-content service-content">
            <h6>サービス内容</h6>
            <p>
              1年以内の廃業率60%、3年以内の廃業率90%という厳しい現実に向かっていくために『施術以外の不安をゼロ』にすべく、下記サービスをご提供します。
            </p>
            <div class="service-content-item">
              <p>- 実現したい目標や店舗についてのヒアリング</p>
              <p>- 来店してほしい顧客像の作成</p>
              <p>- 他店と差別化するコンセプトの策定</p>
              <p>- 集客導線及び集客方法の設計</p>
              <p>- 予約から会計まで一貫したオペレーションの実現</p>
              <p>- 豊富な他者事例のご提供</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half">
        <figure class="image salon">
          <img :src="salonImage">
        </figure>
      </div>
      <div class="column is-half">
        <h3>当社が運営するオウンドメディア</h3>
        <div class="message">
          サロンオーナー様にとってできるだけ負担なく手軽に情報を収集できる場所として、
          当社が持つノウハウを駆使してメディアサイト「EGG」を立ち上げました。
        </div>
        <div class="message">
          サロン開業メディア「EGG」では、主にサロンオーナー様へのインタビュー記事を掲載し、
          店舗運営において上手くいったことや上手くいかなかったことをリアルにお伝えしています。
        </div>
        <div class="link">
          <a class="button is-dark" href="https://media.eggsystem.co.jp/">
            <div class="link-message">メディアサイトへ</div>
            <div class="arrow">></div>
          </a>
        </div>
      </div>
    </div>
    <the-case :cases="cases"/>
  </div>
</template>

<script>
import TheCase from '~/components/pages/service/common/TheCase.vue'
import specialConsultingImage from '~/assets/service/img/request-service4.png'
import salonImage from '~/assets/service/img/service-salon.png'
import specialConsultingCases from '~/assets/service/js/SpecialConsultingCases.js'
export default {
  components: {
    TheCase
  },
  data: () => ({
    specialConsultingImage,
    salonImage,
    cases: specialConsultingCases.cases
  })
}
</script>

<style lang="scss" scoped>
.link {
  max-width: 30rem;
  margin: auto;
  width: 100%;
}
.note {
  margin-left: 1rem;
}
.columns {
  margin-top: 1rem;
  margin-bottom: 3rem;
  .column {
    position: relative;
    div {
      line-height: 1.75;
    }
  }
}
.salon {
  margin: auto;
}
.table {
  border: 1px solid $lightgray;
  margin: 0px;
  margin-bottom: 3rem;
  .column {
    padding: 0px;
  }
}
.table-title {
  margin-bottom: 1rem;
}
.table-content {
  margin: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  line-height: 2rem;
  div {
    font-size: 14px;
  }
  p {
    font-size: 14px;
    margin-bottom: 0.25rem;
  }
}
.service-content-item {
  margin-left: 1rem;
}
.message {
  background-color: inherit;
  line-height: 1.25 !important;
}
.target::after {
  position: absolute;
  content: '';
  width: 80%;
  height: 1px;
  background: $lightgray;
  margin-top: 1rem;
}
@media screen and (min-width: 769px) {
  .left::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 90%;
    top: 5%;
    right: 0;
    background: $lightgray;
  }
}
@media screen and (max-width: 768px) {
  .duration-cost::after {
    position: absolute;
    content: '';
    width: 80%;
    height: 1px;
    background: $lightgray;
    margin-top: 0.5rem;
  }
}
</style>
