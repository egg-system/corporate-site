<template>
  <div>
    <the-hero-title main-text="お問い合わせ 完了" />
    <div class="content">
      お問い合わせ完了しました。<br>
      内容確認してご連絡致しますので、それまでしばらくお待ちください。
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
  width: 80%;
  margin: 30px auto;
  text-align: center;
}
/* スマホの場合は幅を広くする */
@media screen and (max-width: 400px) {
  .content {
    width: 90%;
    margin: 30px auto;
    text-align: center;
  }
}
</style>
