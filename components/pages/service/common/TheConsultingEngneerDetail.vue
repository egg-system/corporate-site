<template>
  <section class="service-detail-section">
    <h3>売上拡大・業務効率化を実現するためにシステム企画から運用まで対応可能</h3>
    <div class="columns">
      <div class="column second is-5">
        <img :src="consultingImage">
      </div>
      <div class="service-detail column first is-7">
        <div>
          <p>
            「整体・エステ・パーソナルトレーニングジム等、実店舗の実績を上げたい」<br>
            「ECサイトでの販売を始めたい」<br>
            「Amazonや楽天、Yahooなどの売り場を増やしたいが手間が増えるため躊躇している」<br>
            「働き方改革として従業員満足度を上げたい」「社員を採用したい」
          </p>
          <p>
            ITシステムを活用して単純作業を効率化することで、
            本来割くべき売上に直結する業務（付加価値の高い業務）へ時間を割くことができます。
            付加価値の高い業務へ時間を費やすことで、結果的に売上を拡大することができます。
          </p>
          <p>
            従業員としても、より付加価値の高い業務をやることでモチベーション向上にも繋がりますし、
            働きやすさをアピールすることで採用にも繋がります。
          </p>
          <p>
            実現したい目的に沿って、戦略・計画を策定する企画段階からご支援し、
            お客様と一緒に手を動かしながら目的達成まで責任を持って対応します。
          </p>
        </div>
        <div class="target-title">
          こんな方に
        </div>
        <div>
          <ul>
            <li>100名以下のベンチャー・中小企業</li>
            <li>経営者・次期経営者</li>
            <li>システム導入を任されている管理職</li>
            <li>売上を拡大したい店舗ビジネスのオーナー</li>
            <li>売上が下がっている</li>
            <li>社員一人ひとりの生産性を上げたい</li>
            <li>紙や手作業を使った業務が多い</li>
            <li>採用ができない</li>
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
