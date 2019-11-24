<template>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          サロン開業支援サービス
        </h1>
        <h2 class="subtitle is-6">
          施術以外の不安をゼロにし、自分の力で集客して店舗経営するサロンオーナーの「欲しい」を形にした「サロン特化開業支援サービス」<br>
          顧客に合わせたメニュー・コンセプト作りから、ホームページの制作、集客方法の設計、予約や会計まで一貫したオペレーションを実現します
        </h2>
        <button class="button" @click="go('/service/salon')">詳細をみる</button>
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
</style>
