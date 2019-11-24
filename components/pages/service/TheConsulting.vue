<template>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          システムコンサルティング
        </h1>
        <h2 class="subtitle is-6">
          システム導入およびシステム導入後の運用における「計画」「推進」「管理」に沿ったコンサルティングサービスを提供します。
        </h2>
        <button class="button" @click="go('/service/consulting')">詳細をみる</button>
      </div>
    </div>
  </section>
</template>

<script>
import method from '~/mixins/method'

export default {
  mixins: [method]
}
</script>

<style lang="scss" scoped>
.hero-body {
  background-image: url('https://storage.googleapis.com/prd-careers-asset/2019/05/8d4f1b0a-hero-pc.jpg');
  background-attachment: fixed;
}
/* スマホの場合は画像を変える */
@media screen and (max-width: 400px) {
  .hero-body {
    background-image: url('https://storage.googleapis.com/prd-careers-asset/2019/05/83b474fd-hero-sp.jpg');
    background-position: 50%;
  }
}
</style>
