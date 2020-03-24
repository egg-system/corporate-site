<template>
  <div>
    <div class="columns">
      <div class="column is-half system-consulting">
        <h4 class="is-4">システムコンサルティングサービス</h4>
        <div class="message">システム導入や導入後の運用を軸に、「計画」「推進」「管理」の3つのサービスを提供します。</div>
        <div class="message">
          その他にも、お客様のご要望に合わせてカスタマイズしたサービスをご提供しますので、
          お問い合わせフォームよりお気軽にご相談ください。
        </div>
        <div class="link">
          <nuxt-link v-scroll-to="'.system-consulting-case'" to class="button is-dark">
            <div class="link-message">事例紹介へ</div> 
            <div class="arrow">></div>
          </nuxt-link>
        </div>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img :src="ConsultingImage">
        </figure>
      </div>
    </div>
    <p class="table-title is-size-5">1.&nbsp;IT戦略/IT投資計画策定サービス</p>
    <div class="columns table">
      <div class="column is-4 left">
        <div class="table-content target">
          <h6>対象者</h6>
          <p>-情報システム部門の人数が3名以下の企業様</p>
          <p>-IT中長距離計画を策定されていない企業様</p>
          <p>-Excelやシステム等をメインに運用しており、本格的なシステム導入をご検討されている企業様</p>
          <p>-既存システムのリプレイスをご検討されている企業様</p>
        </div>
        <div class="table-content duration-cost">
          <h6>参考期間/費用</h6>
          <p>-約2～3か月程度</p>
          <p>-約100万円～500万円程度</p>
        </div>
      </div>
      <div class="column is-8">
        <div class="table-content service-content">
          <h6>サービス内容</h6>
          <p class="long">
            効率よくシステム投資を行うために、システム導入に関する「5W2H1E」を可視化したIT戦略/IT投資計画を策定します。
            また、計画に沿ったシステムベンダーの選定・評価まで行い、計画を実行するフェーズまでご支援します。
          </p>
          <div class="service-5w2h1e">
            <div class="content-item">
              <p>-Why</p>
              <p>-What</p>
              <p>-When</p>
              <p>-Who</p>
              <p>-Where</p>
              <p>-How</p>
              <p>-How Much</p>
              <p>-Effect</p>
            </div>
            <div class="content-description">
              <p>目的（何のためにシステムを導入するか）</p>
              <p>導入予定の対象システム</p>
              <p>各システムの導入スケジュール</p>
              <p>各システムの導入ベンダー</p>
              <p>インフラ・ネットワーク環境</p>
              <p>システム導入方法（進め方）</p>
              <p>教育費用に基づく投資計画</p>
              <p>導入効果の試算</p>
            </div>
          </div>
        </div>
        <div class="table-content service-process">
          <h6>サービスの進め方</h6>
          <div>
            <p>Step&thinsp;1&nbsp;&nbsp;現状分析</p>
            <p>Step&thinsp;2&nbsp;&nbsp;あるべき姿（ToBeモデル）の策定</p>
            <p>Step&thinsp;3&nbsp;&nbsp;IT戦略/IT投資計画の策定</p>
            <p>Step&thinsp;4&nbsp;&nbsp;ベンダー選定・評価</p>
          </div>
        </div>
        <div class="table-content deliverables">
          <h6>成果物</h6>
          <p>-IT戦略/IT投資計画書</p>
          <p>-現状分析結果資料</p>
          <p>-打ち合わせ議事録&nbsp;&nbsp;など</p>
          <p class="note">※その他、必要に応じて資料を作成します</p>
        </div>
      </div>
    </div>
    <p class="table-title is-size-5">2.&nbsp;システム化支援/業務改善コンサルティングサービス</p>
    <div class="columns table">
      <div class="column is-4 left">
        <div class="table-content target">
          <h6>対象者</h6>
          <p>-IT戦略/IT投資計画サービスをお受け頂いた企業様</p>
          <p>-既存システムのコスト削減や業務運用の効率化を図りたい企業様</p>
        </div>
        <div class="table-content duration-cost">
          <h6>参考期間/費用</h6>
          <p>-約3か月～1年程度</p>
          <p>-約50万円～160万円程度</p>
          <p class="note">※1～3か月単位でのご契約となります。</p>
        </div>
      </div>
      <div class="column is-8">
        <div class="table-content service-content">
          <h6>サービス内容</h6>
          <p class="long">
            現場業務の問題点を明らかにしたうえで、改善に向けた対策案を策定し、実行します。<br>
            必要に応じて、新しいシステムの導入やツール開発を検討しながら、改善を行います。<br>
            既にシステムを導入することが決まっているお客様の場合は、上流工程（要求定義や要件定義）から担当させて頂き、お客様とシステムベンダーの間に入り、プロジェクト推進します。
          </p>
        </div>
        <div class="table-content service-process">
          <h6>サービスの進め方</h6>
          <div>
            <p>Step&thinsp;1&nbsp;&nbsp;現状分析</p>
            <p>Step&thinsp;2&nbsp;&nbsp;あるべき業務フロー（ToBeモデル）の策定</p>
            <p>Step&thinsp;3&nbsp;&nbsp;改善計画の策定</p>
            <p>Step&thinsp;4&nbsp;&nbsp;改善策の実行、要求定義・要件定義</p>
          </div>
        </div>
        <div class="table-content deliverables">
          <h6>成果物</h6>
          <p>-現状分析結果資料</p>
          <p>-ToBe業務フロー</p>
          <p>-打ち合わせ議事録&nbsp;&nbsp;など</p>
          <p class="note">※その他、必要に応じて資料を作成します</p>
        </div>
      </div>
    </div>
    <p class="table-title is-size-5">3.&nbsp;プロジェクトマネジメントサービス</p>
    <div class="columns table">
      <div class="column is-4 left">
        <div class="table-content target">
          <h6>対象者</h6>
          <p>-新システム導入が決まっている企業様</p>
          <p>-システム導入プロジェクトが進行中の企業様</p>
        </div>
        <div class="table-content duration-cost">
          <h6>参考期間/費用</h6>
          <p>-約6か月～1年程度</p>
          <p>-約100万円～180万円程度</p>
          <p class="note">※1～3か月単位でのご契約となります。</p>
        </div>
      </div>
      <div class="column is-8">
        <div class="table-content service-content">
          <h6>サービス内容</h6>
          <p class="long">
            QCD（品質、コスト、納期）観点で進捗や課題等を管理するだけでなく、課題解決に向けた推進や、ステークホルダー間での調整など、プロジェクトが円滑に進むようにマネジメントいたします。
          </p>
          <br>
          <p>主に以下の3点を行います。</p>
          <div class="service-content-item">
            <div class="item1">
              <p class="item-title">①レポーティング</p>
              <p class="item-detail">・プロジェクトの状況やとりまとめ、経営層やマネジメント層へ報告する</p>
              <p class="item-detail">・プロジェクト方針や戦略などをプロジェクトメンバーへ伝える</p>
            </div>
            <div class="item2">
              <p class="item-title">②サポーティング</p>
              <p class="item-detail">・プロジェクトの管理面、技術面などの支援を行う</p>
              <p class="item-detail">・発生した課題の解決に向けた推進や調整を行う</p>
            </div>
            <div class="item1">
              <p class="item-title">③ジャッジ</p>
              <p class="item-detail">・複数のステータスホルダー間で行う各種会議において、PMが欠席となった場合に代理で一次判断を行う</p>
            </div>
          </div>
        </div>
        <div class="table-content deliverables">
          <h6>成果物</h6>
          <p>-進捗管理表</p>
          <p>-予算管理表</p>
          <p>-議題管理表&nbsp;&nbsp;など</p>
          <p class="note">※その他、必要に応じて資料を作成します</p>
        </div>
      </div>
    </div>
    <the-case :cases="cases" class="system-consulting-case" />
  </div>
