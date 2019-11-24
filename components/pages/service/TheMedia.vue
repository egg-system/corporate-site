<template>
  <section class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          オウンドメディア運営
        </h1>
        <h2 class="subtitle is-6">
          あなたが進む「サロン開業」への道のりをそっと支え、共に歩んでいく。開業支援の「EGG」
        </h2>
        <button class="button is-primary" @click="go('/service/media')">詳細をみる</button>
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
</style>
