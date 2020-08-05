<template>
  <div class="second-lead text-center">
    <message message="システムにかかる費用が妥当かどうか5分で簡単に診断できる<br>「ITコストシミュレーション」を無料でご利用頂けます。" />
    <!-- 
    <message message="こちらからメールアドレスをご入力頂くと<br>シミュレーション画面URLを送付いたします。" />
    -->
    <black-link label="無料で利用開始する" link="/service/it-cost/trial-calculation/" class="width-30rem" />
  </div>
</template>

<script>
import Message from '~/components/atoms/message/Message.vue'
import BlackLink from '~/components/atoms/link/BlackLink.vue'

export default {
  name: 'SecondLead',
  components: {
    Message,
    BlackLink
  }
}
</script>
<style lang="scss" scoped>
.second-lead {
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
