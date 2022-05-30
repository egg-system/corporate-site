<template>
  <section class="main-message-area">
    <p class="main-message">
      『あなたじゃないと困る。』<br>
      そう言っていただける関係を御社と築きます
    </p>
    <h2 class="main-description">
      わたしたちはベンチャー・中小企業が抱える課題を解決する<br>
      コンサルティングエンジニア集団です。<br>
      <span>
        ※ コンサルティングエンジニアとは、「システムコンサルタント」「システムエンジニア」を組み合わせた造語です
      </span>
    </h2>
    <div class="sub-description">
      コンサルティングとエンジニアリングの両軸から価値を提供し、<br class="pc-br">
      ITシステムを活用し生産性を向上することで、人口減少・働き方改革など社会の変化へ対応します。<br class="pc-br">
      中小企業のDX（デジタルトランスフォーメーション）を推進し、生産性を高め、利益を向上させます。
    </div>
    <div class="consulting-engineer-btn-wrapper">
      <nuxt-link
        to="/about/consulting-engineer"
        class="link button is-dark"
      >
        <span class="link-message">
          コンサルティングエンジニアの詳細へ
        </span>
      </nuxt-link>
    </div>
    貴社のITコストが妥当かどうか簡単に診断できる「ITコストシミュレーション」
    <div class="consulting-engineer-btn-wrapper">
      <a href="https://eggsystem.co.jp/service/it-cost-lp/" class="link button is-dark" target="blank">
        <span class="link-message">
          シミュレーションを行う（登録不要・無料）
        </span>
      </a>
    </div>
    <div class="main-image-area">
      <div class="main-image">
        <div class="main-feature">
          <u>
            情報システム部門のない中小企業向け<br>
          </u>
          紙や手作業が多く残っており社内のデジタル化が進んでいない
          <br class="pc-br">電子帳簿保存法やインボイス制度等の法対応が進められていない
          <br>テレワーク時のセキュリティに懸念がある
          <br>
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              コンサルと開発のスキルを持つ「ITプロ人材」が<br>
              貴社の「中の人」として手を動かしながら伴奏支援し課題を解決
            </div>
            <nuxt-link to="/service/consulting-engineer" class="link case-button button is-dark">
              <span class="link-message">コンサルティングエンジニアサービス詳細へ</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="main-image">
        <div class="main-feature">
        <u>
          情報システム部門がある企業向け<br class="sp-br">
        </u>
          <br class="pc-br">超上流工程のノウハウがなく基幹システムの刷新を進められない
          <br>システム導入プロジェクトが遅延しており上手くいっていない
          <br>手を動かせる人材が不足している
          <br>
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              企画フェーズ（現状分析やソリューション選定など）から参画し
              情報システム部門のリソースも補完
            </div>
            <nuxt-link to="/cases/hirata" class="link case-button button is-dark">
              <span class="link-message">コンサルティングエンジニアサービス事例紹介へ</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="main-image-area">
      <div class="main-image">
        <div class="main-feature">
        <u>
          上場準備中の企業・上場企業向け<br class="sp-br">
        </u>  
          <br class="pc-br">規程や運用ルールなどの内部統制（IT統制）が構築できていない
          <br>何をやるべきか、どこまでやるべきか分からない
          <br>規程が古く最近の技術動向が反映されておらずリスクがある
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              安全性と効率性のバランスを取りながらIT統制・ガバナンスを最適化する
              <br>
            </div>
            <nuxt-link to="/service/it-control" class="link case-button button is-dark">
              <span class="link-message">IT統制サポート詳細へ</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="main-image">
        <div class="main-feature">
        <u>
          会計・経理担当者向け<br class="sp-br">
        </u>
          <br class="pc-br">月次の原価管理業務に手間と時間がかかる
          <br>作業が属人化している
          <br>原価管理システムは高額で導入しにくい
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>安価なツールを使って原価計算から仕訳データ生成まで自動で作成する
            </div>
            <nuxt-link to="" class="link case-button button is-dark">
              <span class="link-message">原価管理サポート詳細へ（準備中）</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="issue-button" @click="isOpened = !isOpened">
      詳しく見る {{ isOpened ? '-' : '+' }}
    </div>
    <the-issues v-if="isOpened" />
    <nuxt-link to="/service" class="link service-button button is-dark">
      <span class="link-message">サービス詳細へ</span>
    </nuxt-link>
  </section>
</template>

<script>
import TheIssues from './TheIssues.vue'
import triangleImage from '~/assets/top/top-triangle.png'

export default {
  components: { TheIssues },
  data: () => ({ isOpened: false }),
  computed: {
    triangleImage() {
      return triangleImage
    }
  }
}
</script>

<style lang="scss" scoped>
.main-message-area {
  width: 90%;
  margin: 0 auto 10rem;
  text-align: center;
  line-height: 2rem;

  .main-message {
    font-size: 1.8rem;
    line-height: 3rem;
    margin-bottom: 1.5rem;
    padding-top: 4%;
    padding-bottom: 4%;
    border-top: 1px solid $lightgray;
    border-bottom: 1px solid $lightgray;

    @media screen and (max-width: 600px) {
      font-size: 1.4rem;
    }
  }

  .main-description {
    line-height: 3rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 1.5rem;

    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }

    span {
      font-size: 0.8rem;
    }
  }

  .consulting-engineer-btn-wrapper {
    margin: 2rem 0 5rem;

    a {
      @media screen and (min-width: 770px) {
        width: 40%;
      }
      height: 49px;
    }
  }

  .issue-button {
    cursor: pointer;
  }

  .service-button {
    width: 33.3333%;
    height: 49px;
    margin-top: 2.5rem;
  }

  .case-button {
    width: 65%;
    height: 49px;
    margin-top: 2.5rem;
  }

  .main-image-area {
    display: flex;
    justify-content: center;

    .main-image {
      width: 50%;
      border: 1px solid #dbdbdb;
      margin: 0 1rem 3rem;
      padding: 1rem 2rem;

      @media screen and (max-width: 1023px) {
        padding: 1rem;
      }

      .triangle-img {
        width: 20%;
      }

      .main-feature {
        margin-bottom: 2rem;

        .font-red {
          color: #f00;
        }

        .link-message {
          font-weight: normal;
          font-size: 0.8rem;
        }
      }

      .main-details {
        display: flex;
      }

      .free-image div {
        width: 50%;
      }

      .contract-image div {
        width: 33.3333%;
      }

      .main-notice {
        margin-top: 1rem;
        text-align: left;

        span {
          font-size: 0.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .service-button {
      width: 100%;
    }
    .case-button {
      width: 100%;
    }

    .main-image-area {
      display: flex;
      justify-content: center;
      flex-flow: column;
      align-items: center;

      .main-image {
        width: 95%;
        margin-bottom: 3rem;

        .main-feature {
          .link-message {
            font-size: 0.6rem;
          }
        }
      }
    }

    .reason-button {
      margin: 1rem 0 1rem;
      cursor: pointer;
    }
  }
}
</style>
