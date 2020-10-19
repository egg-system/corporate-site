<template>
  <div class="develop-performance-area">
    <section class="de">
      <div class="develop-perfomance-header">
        <h3>弊社のシステム開発の特徴</h3>
      </div>
      <p>下記3点の「やらないこと」を提唱してります。</p>
      <div class="develop-perfomance-content">
        <section>
          <h4>○言われたことだけをやる</h4>
          <p>
            お客様から言われたことをそのまま対応するのではなく、
            お客様の立場にたって、「何のために必要か？」「本当に必要か？」ということを考え、
            当社から「こうした方がより良い効果が得られます」というご提案をしながら進めます。
          </p>
        </section>
        <section>
          <h4>○開発したら終わり</h4>
          <p>
            システムを開発し納品することがゴールではなく、お客様にとっては納品がスタートです。
            そのため、開発よりも「開発機」を第一に考えて保守運用まで一貫して行います。
          </p>
        </section>
        <section>
          <h4>○システムのことだけを考える</h4>
          <p>
            システムとは単なるツールです。どの業務でどうやってシステムを使うかということが重要ですので、
            「業務」と「システム」の両面からサポートします。
          </p>
        </section>
      </div>
    </section>
    <section>
      <div class="develop-perfomance-header">
        <h3>開発実績</h3>
      </div>
      <div>
        <div class="develop-feature">
          <p>
            業務系Webアプリケーションの開発を中心に行っています。
            スマホへの対応もお任せください。
          </p>
          <div class="develop-feature-skill">
            <div>
              <dl>・開発言語：</dl><dd>php、Ruby、Vue.js、Node.js、html、css、scss</dd>
            </div>
            <div>
              <dl>・環境：</dl><dd>AWS</dd>
            </div>
          </div>
        </div>
        <div class="develop-system-performance">
          <div class="develop-system-performance-example">
            <div>○ 予約システム（スマホファーストで開発）</div>
            <div class="develop-system-performance-example-image">
              <img :src="reserveFrontImage">
            </div>
          </div>
          <div class="develop-system-performance-example">
            <div>○ 予約・顧客管理システム（ダッシュボード）</div>
            <div class="develop-system-performance-example-image">
              <img :src="reserveBackImage">
            </div>
          </div>
          <div class="develop-system-performance-example">
            <div>○ お問い合わせ情報の自動連携、および担当者割り当て機能の開発</div>
            <div class="develop-system-performance-example-image">
              <img :src="developKintoneImage">
            </div>
          </div>
          <div class="develop-system-performance-example">
            <div>○ ECサイトの受注データ変換ツールの開発</div>
            <div class="develop-system-performance-example-image">
              <img :src="developConvertImage">
            </div>
          </div>
          <div class="develop-system-performance-example">
            <div>○ Nuxt.jsで開発した当ホームページ（投稿機能はMicroCMSを使用）</div>
            <div class="develop-system-performance-example-image">
              <img :src="xFaceSiteImage">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import reserveFrontImage from '~/assets/service/img/reserve-front-system.png'
import reserveBackImage from '~/assets/service/img/reserve-back-system.png'
import developKintoneImage from '~/assets/service/img/develop-kintone.png'
import developConvertImage from '~/assets/service/img/develop-convert.png'
import xFaceSiteImage from '~/assets/service/img/x-face-sitle.png'

export default {
  computed: {
    reserveFrontImage() {
      return reserveFrontImage
    },
    reserveBackImage() {
      return reserveBackImage
    },
    developKintoneImage() {
      return developKintoneImage
    },
    developConvertImage() {
      return developConvertImage
    },
    xFaceSiteImage() {
      return xFaceSiteImage
    }
  }
}
</script>

<style lang="scss" scoped>
.develop-performance-area {
  @media screen and (min-width: 1024px) {
    margin: 3rem 2rem;
  }

  @media screen and (max-width: 1023px) {
    margin: 3rem 0;
  }

  .develop-perfomance-header {
    width: fit-content;
    margin-bottom: 2rem;
    border-bottom: 1px solid #363636;

    h3 {
      margin-bottom: 0.2rem;
      font-size: 1.2rem;
      font-weight: normal;
    }
  }

  .develop-perfomance-content {
    section {
      margin: 2rem 0;

      h4 {
        margin-bottom: 0.2rem;
        font-size: 1.1rem;
      }
    }
  }

  .develop-feature {
    p {
      margin-bottom: 0;
    }

    &-skill {
      div {
        display: flex;

        @media screen and (max-width: 1023px) {
          flex-flow: column;
        }

        dl {
          width: 7rem;
          margin-bottom: 0.5rem;

          @media screen and (max-width: 1023px) {
            margin-top: 1rem;
          }
        }

        dd {
          margin: 0;

          @media screen and (max-width: 1023px) {
            margin-left: 4rem;
          }
        }
      }
    }
  }

  .develop-system-performance {
    margin: 4rem;

    @media screen and (max-width: 1023px) {
      margin: 2rem 0;
    }

    &-example {
      @media screen and (min-width: 1024px) {
        width: 80%;
        margin: 0 auto 4rem;
      }

      div {
        margin-bottom: 2rem;
      }

      &-image {
        object-fit: contain;

        @media screen and (min-width: 1024px) {
          padding: 0 4rem;
        }
      }
    }
  }
}
</style>
