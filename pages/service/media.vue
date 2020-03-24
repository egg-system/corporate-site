<template>
  <div>
    <the-hero-title main-text="サービス" sub-text="オウンドメディア" />
    <section class="hero is-medium is-bold">
      <div class="hero-body">
        <div class="container">
          Comming Soon...
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'

export default {
  components: {
    TheHeroTitle
  }
}
</script>

<style lang="scss" scoped>
.container {
  font-size: 20px;
  text-align: center;
}
</style>
