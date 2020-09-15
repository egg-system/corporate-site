<template>
  <div class="service-feature">
    <div class="service-feature-title">
      システムコンサルティング業界初<br>
      『初月無料の月額定額サービス』
    </div>
    <div class="columns">
      <div class="column is-half">
        <div class="service-feature-content">
          <p>
            担当者のスキルやスタイルを知った上状態でご依頼いただく、
            という形がお客様にとっても弊社にとっても理想であると考えています。
          </p>
          <p>
            そこで、コンサルティングエンジニアサービスを『初月無料』にさせて頂き、
            まずは弊社のサービスをお試しいただくことにしました。
            １ヶ月試していただき、万が一ご期待に添えない結果であれば、
            そこで終了して頂いて、構いません。
          </p>
          <p>
            その代わり、弊社は精一杯尽力いたしますので、ご評価いただけるようでしたら、
            ２ヶ月目以降も一緒にお仕事をさせていただきたく考えております。
          </p>
          <p>
            これは弊社が自信をもってサービスを提供しているからできるモデルです。
          </p>
          <p>
            「本当に価値のあるサービスなのか」<br>
            ということを初めてお取引する企業様に見極めていただくための『初月無料』です。
          </p>
        </div>
      </div>
      <div class="column is-half">
        <figure class="service-feature-image">
          <img :src="consultingImage">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import consultingImage from '~/assets/service/img/service-consult01.JPG'

export default {
  computed: {
    consultingImage() {
      return consultingImage
    }
  }
}
</script>

<style lang="scss" scoped>
.service-feature {
  margin-bottom: 6rem;

  @media screen and (min-width: 1024px) {
    padding: 2rem 2rem 0;
  }

  &-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  &-content {
    p {
      margin: 1rem 0;
      font-size: 0.9rem;
    }
  }
}
</style>
