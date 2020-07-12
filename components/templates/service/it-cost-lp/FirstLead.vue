<template>
  <div class="first-lead">
    <message
      message="ITコストが妥当かどうか5分で簡単に診断できる<br>「ITコストシミュレーション」を無料でご利用頂けます。"
      class="text-center"
    />
    <message
      message="貴社の業務・売上規模・従業員数・ITコストを入力することで<br>経済産業省が公表しているデータに基づき<br>同業他社と比較してITコストが妥当かどうか判定します。"
      class="text-center"
    />
    <black-link label="無料で利用開始する" link="/service/it-cost" class="width-30rem" />
  </div>
</template>

<script>
import Message from '~/components/atoms/message/Message.vue'
import BlackLink from '~/components/atoms/link/BlackLink.vue'

export default {
  name: 'FirstLead',
  components: {
    Message,
    BlackLink
  }
}
</script>
<style lang="scss" scoped>
.first-lead {
  padding: 4rem 0;
}
.text-center {
  text-align: center;
}
@media screen and (min-width: 769px) {
  .width-30rem {
    width: 30rem !important;
  }
}
@media screen and (max-width: 769px) {
}
</style>
