<template>
  <div>
    <the-hero-title main-text="無料相談フォームの送信完了" />
    <div class="content page-content">
      無料相談フォームの送信が完了しました。<br>
      <br>
      後日、担当者よりご連絡させて頂きますので、しばらくお待ちください。
      <br>
      株式会社エッグシステム
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheForm from '~/components/pages/contact/TheForm.vue'

export default {
  components: {
    TheHeroTitle
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 30px auto;
  text-align: center;
}
/* スマホの場合は幅を広くする */
@media screen and (max-width: 400px) {
  .content {
    margin: 30px auto;
    text-align: center;
  }
}
</style>
