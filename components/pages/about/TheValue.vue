<template>
  <div class="about">
    <div class="value-container">
      <div class="value-inner">
        <div class="value-image">
          <figure class="image">
            <img :src="image1">
          </figure>
        </div>
        <div class="value-message">
          <p>システム導入・開発を<br class="sp">ゴールにしない</p>
        </div>
        <p>
          お客様にとってはシステム導入・開発が<br class="sp">ゴールではなく、導入後にシステムを活<br class="sp">用することが重要です。そのため、企<br class="sp">画・戦略の策定から開発や運用まで一貫<br class="sp">して対応します。
        </p>
      </div>
      <div class="value-inner">
        <div class="value-image">
          <figure class="image">
            <img :src="image2">
          </figure>
        </div>
        <div class="value-message">
          <p>圧倒的なコストパフォーマンスを<br class="sp">ご提供する</p>
        </div>
        <p>
          弊社では営業担当がおらず間接費用を抑<br class="sp">えているため、圧倒的なコストパフォー<br class="sp">マンスの提供が可能です。大手コンサル<br class="sp">ティング会社や大手システム開発会社の<br class="sp">約半分という報酬額でサービスを提供し<br class="sp">ます。
        </p>
      </div>
      <div class="value-inner">
        <div class="value-image">
          <figure class="image">
            <img :src="image3">
          </figure>
        </div>
        <div class="value-message">
          <p>技術力や他社事例により<br class="sp">計画を具現化する</p>
        </div>
        <p>
          コンサルティングだけでなく技術力も兼<br class="sp">ね備えているため、「絵に描いた餅」で<br class="sp">終わることなく、計画を実現させるとこ<br class="sp">ろまで責任を持って対応します。<br class="sp">豊富な他社事例のご紹介もしながら、実<br class="sp">現に向けて推進します。
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
  border-bottom: 2px solid $whitesmoke;
  padding-bottom: 80px;
}
.value-container {
  display: flex;
  justify-content: space-between;
}
.value-inner {
  width: 25%;
  border-bottom: 1px solid $whitesmoke;
  padding-bottom: 15px;
}
.image {
  margin: 0;
}
.value-message {
  margin: 10px 0;
}
.value-message p {
  font-size: 18px;
  text-align: center;
}
@media screen and (max-width: 600px) {
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
