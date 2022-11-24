<template>
  <div class="entry">
    <div class="link">
      <a class="button is-dark" href="https://tenshoku.mynavi.jp/company/299628/archive/">
        <span class="link-message">エントリー</span>
        <span class="column-arrow" />
      </a>
    </div>
    <div class="link">
      <nuxt-link to="/contact" class="button is-dark">
        <span class="link-message">採用について質問する</span>
        <span class="column-arrow" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import method from '~/mixins/method'
export default {
  mixins: [method]
}
</script>

<style lang="scss" scoped>
.entry {
  width: 100%;
  margin: 0 auto;
  background: $white;
}
.link {
  width: 30rem;
  margin-top: 7rem;
}
@media screen and (max-width: 768px) {
  .link {
    width: 100%;
  }
}
</style>
