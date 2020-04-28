<template>
  <div>
    <the-sub-header text="システム開発" />
    <div class="columns reverse">
      <div class="column is-half">
        <figure class="image">
          <img :src="developmentImage">
        </figure>
      </div>
      <div class="column is-half">
        <div class="message">
          ご要望に合わせてスクラッチやWebシステムや業務システムの開発を行います。
        </div>
        <div class="message">
          システム開発することが目的ではないため、検討した結果「システム開発は行わずに簡易的なツールを使いましょう」という
          ご提案をさせて頂くこともあります。
        </div>
        <div class="link">
          <nuxt-link v-scroll-to="'.cases'" to class="button is-dark">
            <span class="link-message">事例紹介へ</span>
            <span class="column-arrow" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="columns table">
      <div class="column is-4 left">
        <div class="table-content type-of-contract">
          <h6>契約形態</h6>
          <div>
            <p>- 請負契約</p>
            <p>要件がある程度決まっている場合、事前にお見積りさせて頂いた上で対応いたします。</p>
          </div>
          <div>
            <p>- 準委任契約</p>
            <p>要件がまだ決まっていない場合、「どういうシステムを開発すべきか」という上流フェーズから対応いたします。</p>
          </div>
        </div>
        <div class="table-content duration-cost">
          <h6>参考期間/費用</h6>
          <p>- 都度お見積りさせて頂きます。</p>
          <p class="note message">※お問い合わせは<nuxt-link to="/contact">こちら</nuxt-link></p>
        </div>
      </div>
      <div class="column is-8">
        <div class="table-content wont-todo">
          <h6>当社がやらないこと</h6>
          <div class="wont-todo-item">
            <div class="item1">
              <p class="item-title">〇言われたことだけをやる</p>
              <p class="item-detail">
                お客様から言われたことをそのまま対応するのではなく、お客様の立場にたって「何のために必要か？」「本当に必要か？」ということを考え、
                当社から「こうした方がより良い効果が得られます」というご提案をしながら進めます。
              </p>
            </div>
            <div class="item2">
              <p class="item-title">〇開発したら終わり</p>
              <p class="item-detail">
                システムを開発し納品することがゴールではなく、お客様にとってはシステム納品がスタートです。
                そのため、開発よりも「開発後」を第一に考えて運用保守まで一貫して行います。
              </p>
            </div>
            <div class="item3">
              <p class="item-title">〇システムのことだけを考える</p>
              <p class="item-detail">
                システムは単なるツールです。どの業務でどうやってシステムを使うかということが重要ですので、
                「業務」と「システム」の両面からサポートいたします。
              </p>
            </div>
          </div>
        </div>
        <div class="table-content target-system">
          <h6>対象システム</h6>
          <div>
            <p>- 業務システム（販売管理、顧客管理、予約管理、等）</p>
            <p>- Webシステム（Webアプリケーション、ECサイト、サーバー構築支援、等）</p>
            <p>- 業務システム連携用API&nbsp;など</p>
            <p class="note">※上記以外のシステム開発の対応可否については<nuxt-link to="/contact">こちらから</nuxt-link>ご相談ください</p>
          </div>
        </div>
        <div class="table-content deliverables">
          <h6>成果物</h6>
          <p>- 設計書</p>
          <p>- 開発したプログラム</p>
        </div>
      </div>
    </div>
    <the-case :cases="cases" class="cases lightgray-underline"/>
  </div>
</template>

<script>
import TheSubHeader from '~/components/pages/service/common/TheSubHeader.vue'
import TheCase from '~/components/pages/service/common/TheCase.vue'
import developmentImage from '~/assets/service/img/service-system01.JPG'
import developmentCases from '~/assets/service/js/DevelopmentCases.js'

export default {
  components: {
    TheSubHeader,
    TheCase
  },
  data: () => ({
    developmentImage,
    cases: developmentCases.cases
  })
}
</script>
<style lang="scss" scoped>
div {
  letter-spacing: 1px;
}
.columns {
  margin: auto;
  margin-top: 1rem;
}
.note {
  margin-left: 1rem;
}
.message {
  background-color: inherit;
  line-height: 1.25 !important;
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
    margin-bottom: 0.5rem;
  }
}
.content-item {
  display: inline-block;
  margin-left: 1rem;
  margin-right: 2rem;
  p::after {
    content: '';
    position: absolute;
    left: 1.25rem;
    right: 0;
    width: 0.75rem;
    margin-top: 1rem;
    border-bottom: 1px solid black;
  }
}
.columns {
  .column {
    position: relative;
  }
  .is-half {
    padding: 2rem;
    padding-top: 1rem;
  }
}
.type-of-contract::after {
  position: absolute;
  content: '';
  width: 80%;
  height: 1px;
  background: $lightgray;
  margin-top: 0.5rem;
}
.lightgray-underline {
  margin-bottom: 3rem;
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
  .reverse {
    flex-direction: row-reverse;
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
.wont-todo::after {
  position: absolute;
  content: '';
  width: 80%;
  height: 1px;
  background: $lightgray;
  margin-top: 0.5rem;
}
.target-system::after {
  position: absolute;
  content: '';
  width: 80%;
  height: 1px;
  background: $lightgray;
  margin-top: 0.5rem;
}
.content-description {
  display: inline-block;
}
.item-detail {
  margin-left: 1rem;
}
</style>
