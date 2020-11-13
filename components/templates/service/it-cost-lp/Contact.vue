<template>
  <div class="contact text-center">
    <message message="「シミュレーション結果について相談したい」<br>「コスト削減やシステム投資について相談したい」<br>「こんな相談してよいのか分からない」<br>「まずは話だけ聞いてみたい」<br>という方はこちらからお気軽にご相談ください。" />
    <black-link
      label="無料で相談する"
      link="/free-contact"
      class="width-30rem"
      onclick="ga('send', 'event', 'it-cost-lp-contact', 'button_click','it-cost-lp-contact_1',1);"
    />
  </div>
</template>

<script>
import Message from '~/components/atoms/message/Message.vue'
import BlackLink from '~/components/atoms/link/BlackLink.vue'

export default {
  name: 'Contact',
  components: {
    Message,
    BlackLink
  }
}
</script>
<style lang="scss" scoped>
.contact {
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
