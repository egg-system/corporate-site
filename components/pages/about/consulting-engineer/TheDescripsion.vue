<template>
  <div class="columns about-consulting-engineer-descripsion">
    <div class="column is-6 about-consulting-engineer-descripsion-image">
      <img :src="consultingImage" >
    </div>
    <div class="column is-6">
      <p>
        弊社では「システムコンサルティング」と「システムエンジニアリング（システム開発）」を組み合わせて、
      </p>
      <p class="is-emphasis is-red">
        『コンサルティングエンジニア』
      </p>
      <p>
        という造語を使っています。
      </p>
      <p>
        弊社メンバー全員がシステムコンサルティングとシステム開発の経験・スキルを有しており、自分たちのことを<span class="is-emphasis">『コンサルティングエンジニア集団』</span>と名乗っています。
      </p>
      <p>
        また、中長期的なIT戦略策定やシステム選定といった「コンサルティング・企画フェーズ」から、システム導入・開発や社員教育といった「システム開発・運用フェーズ」まで対応するサービスをベンチャー・中小企業向けに提供しており、『コンサルティングエンジニアサービス』と呼んでいます。
      </p>
    </div>
  </div>
</template>

<script>
import consultingImage from '~/assets/service/img/consult-image.JPG'

export default {
  computed: {
    consultingImage() {
      return consultingImage
    }
  }
}
</script>

<style lang="scss" scoped>
.about-consulting-engineer-descripsion {
  margin-bottom: 6rem;

  @media screen and (min-width: 1024px) {
    &-image {
      padding-right: 4rem;
    }

    p {
      margin-left: 2rem;
      margin-bottom: 2rem;
    }
  }

  .is-red {
    color: red;
  }

  .is-emphasis {
    font-weight: bold;
  }
}
</style>
