<template>
  <section class="service">
    <div class="columns">
      <div class="column is-4 center font-size-24px bold">
        <h2 class="">x-faCEについてもっと知る</h2>
      </div>
      <black-link class="column is-4" label="コンサルティングエンジニアサービスへ" link="/service" />
      <black-link class="column is-4" label="自社サービス紹介へ" link="/own_site" />
    </div>
  </section>
</template>

<script>
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import BlackLink from '~/components/atoms/BlackLink.vue'

export default {
  components: {
    TheSubHeader,
    BlackLink
  }
}
</script>

<style lang="scss" scoped>
.font-size-24px {
  font-size: 24px;
}
.bold {
  font-weight: bold;
}
.service {
  width: 80%;
  margin: 0 auto;
  padding-top: 8%;
  padding-bottom: 8%;
  border-top: 1px solid $lightgray;
  border-bottom: 1px solid $lightgray;
}
.columns {
  margin: 0;
}
.center {
  text-align: center;
  align-items: center;
  margin: auto;
}

@media screen and (max-width: 600px) {
  .service {
    width: 90%;
    padding-bottom: 0;
  }
  .link {
    width: 100%;
  }
}
@media screen and (max-width: 769px) {
  .link {
    margin: 50px auto;
  }
  .column {
    padding: 0;
  }
}
</style>
