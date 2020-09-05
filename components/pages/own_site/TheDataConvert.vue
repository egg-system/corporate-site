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
          Webブラウザ上で利用できるため、事前のインストールや会員登録等は不要です。DataConvert（
          <a href="https://convert-service.x-face.net" target="_blank">https://convert-service.x-face.net</a>）へアクセスして頂ければ、すぐに利用可能です。
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
    <div class="security">
      業務で利用する企業様が多いため、セキュリティ対策を万全に講じています。
      <div class="security-title">
        ◯ データはすぐに削除
      </div>
      <div class="security-body">
        アップロードした変換前のcsvデータ及び変換後のcsvデータは、変換処理後1時間以内に強制的に削除いたします。そのため、アップロードしたデータがサーバ上に残り続けることはありません。
      </div>
      <div class="security-title">
        ◯ 処理・通信の安全性を確保
      </div>
      <div class="security-body">
        セキュリティが確保された環境で変換処理を行っており、安全に通信を行うためにHTTPS通信を行っております。
      </div>
    </div>
    <div class="columns reverse">
      <div class="column table-image">
        <h3>(参考)比較表</h3>
        <figure id="js-show-popup" class="image table">
          <img :src="dataconvertTableImage" @click="popupImage">
        </figure>
        <div id="js-popup" class="popup">
          <div class="popup-inner">
            <div id="js-close-btn" class="close-btn" >
              <i class="fas fa-times" />
            </div>
            <a href="#">
              <img :src="dataconvertTableImage">
            </a>
          </div>
          <div id="js-black-bg" class="black-background" />
        </div>
      </div>
      <div class="column">
        <h3>具体的な利用シーン（例）</h3>
        <ul>
          <li>ECサイト等で管理する受注データを、基幹システムへ取り込むとき</li>
          <li>経費申請システムや勤怠/給与システムから出力した仕訳データを、会計システムへ取り込むとき</li>
          <li>在庫の出荷指示データを外部倉庫へ渡すとき</li>
          <li>作成した採用募集データを、掲載する採用媒体ごとへアップロードするとき</li>
          <li>顧客リストをメルマガ配信システムへアップロードするとき</li>
        </ul>
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
  }),
  methods: {
    popupImage: function(event) {
      console.log('ろぐ')
      const popup = document.getElementById('js-popup')
      if (!popup) return

      const blackBg = document.getElementById('js-black-bg')
      const closeBtn = document.getElementById('js-close-btn')
      const showBtn = document.getElementById('js-show-popup')

      closePopUp(blackBg)
      closePopUp(closeBtn)
      closePopUp(showBtn)
      function closePopUp(elem) {
        if (!elem) return
        elem.addEventListener('click', function() {
          popup.classList.toggle('is-show')
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: 0.6s;
}
.popup.is-show {
  opacity: 1;
  visibility: visible;
}
.popup-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 1000px;
  padding: 50px;
  background-color: #fff;
  z-index: 2;
}
.popup-inner img {
  width: 100%;
  height: 100%;
}
.close-btn {
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.close-btn i {
  font-size: 20px;
  color: #333;
}
.black-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  cursor: pointer;
}
a img {
  object-fit: contain;
  width: 1000px;
  height: 500px;
}
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
  .column {
    position: relative;
    div {
      line-height: 1.75;
    }
  }
  .table-image h3 {
    text-align: center;
    margin-bottom: 0;
  }
  .table {
    margin: 0;
  }
}
.message {
  background-color: inherit;
  line-height: 1.25 !important;
}
.table img {
  width: 500px;
  height: 300px;
  object-fit: contain;
}
.table-title {
  margin-bottom: 1rem;
}
.security {
  margin-bottom: 2rem;
}
.security-title {
  margin-top: 10px;
}
.security-body {
  margin-bottom: 2rem;
  margin-left: 2rem;
}
.specific-use {
  margin-bottom: 2rem;
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
  text-align: center;
  padding: 10px 5px;
  list-style: none;
}
.link {
  width: 30rem;
  margin: 30px auto;
}

@media screen and (max-width: 600px) {
  .link {
    width: 100%;
  }
  .columns {
    .is-half {
      padding: 0;
      padding-top: 1rem;
    }
  }
}
</style>
