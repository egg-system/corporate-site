<template>
  <div>
    <the-sub-header text="「Borderless GYM」サービス" class="subheader" />
    <div class="columns reverse">
      <div class="column is-half">
        <figure class="image is-half">
          <img :src="borderlessTopImage">
        </figure>
      </div>
      <div class="column borderless">
        <div class="">BorderlessGYMは、ジムとトレーナーが出会うための複業マッチングプラットフォームです。</div>
        <div class="">
          トレーナーの複業・副業を推進し、会社・組織の境目をなくしていくことで、 より柔軟な働き方を実現し、経済的・精神的な自由を得るためのサービスです。
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="borderless-use column">
        <h3 class="borderless-title">ジムにおける複業・副業とは。</h3>
        <div>人手不足に困っているジムで複業・副業をすることにより、 今の仕事を続けながら新しい働き方へチャレンジすることができます。</div>
        <div>リスクを取らずに複業・副業することで、 ジムで働くトレーナーは 「収入を増やす」 「新しいジムで経験を積む」 ことができ、 フリーランスのトレーナーは 「自分のジムを運営しながら収入を補てんする」 「上手くいっているジムのノウハウを学ぶ」 ことができます。</div>
        <div>ジムで複業・副業をすることが、あなたの理想を叶えるための一つの手段です。</div>
      </div>
    </div>
    <div class="link">
      <a class="button is-dark" target="_blank" href="https://borderless-gym.com/">
        「Borderless GYM」サービスはこちらから
      </a>
    </div>
  </div>
</template>

<script>
import TheSubHeader from '~/components/pages/service/common/TheSubHeader.vue'
import TheCase from '~/components/pages/service/common/TheCase.vue'
import borderlessTopImage from '~/assets/own_site/borderless-top.png'
import borderlessFeature1Image from '~/assets/own_site/borderless-feature1.png'
import borderlessFeature2Image from '~/assets/own_site/borderless-feature2.png'
import borderlessFeature3Image from '~/assets/own_site/borderless-feature3.png'
import systemConsultingCases from '~/assets/service/js/SystemConsultingCases.js'

export default {
  components: {
    TheSubHeader,
    TheCase
  },
  data: () => ({
    borderlessTopImage,
    borderlessFeature1Image,
    borderlessFeature2Image,
    borderlessFeature3Image,
    cases: systemConsultingCases.cases
  })
}
</script>

<style lang="scss" scoped>
div {
  letter-spacing: 1px;
}
.columns {
  margin: auto;
  margin-top: 1rem;
  .is-half {
    padding: 3rem;
    padding-top: 1rem;
  }
  .column {
    position: relative;
    div {
      line-height: 1.75;
    }
  }
}
.feature img {
  width: 150px;
  height: 100px;
  object-fit: contain;
  margin: 0 auto;
}
.table {
  border: 1px solid $lightgray;
  margin: 0px;
  margin-bottom: 3rem;
  .column {
    padding: 0px;
  }
}
.table-title {
  margin-bottom: 1rem;
}
.borderless {
  padding-top: 4rem;
}
.borderless-use {
  border-bottom: 1px solid $lightgray;
  padding-bottom: 80px;
  text-align: center;
}
.feature {
  text-align: center;
}
@media screen and (min-width: 769px) {
  .left::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 90%;
    top: 5%;
    right: 0;
    background: $lightgray;
  }
  .reverse {
    flex-direction: row-reverse;
  }
}
@media screen and (max-width: 768px) {
  .duration-cost::after {
    position: absolute;
    content: '';
    width: 90%;
    height: 1px;
    background: $lightgray;
    margin-top: 0.5rem;
  }
  .five-ws {
    margin-bottom: 0.25rem;
    .description {
      margin-left: 1rem;
    }
  }
}
.borderless-use {
  padding-top: 30px;
}
.borderless-title {
  text-align: center;
}
.borderless-use li {
  text-align: center;
  padding: 10px 5px;
  list-style: none;
}
.link {
  width: 30rem;
  margin: 30px auto;
}

@media screen and (max-width: 600px) {
  .link {
    width: 100%;
  }
  .columns {
    .is-half {
      padding: 0;
      padding-top: 1rem;
    }
  }
  .borderless-use li {
    text-align: center;
  }
}
</style>
