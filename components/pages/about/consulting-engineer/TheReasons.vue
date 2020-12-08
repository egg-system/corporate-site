<template>
  <section class="consulting-engineer-reasons">
    <the-sub-header text="なぜ、『コンサルティングエンジニア』が必要なのか？" />
    <section>
      <h3>"優秀な"IT人材が不足する</h3>
      <p>
        経済産業省の「IT人材需要に関する調査」では2030年に約45万人のIT人材が不足すると発表されています。
      </p>
      <div class="reason-graph">
        <img :src="itResourceGraphImage">
        <p>※ 出典：経済産業省「IT人材需給に関する調査」</p>
      </div>
      <p>
        約45万人の内訳を正確に捉えると「従来型ITは最大22万人の余剰があり、先端型IT人材が不足」ということがわかります。先端IT人材とはDX、ビッグデータ、IoTなどの先端IT技術に携わる人材を指し、従来型IT人材とは、ITシステムの受託開発や保守・運用サービスなどに従事する人材を指します。
      </p>
      <div class="reason-table">
        <img :src="itResourceTableImage">
        <p>※ 出典：経済産業省「IT人材需給に関する調査」</p>
      </div>
      <p>
        ここからわかることは、IT人材は単純に頭数が足りなくなるのではなく、先端IT人材といった新しい技術に関わる人材、つまり<span>優秀なIT人材が不足する</span>、ということです。
      </p>
      <p>
        では、優秀なIT人材を「質の高いIT人材」と捉えた場合、ベンチャー・中小企業においてはIT人材の「量」と「質」に対する需要はどうなっているのでしょうか。
      </p>
    </section>
    <section>
      <h3>ベンチャー・中小企業では、人材の「量」と「質」が不足している</h3>
      <div class="columns reason-survey">
        <div class="column is-6 reason-survey-percents">
          <p>
            独立行政法人 情報処理推進機構（IPA）のIT人材白書より、以下の調査結果がわかっています。
          </p>
          <p>
            IT人材の「質」が不足していると回答した企業<br>
            ・・・約77%
          </p>
          <p>
            IT人材の「量」が不足していると回答した企業<br>
            ・・・約76%
          </p>
        </div>
        <div class="column is-6 reason-survey-image">
          <img :src="consultingEngineerImage" >
        </div>
      </div>
      <p>
        つまり、ベンチャー・中小企業においては、<span>IT人材の「質」と「量」の両方が不足している</span>ことがわかります。
      </p>
      <p>
        次に、IT人材の「質」とは具体的に何を指すのか、IT人材白書のデータから読み取ると上位3位は以下のとおりでした。1位と3位はシステムコンサルティングスキル、2位はシステム開発スキルとなっています。
      </p>
      <div class="needs-table">
        <img :src="itResourceNeedsTableImage" >
        <p>※ 出典：独立行政法人 情報処理推進機能（IPA）『IT人材白書2018』</p>
      </div>
    </section>
    <section class="reason-conclusion">
      <h3>コンサルティングスキルとエンジニアリングスキルを兼ね備えた人材が必要</h3>
      <p>
        IT人材不足ではなく優秀な人材が不足すること、ベンチャー・中小企業ではIT人材の「質」と「量」が不足しており、IT人材の質というのはシステムコンサルティングスキルとシステム開発スキルの両方を指す、とうことがわかりました。
      </p>
      <ul>
        <li>業務知識や実務ノウハウ、問題解決力といったコンサルティングスキル</li>
        <li>先端技術などの高い技術力といったエンジニアリングスキル</li>
      </ul>
      <p>
        <span>これらのスキルを兼ね備えた人材が『コンサルティングエンジニア』</span>です。<br>
        システムコンサルタントでも、システムエンジニアでもなく、コンサルと開発の両方のスキルを持った人材です。
      </p>
      <p>
        ベンチャー・中小企業で本当に求められている人材がコンサルティングエンジニアです。
      </p>
      <section class="consulting-engineer-image">
        <h4>3つが重なる貴重な人材=コンサルティングエンジニア</h4>
        <img
          :src="itResourceDiagramImage"
          alt="コンサルティングエンジニアは、IT技術、問題解決能力、業務知識・実務ノウハウの3つのスキルを持つ貴重な人材になる"
        >
      </section>
    </section>
  </section>
</template>

<script>
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import itResourceGraphImage from '~/assets/about/it-resourse-graph.png'
import itResourceTableImage from '~/assets/about/it-resourse-table.png'
import consultingEngineerImage from '~/assets/about/consul-engineer.JPG'
import itResourceNeedsTableImage from '~/assets/about/it-resourse-needs-table.png'
import itResourceDiagramImage from '~/assets/about/it-resourse-diagram.png'

export default {
  components: {
    TheSubHeader
  },
  data: () => ({
    itResourceGraphImage,
    itResourceTableImage,
    consultingEngineerImage,
    itResourceNeedsTableImage,
    itResourceDiagramImage
  })
}
</script>

<style lang="scss" scoped>
.consulting-engineer-reasons {
  .main {
    margin-bottom: 4rem;
  }

  h3 {
    margin-bottom: 2rem;
  }

  section {
    margin-bottom: 8rem;
  }

  span {
    color: red;
    font-weight: bold;
  }

  @mixin reasonImage($width, $margin) {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: $margin;

    p {
      font-size: 0.8rem;
    }

    @media screen and (min-width: 768px) {
      img,
      p {
        width: $width;
      }
    }
  }

  .reason-graph {
    @include reasonImage(60%, 2rem auto 4rem);
  }

  .reason-table {
    @include reasonImage(40%, 1rem 0 2rem);
  }

  .needs-table {
    @include reasonImage(50%, 4rem 0 2rem);
  }

  .reason-survey {
    margin-bottom: 4rem;

    @media screen and (max-width: 1024px) {
      br {
        display: none;
      }
    }

    @media screen and (min-width: 1024px) {
      &-percents {
        padding-right: 4rem;
      }

      &-image {
        padding-left: 4rem;
      }
    }
  }

  .reason-conclusion {
    ul {
      margin: 2rem 1rem;

      li {
        list-style: '○';
      }
    }
  }

  .consulting-engineer-image {
    text-align: center;
    margin: 2rem;

    h4 {
      font-size: 0.9rem;
      font-weight: 100;
    }

    img {
      max-height: 20rem;
    }
  }
}
</style>
