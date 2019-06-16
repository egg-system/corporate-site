<template>
  <div class="main">
    <div class="title-img">
      <img src="~/assets/system-consulting/1-plan.png" alt="計画">
      <h3 class="msg-title">IT戦略・IT投資計画策定<br class="br-sp">サービス</h3>
      <br>

      <div class="plan-txt">
        <p>効率よくシステム投資を行うためには『計画』が必要です。<br>「5W2H1E」を可視化したIT戦略・IT投資計画を策定することで、「何のシステムに」「いつ」「いくら」のシステム投資をすべきかを明確にします。</p>
      </div>

      <div class="plan-img">
        <plan-img />
      </div>

      <div class="card">
        <v-flex class="card-content">
          <v-card class="why">
            <v-card-text>Why（なぜ）</v-card-text>
          </v-card>
          <v-card class="what">
            <v-card-text>What（何を）</v-card-text>
          </v-card>
          <v-card class="when">
            <v-card-text>When（いつ）</v-card-text>
          </v-card>
          <v-card class="who">
            <v-card-text>Who（誰が）</v-card-text>
          </v-card>
        </v-flex>
      </div>

      <div class="card">
        <v-flex class="card-content">
          <v-card class="where">
            <v-card-text>Where（どこで）</v-card-text>
          </v-card>
          <v-card class="how">
            <v-card-text>How（どうやって）</v-card-text>
          </v-card>
          <v-card class="howmuch">
            <v-card-text>HowMuch（いくらで）</v-card-text>
          </v-card>
          <v-card class="effect">
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
.main {
  width: 100% !important;
}
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
  width: 100%;
  padding: 1em;
  font-weight: bold;
}
.theme--light.v-card {
  margin: 2% !important;
}
/* スマホ対応 */
@media screen and (max-width: 767px) {
  .v-card {
    padding: 0;
  }
  .theme--light.v-card {
    margin: 20px 0 20px 0 !important;
  }
  .flex.card-content {
    display: inline;
  }
}

/* タブレット＆PC */
@media screen and (min-width: 768px) {
  .br-sp {
    display: none;
  }
}
</style>
