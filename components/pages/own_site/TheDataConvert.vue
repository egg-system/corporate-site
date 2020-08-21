<template>
  <div>
    <the-sub-header text="「Data Convert」サービス" class="subheader" />
    <div class="columns reverse">
      <div class="column is-half">
        <figure class="image">
          <img :src="dataconvertImage">
        </figure>
      </div>
      <div class="column is-half">
        <div class="message">Webブラウザ上でcsvデータを簡単に変換できるサービスです。</div>
        <div class="message">
          HTTPS通信を使っているため安全に通信を行うことができ、csv変換後1時間以内でデータを強制削除するのでアップロードした
          データがサーバー上に残り続けることがなく安心にお使いいただけます。
        </div>
        <div class="link">
          <nuxt-link v-scroll-to="'.dataconvert-use'" to class="button is-dark">
            <span class="link-message">利用方法へ</span>
            <span class="column-arrow" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="columns reverse">
      <div class="column is-half">
        <figure class="image">
          <img :src="dataconvertUseImage">
        </figure>
      </div>
      <div class="column">
        <h3>「Data Convert」サービス利用方法</h3>
        <ol>
          <li>変換したいcsvファイルを選択する</li>
          <li>csvの変換設定を入力する</li>
          <li>変換したCSVファイルをダウンロードする</li>
        </ol>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half table-image">
        <figure class="image">
          <img :src="dataconvertTableImage">
        </figure>
      </div>
    </div>
    <div class="link">
      <a class="button is-dark" target="_blank" href="https://convert-service.x-face.net">
        「Data Convert」サービスはこちらから
      </a>
    </div>
  </div>
</template>

<script>
import TheSubHeader from '~/components/pages/service/common/TheSubHeader.vue'
import TheCase from '~/components/pages/service/common/TheCase.vue'
import dataconvertImage from '~/assets/own_site/dataconvert-screen.png'
import dataconvertUseImage from '~/assets/own_site/dataconvert-use.png'
import dataconvertTableImage from '~/assets/own_site/dataconvert-table.png'
import systemConsultingCases from '~/assets/service/js/SystemConsultingCases.js'

export default {
  components: {
    TheSubHeader,
    TheCase
  },
  data: () => ({
    dataconvertImage,
    dataconvertUseImage,
    dataconvertTableImage,
    cases: systemConsultingCases.cases
  })
}
</script>

<style lang="scss" scoped>
div {
  letter-spacing: 1px;
}
.columns {
  margin: auto;
  margin-top: 1rem;
  .is-half {
    padding: 2rem;
    padding-top: 1rem;
  }
}
.message {
  background-color: inherit;
  line-height: 1.25 !important;
}
.columns {
  margin-bottom: 3rem;
  .column {
    position: relative;
    div {
      line-height: 1.75;
    }
  }
}
.table-image {
  margin: auto;
}
.table {
  border: 1px solid $lightgray;
  margin: 0px;
  margin-bottom: 3rem;
  .column {
    padding: 0px;
  }
}
.table-title {
  margin-bottom: 1rem;
}
@media screen and (min-width: 769px) {
  .left::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 90%;
    top: 5%;
    right: 0;
    background: $lightgray;
  }
  .reverse {
    flex-direction: row-reverse;
  }
}
@media screen and (max-width: 768px) {
  .duration-cost::after {
    position: absolute;
    content: '';
    width: 90%;
    height: 1px;
    background: $lightgray;
    margin-top: 0.5rem;
  }
  .five-ws {
    margin-bottom: 0.25rem;
    .description {
      margin-left: 1rem;
    }
  }
}
.dataconvert-use {
  padding-top: 30px;
}
.dataconvert-use li {
  font-size: 20px;
  text-align: center;
  padding: 10px 5px;
  list-style: none;
}
.link {
  width: 30rem;
  margin: 30px auto;
}

@media screen and (max-width: 600px) {
  .dataconvert-use p {
    font-size: 18px;
  }
  .link {
    width: 100%;
  }
}
</style>
