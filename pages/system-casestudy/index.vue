<template>
  <v-layout row>
    <v-flex xs12>
      <v-card class ="card" >
        <v-card-text class="page_title">システムコンサルティング・システム開発事例</v-card-text>
        <v-card-text class="page_sub_title">当社が行ったコンサルティング・システム開発の事例をご紹介いたします。</v-card-text>
        <v-subheader class="content_title">システムコンサルティング事例</v-subheader>
        <v-subheader class="content_sub_title">IT戦略・IT投資計画策定サービス</v-subheader>
        <v-container class="imageWrapper">
          <img src="~/assets/it_pranning.jpeg" class="image_potison" alt="lorem"
               width="600px"
               height="525px">
        </v-container>
        <v-card-text class="content-text"><strong>◯ 通信教育運営会社におけるシステム化中期計画策定<br>【企業規模：社員数　約200名、参考費用：140万円／月】</strong><br>現行システムおよび現行業務を可視化した上で、問題点を洗い出し、対応方針を策定しました。また、ToBe（理想形）およびCanBe（現実的解）のシステムグランドデザインを作成しました。<br>また、現状の予算を明らかにした上で、今後5年間で発生するシステム投資額についても提示いたしました。</v-card-text>
        <v-subheader class="content_sub_title">業務改善コンサルティング</v-subheader>
        <v-container>
          <img src="~/assets/job_consulting.jpeg" class="image_potison" alt="lorem"
               width="600px"
               height="390px">
        </v-container>
        <v-card-text class="content-text"><strong>◯ 研修事業運営会社における業務改善支援コンサルティング<br>【企業規模：社員数 約200名、参考費用：140万円／月】</strong><br>POSシステムおよび基幹系システム導入プロジェクトにおいてプロジェクトマネジメントを行いました。<br>行業務の問題点を踏まえたうえで、バックヤード業務（営業支援、販売管理等）の新業務フローを策定いたしました。</v-card-text>
        <v-card-text class="content-text"><strong>◯ ネット予約システムの導入コンサルティング<br>【エステサロン／パーソナルトレーニングジム、参考費用：月額3万円〜】</strong><br>ネット予約システムの導入により、予約業務の効率化を行いました。</v-card-text>
        <v-subheader class="content_sub_title">プロジェクトマネジメントサービス</v-subheader>
        <v-container>
          <img src ="~/assets/project_ｍanagement_service.jpg" class="image_potison" alt="lorem"
               width="601px"
               height="369px">
        </v-container>
        <v-card-text class="content-text"><strong>◯ 整体業におけるPOSシステムおよび基幹システム刷新のプロジェクトマネジメント<br>【企業規模：社員数 約1,500名、参考費用：140万円／月】</strong><br>POSシステムおよび基幹系システム導入プロジェクトにおいてプロジェクトマネジメントを行いました。<br>進捗管理・課題管理・予算管理だけでなく、お客様の立場でのベンダーマネジメントも実施しました。</v-card-text>
        <v-card-text class="content-text"><strong>◯ 基幹系システム導入プロジェクトにおけるプロジェクトマネジメント<br>【企業規模：社員数 約200名、参考費用：140万円／月】</strong><br>PM支援として、課題管理、予算管理、進捗管理、などを行いました。</v-card-text>
        <v-card-text class="content-text"><strong>◯ バックヤード業務の改善プロジェクトマネジメント<br>【企業規模：社員数 約1,700名、参考費用：100万円／月】</strong><br>課題管理、予算管理、進捗管理、ユーザー部門への教育などを行いました。</v-card-text>
        <v-subheader class="content_sub_title">システム開発事例</v-subheader>
        <v-container>
          <img src ="~/assets/system_dev.jpg" class="image_potison" alt="lorem"
               width="600px"
               height="400px">
        </v-container>
        <v-card-text class="content-text"><strong>◯ サブスクリプションサービスの会員管理システム開発およびクレジットカード決済（月額費）との自動連動システム<br>【ベンチャー企業、参考費用：約30〜60万円】</strong></v-card-text>
        <v-card-text class="content-text"><strong>◯ 代理店サービスの報酬金額自動算出機能開発<br>【ベンチャー企業、参考費用：月額5万円〜】</strong></v-card-text>
        <v-card-text class="content-text"><strong>◯ 小売業（メガネ）におけるECサイトの構築支援<br>【小売事業者、参考費用：10万円】</strong></v-card-text>
        <v-subheader class="content_title2">Webサイトの構築事例</v-subheader>
        <v-card-text class="content-text"><a href="https://eggsystem.co.jp/hp-casestudy/" style="text-decoration:none;">事例ページ</a>をご参照ください。</v-card-text>
        <v-footer class="mt-5"/>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.card {
  margin: 0 auto;
  width: 96%;
  box-shadow: none;
}
.container {
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.page_title {
  font-size: 48px;
  font-weight: 400;
  width: 96%;
  margin: 0 auto;
  color: #1f55aa !important;
  padding-top: 60px;
  line-height: 1.3;
  padding-bottom: 60px;
  font-family: 'ヒラギノ角ゴ ProN W3', 'Meiryo, メイリオ', 'Lucida Grande';
}
.page_sub_title {
  font-size: 15px;
  font-weight: 400;
  color: black !important;
  margin-bottom: 22px;
  font-family: 'ヒラギノ角ゴ ProN W3', 'Meiryo, メイリオ', 'Lucida Grande';
}
.content_title {
  font-size: 24px;
  font-weight: 400;
  color: black !important;
  height: 60px;
  padding: 12px 0px 12px 24px;
  border: solid 1px #cccccc;
  border-bottom: solid 5px #1f55a5;
  margin-bottom: 48px;
  position: relative;
  font-family: 'ヒラギノ角ゴ ProN W3', 'Meiryo, メイリオ', 'Lucida Grande';
}
.content_sub_title {
  font-size: 24px;
  font-weight: 400;
  color: black !important;
  height: 60px;
  border-bottom: solid 1px #cccccc;
  border-bottom: solid 2px #efefef;
  position: relative;
  margin-top: 20px;
  font-family: 'ヒラギノ角ゴ ProN W3', 'Meiryo, メイリオ', 'Lucida Grande';
}
.content_sub_title::after {
  content: '';
  display: block;
  line-height: 0;
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 30%;
  border-bottom: 2px solid #1f55a5;
}
.image_potison {
  padding-top: 0px;
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.content-text {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.75;
  padding: 0;
  color: black !important;
  padding-bottom: 60px;
  font-family: 'ヒラギノ角ゴ ProN W3', 'Meiryo, メイリオ', 'Lucida Grande';
}
.content_title2 {
  font-size: 24px;
  font-weight: 400;
  color: black !important;
  height: 60px;
  padding: 12px 0px 12px 24px;
  border: solid 1px #cccccc;
  border-bottom: solid 5px #1f55a5;
  font-family: 'ヒラギノ角ゴ ProN W3', 'Meiryo, メイリオ', 'Lucida Grande';
}
</style>
