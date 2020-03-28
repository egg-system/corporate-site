<template>
  <div>
    <the-hero-title main-text="プライバシー" />
    <div class="content page-content">
      <p class="sub">１．個人情報の管理</p>
      <p>株式会社 エッグシステム（EGG SYSTEM, Inc.）では、お客さまからお預かりした個人情報は、株式会社 エッグシステム（EGG SYSTEM, Inc.）からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>

      <p class="sub blank">２．個人情報の第三者への開示・提供の禁止</p>
      <p>株式会社 エッグシステム（EGG SYSTEM, Inc.）は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
      <li>お客さまの同意がある場合</li>
      <li>お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
      <li>法令に基づき開示することが必要である場合</li>

      <p class="sub blank">３．個人情報の安全対策</p>
      <p>株式会社 エッグシステム（EGG SYSTEM, Inc.）は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p>

      <p class="sub blank">４．ご本人の照会</p>
      <p>株式会社 エッグシステム（EGG SYSTEM, Inc.）では、お客さまがご本人から、個人情報の照会・修正・削除などを求められたときは、ご本人であることを確認の上、対応いたします。</p>

      <p class="sub blank">５．法令、規範の遵守と見直し</p>
      <p>株式会社 エッグシステム（EGG SYSTEM, Inc.）は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>

      <p class="sub blank">６．お問い合わせ</p>
      <p>株式会社 エッグシステム（EGG SYSTEM, Inc.）の個人情報の取扱に関するお問い合せは、下記までご連絡ください。</p>
      <div class="contact">
        <p>
          株式会社エッグシステム（EGG SYSTEM, Inc.）<br><br>
          〒160-0023<br>
          東京都新宿区西新宿8-11-10 星野ビル3F<br>
          TEL：03-6262-9734<br>
          MAIL：<nuxt-link to="/contact">お問い合わせ</nuxt-link>フォームよりお願いいたします<br>
        </p>
      </div>
    </div>

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
.sub {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}
.blank {
  margin-top: 50px;
}
.contact {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: $black;
  background: $whitesmoke;
}
.contact p {
  margin: 10px;
  padding: 0;
}
</style>
