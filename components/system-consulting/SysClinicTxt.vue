<template>
  <div class="container-sysclinic">
    <div class="head-title">
      「どのサービスから依頼すればよいかわからない」という企業様向け
    </div>
    <br>
    <div class="title">
      システム分析・診断サービス
    </div>
    <br>
    <div class="description">
      社内で使用しているシステム（販売管理、人事給与、会計、POSレジなど）や、ホームページ、ECサイト、といった各システムにかかる費用の妥当性を簡易的に診断します。また、情報システム部門の人数や、各システムの有効性を客観的に診断します。まずお気軽にご相談ください。
    </div>
    <br>
    <div class="container-btn">
      <btn />
    </div>
  </div>
</template>

<script>
import Btn from '~/components/system-consulting/Btn.vue'

export default {
  components: {
    Btn
  }
}
</script>

<style scoped>
.list,
.title {
  text-align: center;
}
.title {
  font-weight: bold;
  font-size: 1.7em !important;
}

.container-sysclinic {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  padding: 1.2em;
  background-color: #eeeeee;
}
/* タグレット・PC対応 */
@media screen and (max-width: 1024px) {
  .img_3point {
    width: 300px;
  }
}
</style>
