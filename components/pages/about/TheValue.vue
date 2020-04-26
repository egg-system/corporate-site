<template>
  <div class="about">
    <div class="value-container">
      <div class="value-inner">
        <div class="value-image">
          <figure class="image">
            <img :src="image1">
          </figure>
        </div>
        <h3 class="value-message">
          <p>実現可能性を重視</p>
        </h3>
        <p class="text">
          弊社メンバーは「コンサルティングエンジニア集団」で、全員がシステム設計・開発の経験があります。そのため、コンサルティングだけでなくの観点だけでなく、システム設計の観点から、計画が実現可能かどうかを見極めることができます。策定した計画が絵に描いた餅にならず、実現可能な「ToBe（あるべき姿）」「CanBe（現実的な解）」を策定します。
        </p>
      </div>
      <div class="value-inner">
        <div class="value-image">
          <figure class="image">
            <img :src="image2">
          </figure>
        </div>
        <h3 class="value-message">
          <p>圧倒的なコストパフォーマンス</p>
        </h3>
        <p class="text">
          間接部門や営業部門がなく、全員がプレイヤーとして動くことで間接費用を抑えています。<br>大手コンサルティング会社や大手システム開発会社の約半分という報酬額で、圧倒的なコストパフォーマンスをご提供することが可能です。
        </p>
      </div>
      <div class="value-inner">
        <div class="value-image">
          <figure class="image">
            <img :src="image3">
          </figure>
        </div>
        <h3 class="value-message">
          <p>中立的な立場</p>
        </h3>
        <p class="text">
          弊社は大手企業や特定の製品・サービスを有する企業と資本関係がなく、独立した組織です。また、代理店ビジネスはやっておりませんので、特定の製品・サービスに依存せず、中立的な立場からシステムコンサルティングやシステム開発を行います。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import strongImages from '~/assets/js/about-value.js'
export default {
  data() {
    return {
      image1: strongImages.strongImage1,
      image2: strongImages.strongImage2,
      image3: strongImages.strongImage3
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  border-bottom: 1px solid $lightgray;
  padding-bottom: 80px;
}
.value-container {
  display: flex;
  justify-content: space-between;
}
.value-inner {
  width: 25%;
  border-bottom: 1px solid $lightgray;
  padding-bottom: 15px;
}
.image {
  margin: 0;
}
.value-message {
  font-size: 1.125rem;
}
.value-message p {
  text-align: center;
}
.text {
  font-size: 0.875rem;
  line-height: 32px;
}
@media screen and (max-width: 768px) {
  .value-container {
    display: block;
  }
  .value-inner {
    width: 100%;
    padding-bottom: 30px;
  }
  .sp {
    display: none;
  }
}
</style>
