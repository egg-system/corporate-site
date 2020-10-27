<template>
  <div class="service-details-area">
    <h3 class="table-title">
      IT戦略/IT投資計画策定サービス
      <br class="sp">
      <span @click="isOpenedStrategy = !isOpenedStrategy">
        {{ isOpenedStrategy ? '−' : '＋' }} 詳しく見る
      </span>
    </h3>
    <div v-if="isOpenedStrategy" class="columns table">
      <div class="column is-4 left">
        <div class="table-content target">
          <h6>対象者</h6>
          <p>- 情報システム部門の人数が3名以下の企業様</p>
          <p>- IT中長期計画を策定されていない企業様</p>
          <p>- Excelや簡易的なシステム等をメインに運用しており、本格的なシステム導入をご検討されている企業様</p>
          <p> -既存システムのリプレイスをご検討されている企業様</p>
        </div>
        <div class="table-content duration-cost">
          <h6>参考期間/費用</h6>
          <p>- 約2～3ヶ月程度</p>
          <p>- 約100万円～500万円程度</p>
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
            <div class="columns five-ws">
              <div class="column is-2 item-5w">- Why</div>
              <div class="column description">目的（何のためにシステムを導入するか）</div>
            </div>
            <div class="columns five-ws">
              <div class="column is-2 item-5w">- What</div>
              <div class="column description">導入予定の対象システム</div>
            </div>
            <div class="columns five-ws">
              <div class="column is-2 item-5w">- When</div>
              <div class="column description">各システムの導入スケジュール</div>
            </div>
            <div class="columns five-ws">
              <div class="column is-2 item-5w">- Who</div>
              <div class="column description">各システムの導入ベンダー</div>
            </div>
            <div class="columns five-ws">
              <div class="column is-2 item-5w">- Where</div>
              <div class="column description">インフラ・ネットワーク環境</div>
            </div>
            <div class="columns five-ws">
              <div class="column is-2 item-2h">- How</div>
              <div class="column description">システム導入方法（進め方）</div>
            </div>
            <div class="columns five-ws">
              <div class="column is-2 item-2h">- How Much</div>
              <div class="column description">概算費用に基づく投資計画</div>
            </div>
            <div class="columns five-ws">
              <div class="column is-2 item-1e">- Effect</div>
              <div class="column description">導入効果の試算</div>
            </div>
          </div>
        </div>
        <div class="table-content service-process">
          <h6>サービスの進め方</h6>
          <div>
            <p>Step 1&nbsp;&nbsp;現状分析</p>
            <p>Step 2&nbsp;&nbsp;あるべき姿（ToBeモデル）の策定</p>
            <p>Step 3&nbsp;&nbsp;IT戦略/IT投資計画の策定</p>
            <p>Step 4&nbsp;&nbsp;ベンダー選定・評価</p>
          </div>
        </div>
        <div class="table-content deliverables">
          <h6>成果物</h6>
          <p>- IT戦略/IT投資計画書</p>
          <p>- 現状分析結果資料</p>
          <p>- 打ち合わせ議事録&nbsp;&nbsp;など</p>
          <p class="note">※その他、必要に応じて資料を作成します</p>
        </div>
      </div>
    </div>
    <h3 class="table-title">
      内部統制（ガバナンス）支援サービス
      <br class="sp">
      <span @click="isOpenedGovernance = !isOpenedGovernance">
        {{ isOpenedGovernance ? '−' : '＋' }} 詳しく見る
      </span>
    </h3>
    <div v-if="isOpenedGovernance" class="columns table">
      <div class="column is-4 left">
        <div class="table-content target">
          <h6>対象者</h6>
          <p>- 内部統制の整備・強化を行いたいが、何から始めれば良いか分からない企業様またはリソースが不足している企業様</p>
          <p>- 今後IT監査を受ける予定の企業様</p>
          <p>- IT監査でIT統制に関する指摘を受けている企業様</p>
        </div>
        <div class="table-content duration-cost">
          <h6>参考期間/費用</h6>
          <p>- 約1ヶ月～3ヶ月程度</p>
          <p>- 約60万円～180万円程度</p>
          <p class="note">※1～3ヶ月単位でのご契約となります。</p>
        </div>
      </div>
      <div class="column is-8">
        <div class="table-content service-content">
          <h6>サービス内容</h6>
          <p class="long">
            IT統制には「IT全社統制」「IT全般統制」「IT業務処理統制」の3つがあります。IT統制を整備するためには、ITシステム毎にアクセス管理や変更管理等のルールを定め、統制の仕組みを構築する必要があります。
            <br>
            IT統制を整備するためには、内部統制に関する知識はもちろんのこと、IT技術に関する知識も必要となります。なぜなら、体裁を整えただけの文書を用意することだけが目的ではなく、ITシステム毎の具体的な仕組みの構築が重要だからです。
            <br><br>
            当社では過去の実績やIT技術の知識をもとに、IT統制の評価から対策実施支援まで行います。
            <br>
            ・現状調査<br>
            ・IT全般統制整備<br>
            ・IT統制に関する規程や手順書の作成<br>
            ・IT統制の評価<br>
            ・改善策の立案および実施支援<br>
          </p>
        </div>
        <div class="table-content deliverables">
          <h6>成果物</h6>
          <p>- 各種方針や規程</p>
          <p>- 運用手順書</p>
          <p>- フローチャート、業務記述書、リスクコントロールマトリックス</p>
          <p>- IT統制の評価結果&nbsp;&nbsp;など</p>
          <p class="note">※その他、必要に応じて資料を作成します</p>
        </div>
      </div>
    </div>
    <h3 class="table-title">
      RPA導入サービス
      <br class="sp">
      <span @click="isOpenedRpa = !isOpenedRpa">
        {{ isOpenedRpa ? '−' : '＋' }} 詳しく見る
      </span>
    </h3>
    <div v-if="isOpenedRpa" class="columns table">
      <div class="column is-4 left">
        <div class="table-content target">
          <h6>対象者</h6>
          <p>- 手作業で行う単純作業に時間がかかっており、効率化を図りたい企業様</p>
        </div>
        <div class="table-content duration-cost">
          <h6>参考期間／費用</h6>
          <p>- 3ヶ月〜</p>
          <p>- 約10万円／月</p>
          <p class="note">※都度お見積りさせていただきます。</p>
          <p class="note">※別途、RPAツールのライセンス費用が発生します。</p>
        </div>
      </div>
      <div class="column is-8">
        <div class="table-content service-content">
          <h6>サービス内容</h6>
          <p>RPAを導入し、今まで手作業で対応していた業務を自動化します。</p>
          <p>
            世の中にはRPAソリューションがたくさんありますので、
            まずは貴社にあったRPAを選定します。
            導入するRPAが決まったら、自動化する業務範囲を定めてから、RPA構築を行います。
          </p>
        </div>
        <div class="table-content deliverables">
          <h6>成果物</h6>
          <p>- 構築したRPA</p>
          <p>- 業務フロー</p>
          <p>- 社内向け手順書またはマニュアル</p>
          <p class="note">※その他、必要に応じて資料を作成します</p>
        </div>
      </div>
    </div>
    <h3 class="table-title">
      個別システム開発
      <br class="sp">
      <span @click="isOpenedDevelopment = !isOpenedDevelopment">
        {{ isOpenedDevelopment ? '−' : '＋' }} 詳しく見る
      </span>
    </h3>
    <div v-if="isOpenedDevelopment" class="columns table">
      <div class="column is-4 left">
        <div class="table-content target">
          <h6>契約形態</h6>
          <p>- 請負契約</p>
          <p>
            要件がある程度決まっている場合、事前にお見積りさせていただいた上で対応いたします。
          </p>
          <p>- 準委任契約</p>
          <p>
            要件がまだ決まっていない場合、「どういうシステムを開発すべきか」
            という上流フェーズから対応いたします。
          </p>
        </div>
        <div class="table-content duration-cost">
          <h6>参考期間/費用</h6>
          <p>- 約6ヶ月～1年程度</p>
          <p class="note">
            ※お問い合わせは<nuxt-link to="/contact">こちら</nuxt-link>
          </p>
        </div>
      </div>
      <div class="column is-8">
        <div class="table-content development-content service-content">
          <h6>当社がやらないこと</h6>
          <p>○言われたことだけをやる</p>
          <p class="long">
            お客様から言われたことをそのまま対応するのではなく、
            お客様の立場にたって、「何のために必要か？」「本当に必要か？」ということを考え、
            当社から「こうした方がより良い効果が得られます」というご提案をしながら進めます。
          </p>
          <p>○開発したら終わり</p>
          <p class="long">
            システムを開発し納品することがゴールではなく、お客様にとっては納品がスタートです。
            そのため、開発よりも「開発後」を第一に考えて運用保守まで一貫して行います。
          </p>
          <p>○システムのことだけを考える</p>
          <p class="long">
            システムは単なるツールです。どの業務でどうやってシステムを使うかということが重要ですので、
            「業務」と「システム」の両面からサポートいたします。
          </p>
        </div>
        <div class="table-content service-content">
          <h6>対象システム</h6>
          <p>- 業務システム（販売管理、顧客管理、予約管理、等）</p>
          <p>- Webシステム（Webアプリケーション、ECサイト、サーバー構築支援、等）</p>
          <p>- 業務システム連携用API&nbsp;など</p>
          <p>- 議題管理表&nbsp;&nbsp;など</p>
          <p class="note">
            ※上記以外のシステム開発の対応可否については、
            <nuxt-link to="/contact">こちら</nuxt-link>
            からご相談ください
          </p>
        </div>
        <div class="table-content">
          <h6>成果物</h6>
          <p>- 設計書</p>
          <p>- 開発したプログラム</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheSubHeader from '~/components/pages/service/common/TheSubHeader.vue'
