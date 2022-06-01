<template>
  <div>
    <div class="it-control-service content page-content">
      <the-hero-title main-text="サービス紹介" />
      <section class="service-detail-section">
        <the-sub-header text="IT統制サポート" />
        <h3>
          上場監査をクリアし監査法人からの指摘ゼロを実現した実績から、<br class="pc-br">資金調達後のベンチャー企業向けに安全面と運用面を考慮した<br class="pc-br">IT統制の対応を全て引き受けます。
        </h3>
        <div>
          <div class="service-links">
            <div class="link-wrapper">
              <nuxt-link
                to="#it-control-service-menu"
                class="case-button button is-dark"
              >
                <span class="link-message">サービスメニュー・料金プラン</span>
              </nuxt-link>
            </div>
            <div class="link-wrapper">
              <nuxt-link to="#it-control-performance" class="case-button button is-dark">
                <span class="link-message">作業実績・成果物</span>
              </nuxt-link>
            </div>
            <div class="link-wrapper">
              <nuxt-link to="#it-control-examlpe" class="case-button button is-dark">
                <span class="link-message">対応例</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <br class="br-sp">
      <section>
        <the-sub-header text="以下の課題を抱える上場準備会社様向け" />
        <div class="service-target columns">
          <div class="column second is-5">
            <img :src="itControllImage">
          </div>
          <div class="service-target-feature column first is-7">
            <ul>
              <li>内部統制（J-SOX）への対応が必要だが対応できるリソースがない</li>
              <li>
                情報システムに関する規程や手順書が整備されていないが、IT統制への対応に出来るだけ社内リソースを使いたくない
              </li>
              <li>
                監査法人から指摘を受けており、ITシステムの環境構築、運用ルール策定、書類整備に追われている
              </li>
              <li>
                評価が形式的になっており、実態に即した内部統制が整備されていない
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br class="br-sp">
      <section class="service-reason-section">
        <the-sub-header text="なぜIT統制サポートを外注すべきなのか？" />
        <div class="service-reason-detail">
          <div>
            <h3>○柔軟な稼働により最小限コストで対応が可能</h3>
            <br>
            <div class="service-reason-content">
              <p>
                ベンチャー企業では、経営陣の1人や管理部門の担当者が片手間で内部統制（IT統制）への対応を行うことが少なくありません。1人月の正社員というリソースまでは必要ないからです。
              </p>
              <p>
                仮に内部統制（IT統制）を整備する人材を採用する場合、以下のスキルや経験が必要です。<br>
                ・ インフラからアプリケーションまでの幅広いIT知識<br>
                ・ 業務プロセスの知識<br>
                ・ 運用ルール検討後の各部門との調整スキル<br>
                ・ システム監査や内部監査等、監査に関する経験<br>
                ・ 規程や運用手順書の作成経験<br>
              </p>
              <p>
                上記に相当する職種はITコンサルタントで、採用する場合の年収は約700万円です。社会保険料などを含めると会社が負担する費用は、年間約1,000万円です。固定費で年間1,000万円を投資するよりは、週数日間の稼働で柔軟に対応できる外部リソースを使った方がコストを抑制することが可能です。
              </p>
            </div>
          </div>
          <div>
            <h3>○客観的立場から安全性と効率性のバランスを取ることができる</h3>
            <br>
            <div class="service-reason-content">
              <p>
                内部統制（IT統制）で陥りがちな失敗は以下の2点です。<br>
                ・ 安全性を考慮しすぎて、手順や承認プロセスが多くなり業務が非効率になる<br>
                ・ 効率性を考慮しすぎて、監査法人からの指摘をクリアできない<br>
              </p>
              <p>
                社内だけで対応すると各部門との利害関係があるため、「自部門に負荷がかからないように」「立場の強い部門に負荷がかからないように」「責任が問われないように」といった　ように進めてしまう可能性があります。
              </p>
              <p>
                安全性と効率性のバランスを取りながら内部統制（IT統制）を整備するためには、第三者の存在が必要です。客観的な立場から参画することで、全体最適の視点で推進することができるためです。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="it-control-service-menu">
        <the-sub-header text="サービスメニュー・料金プラン" />
        <div class="columns">
          <the-service-menu-table />
        </div>
        <p>
          整備状況の評価、各種規程・運用手順書・業務記述書・業務フロー図・RCMの作成、監査法人からの質問対応、社員への教育など、IT統制（IT全社統制、IT全般統制、IT業務処理統制）に関する業務は全て対応します。
        </p>
      </section>
      <section id="it-control-performance">
        <the-sub-header text="IT統制サポート 作業実績・成果物" />
        <the-service-performance />
      </section>
      <section id="it-control-examlpe">
        <the-sub-header text="対応例" />
        <a
          href="../_nuxt/assets/service/img/it-control-example2.png"
          target="blank"
          alt="IT統制サポートの対応例"
        >
          <img :src="itControllExampleImage" class="it-control-examlpe-img" >
        </a>
      </section>
      <section>
        <the-sub-header text="IT統制サポート実績" />
        <div class="case-list-wrapper">
          <the-case-list :cases="cases" />
        </div>
      </section>
      <div class="contact-area">
        <the-contact>
          資金調達後のベンチャー企業様に対し、<br>
          IT統制の対応を全て引き受けます。<br>
          お気軽にご相談ください。
        </the-contact>
      </div>
      <div class="link-area">
        <the-service-links />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchCmsListDataCaseByIds } from '~/lib/cms'
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/service/common/TheSubHeader.vue'
import itControllImage from '~/assets/service/img/it-control.JPG'
import TheServiceMenuTable from '~/components/pages/service/it-control/TheServiceMenuTable.vue'
import TheServicePerformance from '~/components/pages/service/it-control/TheServicePerformance.vue'
import itControllExampleImage from '~/assets/service/img/it-control-example2.png'
import TheCaseList from '~/components/pages/common/TheCaseList.vue'
import TheContact from '~/components/pages/top/TheContact.vue'
import TheServiceLinks from '~/components/pages/service/common/TheServiceLinks.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheServiceMenuTable,
    TheServicePerformance,
    TheCaseList,
    TheContact,
    TheServiceLinks
  },
  async asyncData() {
    const data = await fetchCmsListDataCaseByIds(['innophys','internet-ipo'])
    return { cases: data.listData }
  },
  computed: {
    itControllImage() {
      return itControllImage
    },
    itControllExampleImage() {
      return itControllExampleImage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/service/scss/service-detail-page.scss';
@import '~/assets/service/scss/service-footer.scss';

.service-target {
  @media screen and (min-width: 1024px) {
    margin: 2rem 2rem 6rem;
  }

  li {
    list-style: '✔';
    margin: 1.5rem 0px;
  }
}

.service-menu-description {
  display: flex;
  flex-flow: column;
  justify-content: center;

  p {
    margin-bottom: 2rem;
  }
}

#it-control-performance {
  margin-bottom: 6rem;
}

#it-control-examlpe {
  margin-bottom: 6rem;
}

.it-control-examlpe-img {
  @media screen and (min-width: 1024px) {
    max-width: 80%;
    margin-left: 10%;
  }
}

.case-list-wrapper {
  margin-top: 2rem;
}
</style>
