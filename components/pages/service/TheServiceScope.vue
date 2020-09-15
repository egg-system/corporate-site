<template>
  <div class="service-scope columns">
    <div class="service-scope-image column is-half">
      <figure class="image">
        <img :src="serviceScopeImage">
      </figure>
    </div>
    <div class="service-scope-content column is-half">
      <p>
        我々はITシステムのコンサルティングエンジニアのため、<br>
        経営／全社戦略や事業戦略のご支援は行っていません。
      </p>
      <p>
        経営戦略にもとづいた、IT戦略以降の工程はすべて対応しています。
      </p>
      <p>
        ITシステムの導入だけでなく、運用フェーズにおける社内ルールの策定や
        社員様への教育まで行っています。
      </p>
    </div>
  </div>
</template>

<script>
import serviceScopeImage from '~/assets/service/img/service-scope.png'

export default {
  computed: {
    serviceScopeImage() {
      return serviceScopeImage
    }
  }
}
</script>

<style lang="scss" scoped>
.service-scope {
  margin: 3rem 0 5rem;

  &-image {
    padding: 0;

    .image {
      margin: 0;
    }
  }

  &-content {
    font-size: 0.9rem;

    @media screen and (max-width: 1023px) {
      margin-top: 3rem;
    }

    @media screen and (min-width: 1024px) {
      padding: 1rem 0 1rem 3rem;
    }

    p {
      margin-bottom: 2rem;
    }
  }
}
</style>
