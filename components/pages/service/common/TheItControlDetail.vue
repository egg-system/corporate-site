<template>
  <section class="service-detail-section">
    <h3>安全面と運用面を考慮した上でIT監査をクリアできるIT統制を整備</h3>
    <div class="columns">
      <div class="column second is-5">
        <img :src="itControllImage">
      </div>
      <div class="service-detail column first is-7">
        <div>
          <p>
            資金調達後のベンチャー企業では内部統制への対応が必要です。<br>
          </p>
          <p>
            IT統制においては、ITシステム環境を構築した上で、情報セキュリティーポリシーなどの各種規定や運用手順書を整備する必要があり、対応には時間がかかります。
          </p>
          <p>
            安全面だけを考慮すると、運用の手間がかかり社員への負荷が上がってしまいます。そのため、安全面を考慮しながらも社員への負荷を出来るだけ上げないように運用面を考慮した対応が必要です。
          </p>
          <p>
            当社ではベンチャー企業へのIT統制支援実績があり、監査法人の指摘ゼロを実現した実績もありますので、安全かつスピーディーにIT統制の対応ができます。ITシステム環境の構築、規定類の作成、運用手順書の作成、フローチャート・業務記述書・リスクコントロールマトリクス（RCM）の作成、全社的なIT統制・IT全般統制の評価などを行います。
          </p>
        </div>
        <div class="target-title">こんな方に</div>
        <div>
          <ul>
            <li>50名以下のベンチャー企業</li>
            <li>シリーズBで資金調達を終えたベンチャー企業</li>
            <li>経営者</li>
            <li>システムの運用管理を任されている管理職</li>
            <li>今後IT監査を受ける予定</li>
            <li>監査法人からIT統制に関する指摘を受けている</li>
            <li>評価が形式的になっており実態に即した内部統制が整備されていない</li>
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
