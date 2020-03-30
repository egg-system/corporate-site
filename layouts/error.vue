<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container center-text">
        <h1 v-if="statusCode === 404">指定されたページが見つかりませんでした。</h1>
        <h1 v-else >エラーです。</h1>
        <nuxt-link to="/">トップページ</nuxt-link>に戻る。
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'エラー'
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
