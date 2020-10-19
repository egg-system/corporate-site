<template>
  <section class="service-detail-section">
    <h3>IT監査をクリアでき、安全面と運用面を考慮したIT統制を整備</h3>
    <div class="columns">
      <div class="column second is-5">
        <img :src="itControllImage">
      </div>
      <div class="service-detail column first is-7">
        <div>
          <p>
            上場に向けては内部統制への対応が必須です。<br>
            特にIT統制については、ITシステムの環境を整備し、
            情報セキュリティーポリシー等の各種規定や運用手順書を整備する必要があり、
            対応には時間がかかります。
          </p>
          <p>
            安全面だけを考慮すると、運用の手間がかかり社員への負荷が上がってしまいます。
            そのため、安全面を考慮しながらも社員への負荷を出来るだけ
            上げないように運用面も考慮した対応が必要です。
          </p>
          <p>
            当社では上場準備会社でのIT統制支援実績があるため、
            安全かつスピーディーにIT統制への対応が可能です。
            ITシステム環境構築、規定類の作成、運用手順書の作成、
            フローチャート・業務記述書・リスクコントロールマトリクス（RCM）の作成を行っています。
          </p>
        </div>
        <div class="target-title">こんな方に</div>
        <div>
          <ul>
            <li>50名以下のベンチャー企業</li>
            <li>上場準備会社</li>
            <li>経営者</li>
            <li>システムの運用管理を任されている管理職</li>
            <li>今後IT監査を受ける予定</li>
            <li>監査法人からIT統制に関する指摘を受けている</li>
          </ul>
        </div>
        <div class="service-detail-btn">
          <nuxt-link to="/service/it-control" class="case-button button is-dark">
            <span class="link-message">詳しく見る</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import itControllImage from '~/assets/service/img/it-control-image.JPG'

export default {
  computed: {
    itControllImage() {
      return itControllImage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/service/scss/service-detail.scss';
</style>
