<template>
  <div class="free-reason-area">
    <div class="free-reason-box">
      <div class="free-reason-title">
        システムコンサルティングは金額が高い上に<br>
        担当するコンサルタントによって成果が大きく変わる。<br>
        しかし、発注する時点ではどういう人なのか分からないという課題。
      </div>
      <div>
        <p>
          例えば、10年間で中小企業を100社担当した実績のあるコンサルタントと、
          10年間で大手企業1社を担当した実績のあるコンサルタントでは、
          スキル・ノウハウ・経験に大きな違いがあります。
        </p>
        <p>
          前者のコンサルタントは中小企業の豊富な事例を持っていますので、
          中小企業における課題解決は得意で、アプリケーションからインフラ、ネットワークまで
          幅広い知識を持っていると考えられます。
          一方、後者のコンサルタントは大手企業における特定の領域のプロフェッショナルで、
          大きなプロジェクトを推進するのは得意ですが、中小企業に対する課題解決は苦手かもしれません。
        </p>
        <p>
          このように、人によって得意・不得意があるため、担当するコンサルタント次第で成果が大きく変わります。
        </p>
        <p>
          また、コンサルタントは「準委任契約」で時間を売るモデルであるため、
          請負契約でシステム構築する場合とは違い、良くも悪くも担当する人に依存する仕組みになっています。
        </p>
      </div>
    </div>
    <figure>
      <img :src="image" alt="解決策">
    </figure>
    <div class="free-reason-box">
      <div class="free-reason-title">
        初めてお取引する企業様が安心して依頼できるようにしたい。
      </div>
      <div>
        <p>
          担当者のスキルや仕事のスタイルなどを知った上でご依頼いただく、
          という形がお客様にとっても弊社にとっても理想的であると考えています。
        </p>
        <p>
          そこで、コンサルティングエンジニアサービスを『初月無料』にさせて頂き、
          まずは弊社サービスを試していただくことにしました。
          1ヶ月試していただき、万が一ご期待に添えない結果であれば、
          そこで終了して頂いて構いません。
        </p>
        <p>
          その代わり、弊社は精一杯尽力いたしますので、ご評価いただけるようでしたら、
          2ヶ月目以降も一緒にお仕事をさせていただきたく考えております。
        </p>
        <p>
          これは、弊社が自信をもってサービスを提供しているからできるモデルです。
        </p>
        <p>
          「本当に価値あるサービスなのか？」<br>
          ということを初めてお取引する企業様に見極めていただくための『初月無料』です。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import triangleImage from '~/assets/top/top-triangle.png'

export default {
  computed: {
    image() {
      return triangleImage
    }
  }
}
</script>

<style lang="scss" scoped>
.free-reason-area {
  border: 1px dashed #dbdbdb;
  text-align: center;
  padding: 1rem 0 2rem;

  figure {
    margin: 2rem;

    img {
      height: 3rem;
    }
  }

  .free-reason-box {
    width: 70%;
    margin: auto;

    .free-reason-title {
      font-weight: bold;
      line-height: 2rem;
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 1rem;
      font-size: 0.9rem;
      text-align: left;
    }
  }
}
</style>
