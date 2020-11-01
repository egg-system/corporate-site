<template>
  <section class="main-message-area">
    <p class="main-message">
      『あなたじゃないと困る。』<br>
      そう言っていただける関係を目指しています
    </p>
    <h2 class="main-description">
      わたしたちは100名以下のベンチャー・中小企業へ徹底的に寄り添う<br>
      システムコンサルティング集団です。
    </h2>
    <div class="sub-description">
      ITシステムを活用し生産性を向上することで、人口減少・働き方改革など社会の変化へ対応します。<br class="pc-br">中小企業のDX（デジタルトランスフォーメーション）を推進し、生産性を向上します。
    </div>
    <br><br>
    <div class="main-image-area">
      <div class="main-image">
        <div class="main-feature">
          【資金調達後のベンチャー企業向け】<br>
          内部統制（IT統制）への対応には手間がかかる<br class="pc-br">ITシステムの環境構築・評価、規程書類の作成を全て任せたい
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
    </div>
    <div class="main-image-area">
      <div class="main-image">
        <div class="main-feature">
          【製造・卸売・小売業向け】<br class="pc-br">集客に苦戦するオンライン販売での売上を拡大したい<br>
          余剰在庫を解消し適正な数の在庫を管理したい
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              システム同士を連携、煩雑な業務を自動化することで<br class="pc-br"><span class="font-red">手間を増やさずに販路拡大、在庫管理の適正化へ</span>
            </div>
            <nuxt-link to="/service/consulting-engineer" class="link case-button button is-dark">
              <span class="link-message">売上拡大・業務効率化の詳細へ</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="main-image">
        <div class="main-feature">
          【全業種向け】<br class="pc-br">
          働き方改革やコロナ対策としてテレワークを本格導入したい<br class="pc-br">セキュリティを確保した仕組みと社員教育も行いたい<br>
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              セキュリティを担保したテレワークの仕組みの導入から<br class="pc-br">
              社員への教育まで行い<span class="font-red">テレワークを社内で定着</span>
            </div>
            <nuxt-link to="/service/others" class="link case-button button is-dark">
              <span class="link-message">リモートワーク導入の詳細へ</span>
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

      .triangle-img {
        width: 20%;
      }

      .main-feature {
        font-weight: bold;
        margin-bottom: 2rem;

        .font-red {
          color: #f00;
        }

        .link-message {
          font-weight: normal;
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
