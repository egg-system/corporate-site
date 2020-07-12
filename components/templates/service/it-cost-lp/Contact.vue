<template>
  <div class="contact text-center">
    <message message="「シミュレーション結果について相談したい」<br>「コスト削減やシステム投資について相談したい」<br>「こんな相談してよいのか分からない」<br>「まずは話だけ聞いてみたい」<br>という方はこちらからお気軽にご相談ください。" />
    <black-link label="お問い合わせへ" link="/contact" class="width-30rem" />
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
