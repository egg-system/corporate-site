<template>
  <div class="consuling-engineer-page">
    <div class="content page-content">
      <the-hero-title main-text="サービス紹介" />
      <section class="service-detail-section">
        <the-sub-header text="コンサルティングエンジニアサービス" />
        <h3 class="service-description">
          売上拡大・利益率向上を目的としてITシステムを活用するために<br class="pc-br">システム化の企画から開発・運用まで<br class="br-pc">徹底的にベンチャー・中小企業様へ寄り添って対応します。
        </h3>
        <div class="service-links">
          <div class="link-wrapper">
            <nuxt-link
              to="#service-scope"
              class="case-button button is-dark"
            >
              <span class="link-message">対応範囲</span>
            </nuxt-link>
          </div>
          <div class="link-wrapper">
            <nuxt-link to="#service-menu" class="case-button button is-dark">
              <span class="link-message">サービスメニュー・料金プラン</span>
            </nuxt-link>
          </div>
          <div class="link-wrapper">
            <nuxt-link to="#service-performance" class="case-button button is-dark">
              <span class="link-message">作業実績</span>
            </nuxt-link>
          </div>
        </div>
      </section>
      <br class="br-sp">
      <section class="service-target-section">
        <the-sub-header text="こういった課題を抱える企業様向け" />
        <div class="columns">
          <div class="service-image-wrapper column second is-5">
            <img :src="consultingEngineerImage">
          </div>
          <div class="column first is-7">
            <ul>
              <li>紙や手作業が多く残っており社内のデジタル化が進んでいない</li>
              <li>
                電子帳簿保存法やインボイス制度などの法対応が進められていない
              </li>
              <li>
                テレワークを進めたいが、セキュリティに懸念があり進められていない
              </li>
              <li>
                業務分析やソリューション選定などの超上流工程の経験やノウハウがなく基幹システムの刷新を進められない
              </li>
              <li>
                システム導入プロジェクトが遅延しており上手くいっていない
              </li>
              <li>
                売上が拡大しているため、増加する受注に耐えられるようにバックヤード業務を効率化したい
              </li>
              <li>
                手を動かせる人材が不足している
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br>
      <section class="service-reason-section">
        <the-sub-header
          text="なぜ、ベンチャー・中小企業にコンサルティングエンジニアサービスが必要なのか？"
        />
        <div class="service-reason-detail">
          <section>
            <h3>
              ○ベンチャー・中小企業では「業務」「システム」に関する幅広い知識と経験が必要
            </h3>
            <br>
            <div class="service-reason-content">
              <p>
                ベンチャー・中小企業では多岐にわたる課題へ対応する必要があります。<br>
                ECサイトを立ち上げて販路を拡大していきたいという攻めのIT活用もあれば、経理業務を効率化して残業時間を減らしたいという守りのIT活用もあります。リモートワークをするためにネットワーク環境やPC環境を整備したいというケースもあります。
              </p>
              <p>
                多岐にわたる課題へ対応するためには、販売・購買・会計・経理・経営管理・在庫管理・生産管理といった業務から、ERP・ECサイト・ソフトウェア・ハードウェア・ネットワークといったIT知識が必要です。しかし、広汎な知識と経験を有している人材は多くありません。
              </p>
              <p>
                当社メンバーは、全員がシステムエンジニアとして開発経験を積み、システムコンサルタントとして課題解決の経験を積んでいます。広汎な知識と経験で最大限のパフォーマンスを発揮することができます。
              </p>
            </div>
          </section>
          <section>
            <h3 class="service-reason">
              ○システムありきではなく客観的な判断が必要
            </h3>
            <br>
            <div class="service-reason-content">
              <p>
                SIerなどのシステムベンダーや、パッケージ・クラウドサービス提供会社は、自社のシステムを導入することが前提となっているため、中小企業・ベンチャー企業様にとって本当に必要な課題解決になっていないというケースが見受けられます。
                システムコンサルティング会社においても、特定のサービスやソリューションを前提としたケースが多いのが実情です。
              </p>
              <p>
                当社は大手企業や特定の製品・サービスを有する企業と資本関係がなく、独立した組織です。<br>
                また、代理店ビジネスは行わず、システム導入時にメーカーや販売代理店からの紹介料を受け取っておりません。そのため、特定の商品・サービスに依存せず、中立的な立場から客観的な判断により、システムコンサルティングやシステム開発を行うことが可能です。
              </p>
            </div>
          </section>
        </div>
        <section class="about-consulting-enginner-area">
          <div class="link-wrapper">
            <nuxt-link to="/about/consulting-engineer">
              <the-link-button />
            </nuxt-link>
          </div>
        </section>
      </section>
      <section id="service-scope">
        <the-sub-header text="対応範囲" />
        <the-service-scope />
      </section>
      <section id="service-menu">
        <the-sub-header text="サービスメニュー・料金プラン" />
        <the-service-menu-table />
      </section>
      <section id="service-performance">
        <the-sub-header text="コンサルティングエンジニアサービス　作業実績" />
        <the-service-performance />
      </section>
      <section>
        <div>
          <div class="cost-compare">
            コストの比較
          </div>
          <br>
          <img :src="costCompare1Image">
          <br>
          <br>
          <img :src="costCompare2Image">
        </div>
      </section>
      <!--
      <section class="about-consultaion-wrapper">
        <the-sub-header text="『初月無料』のコンサルティングサービスです" />
        <the-about-consultation is-service-details />
      </section>
      -->
      <div class="contact-area">
        <the-contact>
          ベンチャー・中小企業様のIT活用に対し<br>
          徹底的に寄り添って対応します。<br>
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
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/service/common/TheSubHeader.vue'
import TheServiceLinks from '~/components/pages/service/common/TheServiceLinks.vue'
import consultingEngineerImage from '~/assets/service/img/consulting-engineer-image.jpg'
import TheServiceScope from '~/components/pages/service/TheServiceScope.vue'
import TheServiceMenuTable from '~/components/pages/service/consulting-engineer/TheServiceMenuTable.vue'
import TheServicePerformance from '~/components/pages/service/consulting-engineer/TheServicePerformance.vue'
import TheAboutConsultation from '~/components/pages/top/TheAboutConsultation.vue'
import TheContact from '~/components/pages/top/TheContact.vue'
import TheLinkButton from '~/components/pages/common/TheLinkButton.vue'
import costCompare1Image from '~/assets/service/img/ce-cost1.png'
import costCompare2Image from '~/assets/service/img/ce-cost2.png'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheServiceLinks,
    TheServiceScope,
    TheServiceMenuTable,
    TheServicePerformance,
    TheAboutConsultation,
    TheContact,
    TheLinkButton
  },
  computed: {
    consultingEngineerImage() {
      return consultingEngineerImage
    },
    costCompare1Image() {
      return costCompare1Image
    },
    costCompare2Image() {
      return costCompare2Image
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/service/scss/service-detail-page.scss';
@import '~/assets/service/scss/service-footer.scss';

.main {
  font-size: 0.9rem;
}

.about-consulting-enginner-area {
  text-align: right;

  .link-wrapper {
    @media screen and (min-width: 1024px) {
      width: 50%;
    }
    margin-left: auto;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 1rem;
    text-align: right;

    a {
      color: #0a0716;
    }
  }
}

.service-target-section {
  @media screen and (min-width: 1024px) {
    .columns {
      margin: 2rem;
    }
  }

  .service-image-wrapper {
    display: flex;

    img {
      object-fit: contain;
    }
  }

  li {
    list-style: '✔';
    margin: 2rem 0px;
  }
}
.cost-compare {
  font-size: 1.5rem;
}
</style>
