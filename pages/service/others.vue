<template>
  <div>
    <div class="content page-content">
      <the-hero-title main-text="サービス紹介" />
      <section class="service-detail-section">
        <the-sub-header text="個別サービス" />
        <h3>
          100名以下のベンチャー・中小企業が抱える問題を解決するために、<br class="pc-br">
          システム化の企画・導入支援・開発・運用支援など<br class="pc-br">
          システムコンサルティングとシステム開発のどちらも対応しています。
        </h3>
        <div>
          <div class="service-links">
            <div class="link-wrapper">
              <nuxt-link
                to="#other-service-menu"
                class="case-button button is-dark"
              >
                <span class="link-message">サービスメニュー・料金プラン</span>
              </nuxt-link>
            </div>
            <div class="link-wrapper">
              <nuxt-link to="#other-performance" class="case-button button is-dark">
                <span class="link-message">作業実績・成果物例</span>
              </nuxt-link>
            </div>
            <div class="link-wrapper">
              <nuxt-link to="#other-develop-performance" class="case-button button is-dark">
                <span class="link-message">システム開発実績</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <br class="sp-br">
      <section class="service-target-section">
        <the-sub-header text="こういった課題を抱える企業様向け" />
        <div class="columns">
          <div class="service-image-wrapper column second is-5">
            <img :src="otherSrviceImage">
          </div>
          <div class="column first is-7">
            <ul>
              <li>3〜5年先を見据えて、戦略的にITシステムを導入したいが計画がない</li>
              <li>10年前から使っている基幹システムを刷新したい</li>
              <li>
                社内にシステムが導入されているものの、データ活用できておらず、部分最適になってしまっているため、全体最適の視点からデータを活用できるようにしたい
              </li>
              <li>単純作業や手作業が多く、時間がかかっているため自動化したい</li>
              <li>
                コロナ禍に突貫工事でリモートワークを行ったが、セキュリティ対策をした上で継続的にリモートワークができる環境を整えたい
              </li>
              <li>
                店舗の予約システムを活用して売上を上げたいが、自社の要望にあったシステムがない
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="service-reason-section">
        <the-sub-header text="なぜベンチャー・中小企業では優秀なIT人材を外注すべきなのか？" />
        <div class="service-reason-detail">
          <div>
            <h3>○ITと業務の知識と実務ノウハウを持ち、IT企画が行うことのできるIT人材の採用は困難</h3>
            <br>
            <div class="service-reason-content">
              <p>
                国全体の問題としてIT人材が不足しています。経済産業省のデータによれば、2015年には約17万人が不足しており、2030年には約59万人のIT人材が不足すると言われています。IT化のニーズが大幅に拡大している一方で、人材育成が間に合っていないためです。
              </p>
              <p>
                また、IPA独立行政法人情報処理機構の「IT人材白書」によると、企業がIT人材に対して求めることはITに関する知識だけではなく、『問題を発見して解決する力』『業務全般の知識・実践ノウハウ』『顧客要求への対応』『自発的に動く力』であると発表されています。
              </p>
              <p>
                IT企画やユーザ部門との調整など上流工程を対応できる人材は、IT人材の中でも少ないため、自社で採用する場合は採用活動に膨大な時間を割いた上で高額な報酬を提示する必要があります。優秀なIT人材を採用することは難しいため、上流工程に対応でき経験が豊富なIT人材を業務委託という形で外注するほうが効率的かつ現実的であることがわかります。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="other-service-menu">
        <the-sub-header text="サービスメニュー・料金プラン" />
        <the-service-menu-table />
      </section>
      <section id="other-performance">
        <the-sub-header text="作業実績・成果物" />
        <the-service-performance />
      </section>
      <section id="other-develop-performance">
        <the-sub-header text="システム開発実績" />
        <the-development-performance />
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
import otherSrviceImage from '~/assets/service/img/other-service.JPG'
import TheServiceMenuTable from '~/components/pages/service/others/TheServiceMenuTable.vue'
import TheServicePerformance from '~/components/pages/service/others/TheServicePerformance.vue'
import TheDevelopmentPerformance from '~/components/pages/service/others/TheDevelopmentPerformance.vue'
import TheContact from '~/components/pages/top/TheContact.vue'
import TheServiceLinks from '~/components/pages/service/common/TheServiceLinks.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheServiceMenuTable,
    TheServicePerformance,
    TheDevelopmentPerformance,
    TheContact,
    TheServiceLinks
  },
  computed: {
    otherSrviceImage() {
      return otherSrviceImage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/service/scss/service-detail-page.scss';
@import '~/assets/service/scss/service-footer.scss';

.service-target-section {
  margin-bottom: 6rem;

  li {
    list-style: '✔';
    margin: 1.5rem 0px;
  }
}
</style>
