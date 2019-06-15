<template>
  <div class="main">
    <img src="~/assets/system-consulting/3-manage.png" alt="管理">
    <h3 class="msg-title">プロジェクトマネジメントサービス</h3>
    <br>

    <div class="plan-txt">
      <p>プロジェクトマネージャー支援という立場で、QCD（品質、コスト、納期）の観点で進捗や課題等を管理します。<br>それだけでなく、課題解決に向けた推進や、ステークホルダー間での調整など、プロジェクトが円滑に進むようにマネジメントします。</p>
    </div>

    <div class="manage-img-txt">
      <div class="manage-img">
        <manage-img />
      </div>
      <div class="card">
        <v-flex xs12 sm3 md3>
          <v-card>
            <v-card-text class="card-officer"><div class="card-title">○経営層向け</div><br><div class="card-txt">プロジェクトの状況を取りまとめ、経営層への報告資料を作成します。具体的には、品質状況、コスト(予算)、スケジュール、課題、リスクにおける現状と対応策についてご報告します。</div></v-card-text>
          </v-card>
          <v-card>
            <v-card-text class="card-member"><div class="card-title">○プロジェクトメンバー向け</div><br><div class="card-txt">プロジェクト方針を伝え、現場業務に携わるメンバーの協力を得ながらプロジェクトを推進します。複数のステークホルダー間で行う各種会議をファシリテートし、PM欠席時は代理で一次判断を行います。</div></v-card-text>
          </v-card>
        </v-flex>
      </div>
    </div>

  </div>
</template>

<script>
import ManageImg from '~/components/system-consulting/ManageImg.vue'

export default {
  components: {
    ManageImg
  }
}
</script>

<style scoped>
.msg-title {
  color: #1f55a5 !important;
  font-size: 1.7em;
}
.flex.md3 {
  /*  display: flex;*/
}
.flex {
  max-width: 100% !important;
}
.v-card {
  width: 350px;
  font-weight: bold;
  padding-top: 1em;
  padding-bottom: 1em;
}
.theme--light.v-card {
  margin: 30px !important;
}
.manage-img {
  display: inline-block;
  vertical-align: top;
  padding: 20px;
}
.card {
  display: inline-block;
  padding: 20px;
}
.card-txt {
  text-align: left;
}
</style>
