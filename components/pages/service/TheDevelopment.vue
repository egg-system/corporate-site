<template>
  <section class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          システム開発
        </h1>
        <h2 class="subtitle is-6">
          ホームページ制作、Webシステム開発を行います
        </h2>
        <button class="button is-primary" @click="go('/service/development')">詳細をみる</button>
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