</template>

<script>
import TheCase from '~/components/pages/service/common/TheCase.vue'
import ConsultingImage from '~/assets/service/img/service-consult01.JPG'
import SystemConsultingCases from '~/assets/service/js/SystemConsultingCases.js'

export default {
  components: {
    TheCase
  },
  data: () => ({
    ConsultingImage,
    cases: SystemConsultingCases.cases
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
.message {
  background-color: inherit;
  line-height: 1.25 !important;
}
.columns {
  margin-bottom: 3rem;
  .column {
    position: relative;
    div {
      line-height: 1.75;
    }
  }
}
.long {
  line-height: 2;
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
  margin-bottom: 2rem;
  div {
    font-size: 0.75rem;
  }
  p {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }
}
.service-5w2h1e {
  position: relative;
  p {
    margin-bottom: 0rem;
    &:last-child {
      margin-bottom: 0.5rem;
    }
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
.target::after {
  position: absolute;
  content: '';
  width: 85%;
  height: 1px;
  background: $lightgray;
  margin-top: 0.5rem;
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
    width: 90%;
    height: 1px;
    background: $lightgray;
    margin-top: 0.5rem;
  }
}
.service-content::after {
  position: absolute;
  content: '';
  width: 90%;
  height: 1px;
  background: $lightgray;
  margin-top: 0.5rem;
}
.service-process::after {
  position: absolute;
  content: '';
  width: 90%;
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
