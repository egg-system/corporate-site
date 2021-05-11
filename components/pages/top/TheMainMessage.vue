<template>
  <section class="main-message-area">
    <p class="main-message">
      『あなたじゃないと困る。』<br>
      そう言っていただける関係を目指しています
    </p>
    <h2 class="main-description">
      わたしたちは100名以下のベンチャー・中小企業が抱える課題を解決する<br>
      コンサルティングエンジニア集団です。<br>
      <span>
        ※ コンサルティングエンジニアとは、「システムコンサルタント」「システムエンジニア」を組み合わせた造語です
      </span>
    </h2>
    <div class="sub-description">
      コンサルティングとエンジニアリングの両軸から価値を提供し、<br class="pc-br">
      ITシステムを活用し生産性を向上することで、人口減少・働き方改革など社会の変化へ対応します。<br class="pc-br">
      中小企業のDX（デジタルトランスフォーメーション）を推進し、生産性を向上します。
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
    月額制のシステム担当チーム「コンサルティングエンジニアサービス」
    <div class="consulting-engineer-btn-wrapper">
      <a href="https://eggsystem-ce.studio.site/" class="link button is-dark" target="blank">
        <span class="link-message">
          サービスサイトへ
        </span>
      </a>
    </div>
    <div class="main-image-area">
      <div class="main-image">
        <div class="main-feature">
          【資金調達後のベンチャー企業向け】<br>
          内部統制（IT統制）への対応には手間がかかる<br class="pc-br">ITシステムの環境構築・評価、規程書類の作成を全て任せたい<br><br>
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              監査法人の指摘ゼロの実績を元に<br>
              <span class="font-red">安全面と運用面を考慮した</span>IT統制環境を整備
            </div>
            <nuxt-link to="/cases/innophys" class="link case-button button is-dark">
              <span class="link-message">ベンチャー企業の内部統制支援事例へ</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="main-image">
        <div class="main-feature">
          【製造業向け】<br class="pc-br">利益率確保に向けた適正在庫を管理するために、<br class="pc-br">リアルタイムに在庫を把握したい<br>
          社外やスマホから簡単に受注や在庫の状況を把握したい<br>
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              クラウドシステムの導入やシステム同士を連携し、煩雑な業務を自動化することで<span class="font-red">手間を増やさずに受注・在庫管理を実現</span>
            </div>
            <nuxt-link to="/service/consulting-engineer" class="link case-button button is-dark">
              <span class="link-message">クラウド活用・業務効率化の詳細へ</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="main-image-area">
      <div class="main-image">
        <div class="main-feature">
          【サービス業向け】<br class="pc-br">（整体・パーソナルトレーニングジム・エステなど）<br>
          　人手不足を解消したい、店舗の売上を上げたい
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              システムでオペレーションを自動化し<span class="font-red">人手不足を解消</span><br>
              売上に直結するサービス提供へ時間を割くことで<span class="font-red">売上を拡大</span>
            </div>
            <nuxt-link to="/cases/olive-japan" class="link case-button button is-dark">
              <span class="link-message">整体店舗の売上拡大の事例へ</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="main-image">
        <div class="main-feature">
          【全業種向け】<br class="pc-br">
          働き方改革やコロナ対策としてテレワークや社内ファイルサーバーのクラウド化を進めたい<br>
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              セキュリティを確保したテレワーク・ファイル管理のツール導入から運用ルール策定や社員教育まで行い<span class="font-red">社内で運用を定着</span>
            </div>
            <nuxt-link to="/service/others" class="link case-button button is-dark">
              <span class="link-message">詳細へ</span>
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
          font-size: 0.9rem;
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
            font-size: 0.8rem;
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
