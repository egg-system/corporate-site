<template>
  <section class="service-wrapper">
    <the-sub-header text="x-faCEについてもっと知る" />
    <div class="service">
      <section>
        <h3>メディア</h3>
        <div class="columns">
          <div class="column is-4">
            <img :src="columnImage">
            <p>
              最新の業界動向や<br>
              当社の取り組みなどについて<br>
              コラムで発信中
            </p>
            <nuxt-link to="/column" class="link about-button button is-dark">
              <span class="link-message">
                <span class="column-arrow" />
                コラム一覧へ
              </span>
            </nuxt-link>
          </div>
          <div class="column is-4">
            <img :src="noteLogoImage">
            <p>
              『地方×IT』というテーマで<br>
              地方でのIT活用事例について<br>
              noteで平日毎日更新中
            </p>
            <nuxt-link
              to="https://note.com/x_face"
              class="link about-button button is-dark"
            >
              <span class="link-message">
                <span class="column-arrow" />
                noteへ
              </span>
            </nuxt-link>
          </div>
          <div class="column is-4">
            <img :src="kinChuImage">
            <p>
              近代中小企業（KinChu）<br>
              2019年4月号に<br>
              高橋翼が執筆した記事が掲載
            </p>
            <nuxt-link
              to="https://www.kinchu.jp/"
              class="link about-button button is-dark"
            >
              <span class="link-message">
                <span class="column-arrow" />
                詳細へ
              </span>
            </nuxt-link>
          </div>
        </div>
      </section>
      <section>
        <h3>サービス</h3>
        <div class="columns">
          <div class="column is-6">
            <img :src="dataConvertImage">
            <h4>『Data Convert』</h4>
            <p>
              Webブラウザ上でcsvデータを<br>
              簡単に変換できるサービスです。
            </p>
            <nuxt-link
              to="https://convert-service.x-face.net/"
              class="link about-button button is-dark"
            >
              <span class="link-message">
                <span class="column-arrow" />
                サービス詳細へ
              </span>
            </nuxt-link>
          </div>
          <div class="column is-6">
            <img :src="serviceCostSimulationImage">
            <h4>『ITコストシミュレーション』</h4>
            <p>
              システムにかかる費用が妥当かどうか<br>
              5分で簡単に診断できるサービスです。<br>
              （登録不要、無料で利用可能）
            </p>
            <nuxt-link
              to="https://eggsystem.co.jp/service/it-cost-lp/"
              class="link about-button button is-dark"
            >
              <span class="link-message">
                <span class="column-arrow" />
                サービス詳細へ
              </span>
            </nuxt-link>
          </div>
        </div>
      </section>
      <section>
        <h3>情報セキュリティへの取り組み</h3>
        <div class="columns">
          <div class="column is-12">
            <h4>
              <img
                :src="securityActionImage"
                alt="IPA 独立行政法人 情報処理推進機構 SECURITY ACTION セキュリティ対策自己宣言"
              >
            </h4>
            <p>
              「IPA 独立行政法人 情報処理推進機構」<br>
              によるSECURITY ACTIONへ取り組んでいること<br>
              を宣言しています
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import BlackLink from '~/components/atoms/BlackLink.vue'
import columnImage from '~/assets/top/top-strong1.jpeg'
import noteLogoImage from '~/assets/top/note-logo.png'
import kinChuImage from '~/assets/top/kinchu.jpg'
import dataConvertImage from '~/assets/top/data-convert.png'
import serviceCostSimulationImage from '~/assets/top/service-cost-simulation.png'
import securityActionImage from '~/assets/top/security-action.png'

export default {
  components: {
    TheSubHeader,
    BlackLink
  },
  computed: {
    columnImage() {
      return columnImage
    },
    noteLogoImage() {
      return noteLogoImage
    },
    kinChuImage() {
      return kinChuImage
    },
    dataConvertImage() {
      return dataConvertImage
    },
    serviceCostSimulationImage() {
      return serviceCostSimulationImage
    },
    securityActionImage() {
      return securityActionImage
    }
  }
}
</script>

<style lang="scss" scoped>
.service-wrapper {
  padding-top: 8%;
  border-top: 1px solid $lightgray;
  border-bottom: 1px solid $lightgray;

  .service {
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      width: 90%;
      padding-bottom: 0;
    }
  }

  section {
    margin-bottom: 6rem;

    h3 {
      margin: 0.5rem 1rem 2.5rem;
    }

    .columns {
      margin: 0.5rem;

      .column {
        @media screen and (max-width: 769px) {
          margin-top: 3rem;
        }
        padding: 1rem 2rem;
        text-align: center;

        img {
          height: 15rem;
          object-fit: contain;
        }

        p {
          @media screen and (min-width: 1024px) {
            height: 5rem;
          }
          margin: 3rem auto;
        }

        .about-button {
          height: 2.5rem;
          @media screen and (min-width: 1024px) {
            width: 20rem;
          }
        }
      }
    }
  }
}
</style>
