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
              『地方×IT』をテーマに<br>
              地方でのICT活用事例について<br>
              noteで発信中
            </p>
            <a
              href="https://note.com/x_face"
              class="link about-button button is-dark"
            >
              <span class="link-message">
                <span class="column-arrow" />
                noteへ
              </span>
            </a>
          </div>
          <div class="column is-4">
            <img :src="kinChuImage">
            <p>
              近代中小企業（KinChu）<br>
              2021年2月号・2019年4月号に<br>
              高橋翼が執筆した記事が掲載
            </p>
            <nuxt-link
              to="/news/20210201-magazine"
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
      <!--
      <section class="service-sections">
        <h3>サービス</h3>
        <div class="columns">
          <div class="column is-4">
            <img :src="dataConvertImage">
            <h4>『Data Convert』</h4>
            <p>
              Webブラウザ上でcsvデータを<br>
              簡単に変換できるサービスです。
            </p>
            <a
              href="https://convert-service.x-face.net/"
              class="link about-button button is-dark"
            >
              <span class="link-message">
                <span class="column-arrow" />
                サービス詳細へ
              </span>
            </a>
          </div>
          <div class="column is-4">
            <img :src="serviceCostSimulationImage">
            <h4>『ITコストシミュレーション』</h4>
            <p>
              システムの費用が妥当かどうか<br>
              5分で簡単に診断するサービスです。<br>
              （登録不要、無料で利用可能）
            </p>
            <nuxt-link
              to="/service/it-cost-lp/"
              class="link about-button button is-dark"
            >
              <span class="link-message">
                <span class="column-arrow" />
                サービス詳細へ
              </span>
            </nuxt-link>
          </div>
          <div class="column is-4">
            <img :src="serviceItControlImage">
            <h4>『IT統制サポート』</h4>
            <p>
              ベンチャー企業に特化<br>
              低価格でIT統制を整備するサービスです。
            </p>
            <a
              href="https://it-control.eggsystem.co.jp/"
              class="link about-button button is-dark"
            >
              <span class="link-message">
                <span class="column-arrow" />
                サービス詳細へ
              </span>
            </a>
          </div>
        </div>
      </section>
      -->
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
              独立行政法人情報処理推進機構（IPA）が実施する<br>
              『SECURITY ACTION』の普及賛同企業として<br>
              情報セキュリティ対策に取り組んでいます
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
import kinChuImage from '~/assets/top/kinchu-202102.png'
import dataConvertImage from '~/assets/top/data-convert.png'
import serviceCostSimulationImage from '~/assets/top/service-cost-simulation.png'
import serviceItControlImage from '~/assets/top/it-control-service.png'
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
    },
    serviceItControlImage() {
      return serviceItControlImage
    }
  }
}
</script>

<style lang="scss" scoped>
.service-wrapper {
  padding-top: 8%;
  border-top: 1px solid $lightgray;
  border-bottom: 1px solid $lightgray;
  margin: 0 5%;

  .service {
    margin: 0 auto;
    width: 80%;

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
      .column {
        @media screen and (max-width: 769px) {
          margin-top: 3rem;
        }

        padding: 1rem 1.5rem;
        text-align: center;

        img {
          height: 15rem;
          object-fit: contain;
        }

        p {
          @media screen and (min-width: 1024px) {
            height: 7rem;
          }

          margin: 3rem auto;
        }

        .about-button {
          height: 2.5rem;
        }
      }
    }
  }

  .service-sections {
    h4 {
      height: 2rem;
    }
  }
}
</style>
