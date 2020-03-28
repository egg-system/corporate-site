<template>
  <div class="message">
    <div class="message is-medium is-white">
      <p>「こんな相談をしてよいのかどうか分からない」</p>
      <p>「まずは話だけ聞いてみたい」</p>
      <p>といった方もお気軽にご相談ください。</p>
    </div>
    <div class="link">
      <nuxt-link to="/contact" class="button is-dark">
        <div class="link-message">相談する</div>
        <div class="arrow">></div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.message {
  margin-top: 30px;
  margin-bottom: 16px;
  text-align: center;
  background-color: $white;
  .message .button {
    color: $black;
  }
}
.link .button {
  width: 300px;
}
</style>
