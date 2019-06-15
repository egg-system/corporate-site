<template>
  <div class="main">
    <div class="title-img">
      <img src="~/assets/system-consulting/2-promote.png" alt="推進">
      <h3 class="msg-title">業務改善コンサルティングサービス</h3>
      <br>

      <div class="plan-txt">
        <p>現状業務の問題点を明らかにした上で、原因を分析し、対策案を策定します。<br>必要に応じてシステムやツールの導入も検討しながら、実現可能な業務効率化を行います。</p>
      </div>

      <div class="promote-img">
        <promote-img />
      </div>

      <div class="card">
        <v-flex xs12 sm3 md3>
          <v-card>
            <v-card-text>ヒアリングによる<br>現行業務の可視化</v-card-text>
          </v-card>
          <v-card>
            <v-card-text>現状の問題点の洗い出し<br>（あるべき姿とのGAP）</v-card-text>
          </v-card>
          <v-card>
            <v-card-text>問題定義および<br>原因分析</v-card-text>
          </v-card>
          <v-card>
            <v-card-text>解決案の策定<br>（実現可能な新業務フロー策定等）</v-card-text>
          </v-card>
        </v-flex>
      </div>

    </div>
</div></template>

<script>
import PromoteImg from '~/components/system-consulting/PromoteImg.vue'

export default {
  components: {
    PromoteImg
  }
}
</script>

<style scoped>
.msg-title {
  color: #1f55a5 !important;
  font-size: 1.7em;
}
.flex.md3 {
  display: flex;
}
.flex {
  max-width: 100% !important;
}
.v-card {
  width: 270px;
  font-weight: bold;
  padding-top: 1em;
  padding-bottom: 1em;
}
.theme--light.v-card {
  margin: 10px !important;
}
</style>
