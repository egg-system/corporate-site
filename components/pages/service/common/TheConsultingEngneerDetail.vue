<template>
  <section class="service-detail-section">
    <h3>売上拡大・利益率向上を実現するためにシステム企画から運用まで対応</h3>
    <div class="columns">
      <div class="column second is-5">
        <img :src="consultingImage">
      </div>
      <div class="service-detail column first is-7">
        <div>
          <p>
            ITシステムを活用して単純作業を効率化することで、本来割くべき売上に直結する業務（付加価値の高い業務）へ時間を割くことができます。付加価値の高い業務へ時間を費やすことで、売上を拡大することが可能です。
          </p>
          <p>
            従業員としても、より付加価値の高い業務を行うことでモチベーション向上にも繋がりますし、働きやすさをアピールすることで採用にも繋がります。
          </p>
          <p>
            実現したい目的に沿って、戦略や計画を策定する企画段階からご支援し、お客様と一緒に手を動かしながら目的達成まで責任を持って対応します。
          </p>
        </div>
        <div class="target-title">
          こんな方に
        </div>
        <div>
          <ul>
            <li>ベンチャー・中小企業</li>
            <li>経営者・次期経営者</li>
            <li>管理部門（総務部、経理部等）の管理職</li>
            <li>システム導入を任されている責任者</li>
            <li>売上拡大のため社内の業務効率化が必要な企業</li>
            <li>紙や手作業を使った業務が多い</li>
          </ul>
        </div>
        <div class="service-detail-btn">
          <nuxt-link to="/service/consulting-engineer" class="case-button button is-dark">
            <span class="link-message">詳しく見る</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
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
@import '~/assets/service/scss/service-detail.scss';
</style>
