<template>
  <div>
    <div class="it-controll-service content page-content">
      <the-hero-title main-text="サービス紹介" />
      <section class="service-detail-section">
        <the-sub-header text="内部統制支援サービス" />
        <h3>
          監査法人からの指摘をゼロを達成した実績から<br>
          上場準備会社におけるIT統制を中心に<br>
          業務効率性を踏まえて実現可能な対応を行います。
        </h3>
        <div>
          <div class="service-links">
            <div class="link-wrapper">
              <nuxt-link
                to="#it-controll-service-menu"
                class="case-button button is-dark"
              >
                <span class="link-message">サービスメニュー・料金プラン</span>
              </nuxt-link>
            </div>
            <div class="link-wrapper">
              <nuxt-link to="#it-controll-performance" class="case-button button is-dark">
                <span class="link-message">作業実績・成果物</span>
              </nuxt-link>
            </div>
            <div class="link-wrapper">
              <nuxt-link to="#it-controll-examlpe" class="case-button button is-dark">
                <span class="link-message">上場準備会社の対応例</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <the-sub-header text="こういった課題を抱える企業様向け" />
        <div class="service-target columns">
          <div class="column second is-5">
            <img :src="itControllImage">
          </div>
          <div class="service-target-feature column first is-7">
            <ul>
              <li>上場準備として内部統制（J-SOX）への対応が必要だが対応できるリソースがない</li>
              <li>
                情報システムに関する規定や手順書が整備されていないが、
                IT統制への対応に出来るだけ社内リソースを使いたくない
              </li>
              <li>
                監査法人から指摘を受けており、ITシステムの環境整備、
                運用ルール策定、書類整備に追われている
              </li>
              <li>
                評価が形式的になっており、実態に即した内部統制が整備されていない
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="service-reason-section">
        <the-sub-header text="なぜ内部統制支援サービスを外注すべきなのか？" />
        <div class="service-reason-detail">
          <div>
            <h3>○過去の経験と実績に基づいた支援により、最小限コストでで対応が可能</h3>
            <div class="service-reason-content">
              <p>
                IT統制においては、「ITシステムの環境整備」「運用ルールの策定」「ドキュメントの整備」が必要です。
                これらの対応をゼロから行うと膨大な時間が必要になる上に、
                特に抑えておくべきポイントが分からないまま進めてしまうことで無駄なリソースを費やしてしまったり、
                IT統制でルールを固め過ぎてしまって実業務に支障がでてしまう、といったことが起こりえます。
              </p>
              <p>
                IT統制への対応や監査法人とのやり取りなど、過去の経験や実績に基づいた支援を行うことで、
                最小限のコストで対応することが可能です。
                具体的には、テンプレートをベースにカスタマイズすることでドキュメント整備の工数を削減し、
                特に指摘を受けやすいポイントを先回りして対応することで指摘から対応までの工数を削減することができるためです。
              </p>
            </div>
          </div>
          <div>
            <h3>○客観的な立場から判断して推進することが可能</h3>
            <div class="service-reason-content">
              <p>
                社内だけで対応してしまうと、利害関係があるため自部門に負荷がかからないようにしたり、
                責任が問われないように進めてしまう可能性があります。
                業務の効率性とのバランスを取りながら進めることは重要ですが、
                客観的な視点を持ちながら進めなければ、全体最適の対応ができません。
              </p>
              <p>
                社外から第三者的な立場から支援させていただくことで、全体最適の視点でIT統制への遵守と
                業務効率性のバランスを取りながら進めることができます。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="it-controll-service-menu">
        <the-sub-header text="サービスメニュー・料金プラン" />
        <div class="columns">
          <div class="column second is-7">
            <the-service-menu />
          </div>
          <div class="service-menu-description column first is-5">
            <p>
              IT統制（IT全社統制、IT全般統制、IT業務処理統制）への対応や、
              J-SOXへの対応として、各種規定・運用手順書・業務記述書・業務フロー図・RCM・
              災害対策計画書等の作成、社員への教育を行っていきます。
            </p>
            <p>
              IT統制を整備するためには、ITシステム毎にアクセス管理や管理変更等のルールを定め、
              統制の仕組みを構築する必要があります。
            </p>
            <p>
              IT統制を整備するためには、内部統制の知識はもちろんのこと、
              IT技術に関する知識も必要となります。
              なぜなら、体裁を整えただけの文書を用意することだけが目的ではなく、
              ITシステム毎の具体的な仕組みの構築が重要だからです。
            </p>
          </div>
        </div>
      </section>
      <section id="it-controll-performance">
        <the-sub-header text="内部統制サービス 作業実績・成果物" />
        <the-service-performance />
      </section>
      <section id="it-controll-examlpe">
        <the-sub-header text="上場準備会社の対応例" />
        <img :src="itControllExampleImage" >
      </section>
      <section>
        <the-sub-header text="内部統制支援実績" />
        <the-case-list :cases="cases" />
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
import { fetchCmsListDataCase } from '~/lib/cms'
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/service/common/TheSubHeader.vue'
import itControllImage from '~/assets/service/img/it-control.JPG'
import TheServiceMenu from '~/components/pages/service/it-controll/TheServiceMenu.vue'
import TheServicePerformance from '~/components/pages/service/it-controll/TheServicePerformance.vue'
import itControllExampleImage from '~/assets/service/img/it-control-example.png'
import TheCaseList from '~/components/pages/common/TheCaseList.vue'
import TheContact from '~/components/pages/top/TheContact.vue'
import TheServiceLinks from '~/components/pages/service/common/TheServiceLinks.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheServiceMenu,
    TheServicePerformance,
    TheCaseList,
    TheContact,
    TheServiceLinks
  },
  async asyncData() {
    const data = await fetchCmsListDataCase(3)
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

.service-detail-section {
  h3 {
    text-align: center;
    line-height: 2rem;
  }
}

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
</style>
