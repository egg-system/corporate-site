<template>
  <div class="main">
    <div class="title-img">
      <img src="~/assets/system-consulting/1-plan.png" alt="計画">
      <h3 class="msg-title">IT戦略・IT投資計画策定サービス</h3>
      <br>

      <div class="plan-txt">
        <p>効率よくシステム投資を行うためには『計画』が必要です。<br>「5W2H1E」を可視化したIT戦略・IT投資計画を策定することで、「何のシステムに」「いつ」「いくら」のシステム投資をすべきかを明確にします。</p>
      </div>

      <div class="plan-img">
        <plan-img />
      </div>

      <div class="card">
        <v-flex class="card-content">
          <v-card>
            <v-card-text>Why（なぜ）</v-card-text>
          </v-card>
          <v-card>
            <v-card-text>What（何を）</v-card-text>
          </v-card>
          <v-card>
            <v-card-text>When（いつ）</v-card-text>
          </v-card>
          <v-card>
            <v-card-text>Who（誰が）</v-card-text>
          </v-card>
        </v-flex>
      </div>

      <div class="card">
        <v-flex class="card-content">
          <v-card>
            <v-card-text>Where（どこで）</v-card-text>
          </v-card>
          <v-card>
            <v-card-text>How（どうやって）</v-card-text>
          </v-card>
          <v-card>
            <v-card-text>HowMuch（いくらで）</v-card-text>
          </v-card>
          <v-card>
            <v-card-text>Effect（どんな効果で）</v-card-text>
          </v-card>
        </v-flex>
      </div>

    </div>
</div></template>

<script>
import PlanImg from '~/components/system-consulting/PlanImg.vue'

export default {
  components: {
    PlanImg
  }
}
</script>

<style scoped>
.msg-title {
  color: #1f55a5 !important;
  font-size: 1.7em;
}
.flex.card-content {
  display: flex;
}
.flex {
  max-width: 100% !important;
}
.v-card {
  width: 270px;
  padding: 1em;
  font-weight: bold;
}
.theme--light.v-card {
  margin: 10px !important;
}
</style>
