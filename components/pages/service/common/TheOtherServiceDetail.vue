<template>
  <section class="service-detail-section">
    <h3>中長期のIT戦略策定、RPA導入、リモートワーク導入、システム開発</h3>
    <div class="columns">
      <div class="column second is-5">
        <img :src="otherServiceImage">
      </div>
      <div class="service-detail column first is-7">
        <div>
          <p>
            「ITシステムを活用する」と一言でいっても、実際には様々なシステムが存在します。
          </p>
          <p>
            営業活動を支援するシステム、顧客情報を管理するシステム、
            顧客の消費行動を分析するシステム、受発注を管理するシステム、
            会計を行うシステム、リモートワークを行うシステム・・・
          </p>
          <p>
            どこから手を付けていくべきか、経営戦略に沿って適切なIT投資を行うためには
            「IT戦略」を策定する必要があります。
          </p>
          <p>
            また、手作業の業務を自動化したい。リモートワークを推進したい。
            要件にあったシステムを開発したいといった特定の課題をお抱えの場合は、
            その会社にあったやり方で対応いたします。
          </p>
        </div>
        <div class="target-title">こんな方に</div>
        <div>
          <ul>
            <li>100名以下のベンチャー・中小企業</li>
            <li>経営者・次期経営者</li>
            <li>システム導入を任されている管理職</li>
            <li>個別最適が進み、データが分散されてしまった</li>
            <li>部門ごとにばらばらのシステムを導入し、管理が煩雑</li>
            <li>紙や手作業を使った業務が多く、自動化したい</li>
            <li>リモートワークを行う環境が整っていない</li>
            <li>自社の要望にあったシステムが世の中にない</li>
          </ul>
        </div>
        <div class="service-detail-btn">
          <nuxt-link to="/service/others" class="case-button button is-dark">
            <span class="link-message">詳しく見る</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import otherServiceImage from '~/assets/service/img/other-service-image.JPG'

export default {
  computed: {
    otherServiceImage() {
      return otherServiceImage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/service/scss/service-detail.scss';
.service-detail-section {
  border: none;
}
</style>
