<template>
  <div class="consuling-engineer-page">
    <div class="content page-content">
      <the-hero-title main-text="サービス紹介" />
      <section class="service-detail-section">
        <the-sub-header text="コンサルティングエンジニアサービス" />
        <h3 class="service-description">
          売上拡大・業務効率化を目的としてITシステムを活用するために<br>
          システム化の企画から開発・運用まで<br>
          徹底的にベンチャー・中小企業様へ寄り添って対応します。
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
      <section class="service-target-section">
        <the-sub-header text="こういった課題を抱える企業様向け" />
        <div class="columns">
          <div class="service-image-wrapper column second is-5">
            <img :src="consultingEngineerImage">
          </div>
          <div class="column first is-7">
            <ul>
              <li>整体・エステ・パーソナルトレーニング等、実店舗の売上を上げたい</li>
              <li>
                競合の参入やコロナ禍により、オンラインの販売を始めたいが、
                どれぐらいの予算が必要で、何から始めればよいか分からない
              </li>
              <li>
                Amazon・楽天・Yahooなどの出店でオンラインの売り場を増やして売上を上げたいが、
                チャネルを拡大する度にそれぞれのオンラインショップで個別業務が発生し、
                手間が増えてしまうためチャネル拡大へ踏み出せない
              </li>
              <li>
                リモートワークへの切り替えに伴い、紙やFAXの業務を廃止したい<br>
                （電子帳簿法を進めたい）
              </li>
              <li>
                単純作業を自動化して、従業員満足度を向上させたいが増えるため躊躇している
              </li>
              <li>
                リモートワークを導入し、働き方改革を推進して社員採用のアピールへ繋げたい
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="service-reason-section">
        <the-sub-header
          text="なぜ、中小企業・ベンチャー企業にコンサルティングエンジニアサービスが必要なのか？"
        />
        <div class="service-reason-detail">
          <div>
            <h3>
              ○ベンチャー・中小企業では「業務」「システム」に関する幅広い知識と経験が必要
            </h3>
            <div class="service-reason-content">
              <p>
                ベンチャー・中小企業では多岐にわたる課題へ対応する必要があります。<br>
                ECサイトを立ち上げて販路を拡大していきたいという攻めのIT活用もあれば、
                経理業務を効率化して残業時間を減らしたいという守りのIT活用もありますし、
                リモートワークをするためにネットワーク環境やPC環境を整備したいというケースもあります。
              </p>
              <p>
                販売／購買、会計／経理、経営管理、在庫管理、生産管理といった業務から、
                ERP、ECサイト、ソフトウェア、ハードウェア、ネットワークといった
                広汎なIT知識と経験を有している人材は多くありません。
              </p>
              <p>
                弊社には、システムエンジニアとして開発経験を積み、
                システムコンサルタントとして課題解決の経験を積んだ人材がいますので、
                最低限のコストで最大限のパフォーマンスを発揮することができます。
              </p>
            </div>
          </div>
          <div>
            <h3 class="service-reason">
              ○システムありきではなく、客観的な判断が必要
            </h3>
            <div class="service-reason-content">
              <p>
                システムベンダーやパッケージやクラウドサービスを提供する会社では、
                システム導入が前提となっており、中小企業・ベンチャー企業様にとって
                本当に必要な課題解決になっていないケースが少なくありません。
                コンサルティング会社でも、特定のソリューションを前提としたケースも多いのが実情です。
              </p>
              <p>
                弊社は大手企業や特定の製品・サービスを有する企業と資本関係がなく、独立した組織です。
                また、代理店ビジネスは行わず、システム導入時にメーカーや販売代理店からの紹介料を受け取っておりません。
                そのため、特定の商品・サービスに依存せず、中立的な立場から客観的な判断により
                システムコンサルティングやシステム開発を行います。
              </p>
            </div>
          </div>
        </div>
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
      <section class="about-consultaion-wrapper">
        <the-sub-header text="『初月無料』のコンサルティングサービスです" />
        <the-about-consultation is-service-details />
      </section>
      <div class="contact-area">
        <the-contact />
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

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheServiceLinks,
    TheServiceScope,
    TheServiceMenuTable,
    TheServicePerformance,
    TheAboutConsultation,
    TheContact
  },
  computed: {
    consultingEngineerImage() {
      return consultingEngineerImage
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

.service-detail-section {
  text-align: center;

  .service-description {
    margin: 3rem;
    line-height: 2rem;
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

.contact-area {
  margin: 4rem 2rem;
}
</style>
