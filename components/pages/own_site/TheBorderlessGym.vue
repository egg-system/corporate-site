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
        <div class="message">BorderlessGYMは、ジムとトレーナーが出会うための複業マッチングプラットフォームです。</div>
        <div class="message">
          トレーナーの複業・副業を推進し、会社・組織の境目をなくしていくことで、 より柔軟な働き方を実現し、経済的・精神的な自由を得るためのサービスです。
        </div>
      </div>
      <h3 class="borderless-title">ジムにおける複業・副業とは。</h3>
      <div class="borderless-use column">
        <div>人手不足に困っているジムで複業・副業をすることにより、 今の仕事を続けながら新しい働き方へチャレンジすることができます。</div>
        <div>リスクを取らずに複業・副業することで、 ジムで働くトレーナーは 「収入を増やす」 「新しいジムで経験を積む」 ことができ、 フリーランスのトレーナーは 「自分のジムを運営しながら収入を補てんする」 「上手くいっているジムのノウハウを学ぶ」 ことができます。</div>
        <div>ジムで複業・副業をすることが、あなたの理想を叶えるための一つの手段です。</div>
      </div>
      <div class="borderless-use column">
        <div class="feature">feature 1</div>
        <div>
          <figure class="image feature">
            <img :src="borderlessFeature1Image" class="feature">
          </figure>
        </div>
        <div>平日夜・休日 週1〜自由に勤務が可能。</div>
        <div>いつでもどこでも、ご自身の都合に合わせて働くことができます。 週1日でも、夜だけでも、週末だけでも、空いた時間を使って自由に働くことができます。</div>
      </div>
      <div class="borderless-use column">
        <div class="feature">feature 2</div>
        <div>
          <figure class="image feature">
            <img :src="borderlessFeature2Image" class="feature">
          </figure>
        </div>
        <div>複業・副業未経験OK。</div>
        <div>今のジムで働きながらエントリーできます。フリーランスの方でもエントリー可能です。 マッチングしたジムで働くことで、お金を得るだけでなく、新しいジムで得た経験は今後のキャリア形成にも活かせます。</div>
      </div>
      <div class="borderless-use column">
        <div class="feature">feature 3</div>
        <div>
          <figure class="image feature">
            <img :src="borderlessFeature3Image" class="feature">
          </figure>
        </div>
        <div>気になるジムにエントリーするだけ。</div>
        <div>登録後は、気になるジムにエントリーするだけなので簡単に複業・副業を始められます。 ジムからメッセージが送られてきたらマッチング成立です。 ジムからオファーが届くこともあるため、待っているだけでマッチングが成立することもあります。</div>
      </div>
      <div class="link">
        <a class="button is-dark" target="_blank" href="https://borderless-gym.com/">
          「Borderless GYM」サービスはこちらから
        </a>
      </div>
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
    padding: 4rem;
    padding-top: 1rem;
  }
}
.feature img {
  width: 150px;
  height: 100px;
  object-fit: contain;
  margin: 0 auto;
}
.message {
  background-color: inherit;
  line-height: 1.25 !important;
}
.columns {
  margin-bottom: 3rem;
  .column {
    position: relative;
    div {
      line-height: 1.75;
    }
  }
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
.borderless-use {
  border-bottom: 1px solid $lightgray;
  padding-bottom: 80px;
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
