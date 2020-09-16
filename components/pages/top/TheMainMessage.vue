<template>
  <div class="main-message-area">
    <div class="main-message">
      『あなたじゃないと困る。』<br>
      そう言っていただける関係を目指しています
    </div>
    <p>
      わたしたちは100名以下のベンチャー・中小企業へ徹底的に寄り添う<br>
      システムコンサルティング集団です。
    </p>
    <div class="main-image-area">
      <div class="main-image">
        <div class="main-feature">
          上場準備会社では内部統制への対応が必須<br>
          ITシステム環境構築や規程類の作成には時間がかかる
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              上場準備会社での内部統制支援実績あり<br>
              <span class="font-red">監査をクリアし運用可能</span>なIT全般統制の対応へ
            </div>
            <nuxt-link to="" class="link case-button button is-dark">
              <span class="link-message">上場準備会社の事例へ(準備中)</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="main-image">
        <div class="main-feature">
          整体・エステ・パーソナルトレーニングジム等<br>
          実店舗の売上を上げたい
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              システムでオペレーションを自動化<br>
              売上に直結する業務へ時間を割くことで<span class="font-red">売上拡大へ</span>
            </div>
            <nuxt-link to="/cases/olive-japan" class="link case-button button is-dark">
              <span class="link-message">実店舗の売上拡大の事例へ</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="main-image-area">
      <div class="main-image">
        <div class="main-feature">
          ECサイトでの販売を始め<br>
          Amazon/楽天/Yahoo等のチャネルを増やし売上を伸ばしたい
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              業務を改善して煩雑な作業を最小限にすることで<br>
              <span class="font-red">手間を増やさずにチャネル増加・売上拡大へ</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-image">
        <div class="main-feature">
          社員を採用したい<br><br>
        </div>
        <div>
          <img :src="triangleImage" class="triangle-img" alt="解決策">
          <div class="main-feature">
            <div>
              <br>
              リモートワーク導入により働き方を改革し<br>
              <span class="font-red">社員の満足度を上げ、採用のアピールへ</span>
            </div>
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
  </div>
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

  p {
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
