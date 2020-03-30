<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container center-text">
        <h1>
          指定されたページが見つかりませんでした。
        </h1>
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
  }
}
</script>

<style lang="scss" scoped>
</style>