import BlackLink from '~/components/atoms/BlackLink.vue'
import consultingImage from '~/assets/service/img/service-consult01.JPG'

export default {
  components: {
    TheSubHeader,
    BlackLink
  },
  data: () => ({
    consultingImage: consultingImage,
    isOpenedStrategy: false,
    isOpenedSystem: false,
    isOpenedGovernance: false,
    isOpenedRpa: false,
    isOpenedDevelopment: false
  })
}
</script>

<style lang="scss" scoped>
.service-details-area {
  margin-bottom: 3rem;
}

div {
  letter-spacing: 1px;
}
.columns {
  margin: auto;
  margin-top: 1rem;
  .is-half {
    padding: 2rem;
    padding-top: 1rem;
  }
}
.note {
  margin-left: 1rem;

  a {
    text-decoration: underline;
  }
}
.message {
  background-color: inherit;
  line-height: 1.25 !important;
}
.margin-bottom-3 {
  margin-bottom: 3rem;
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
.table {
  border: 1px solid $lightgray;
  @media screen and (min-width: 770px) {
    margin: 2rem 3rem 3rem;
  }

  .column {
    padding: 0px;
  }
}
.table-title {
  margin-bottom: 1rem;

  span {
    font-size: 1.2rem;
    @media screen and (min-width: 770px) {
      margin-left: 2rem;
    }
  }

  @media screen and (min-width: 770px) {
    .sp {
      display: none;
    }
  }

  @media screen and (max-width: 769px) {
    line-height: 3rem;
  }
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
.service-5w2h1e {
  position: relative;
  .columns {
    margin: 0;
    margin-left: 1rem;
  }
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
}
.item-5w::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 0.75rem;
  right: 0;
  width: 0.75rem;
  margin-top: 1rem;
  border-bottom: 1px solid black;
}
.item-2h::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 0.75rem;
  right: 0;
  width: 0.68rem;
  margin-top: 1rem;
  border-bottom: 1px solid black;
}

.item-1e::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 0.75rem;
  right: 0;
  width: 0.55rem;
  margin-top: 1rem;
  border-bottom: 1px solid black;
}
.target::after {
  position: absolute;
  content: '';
  width: 85%;
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
  .reverse {
    flex-direction: row-reverse;
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
  .five-ws {
    margin-bottom: 0.25rem;
    .description {
      margin-left: 1rem;
    }
  }
}
.service-content::after,
.service-process::after {
  position: absolute;
  content: '';
  width: 90%;
  height: 1px;
  background: $lightgray;
  margin-top: 1rem;
}
.content-description {
  display: inline-block;
}
.item-detail {
  margin-left: 1rem;
}
.development-content {
  p {
    margin-bottom: 1rem;
  }
  .long {
    margin-left: 1rem;
  }
}
</style>
