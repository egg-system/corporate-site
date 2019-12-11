<template>
  <div>
    <div>
      <h3 class="is-5">①ホームページ制作</h3>
      <p class="explanation">
        お客様の事業内容や目的に合わせたホームページを安く、早く、綺麗に作り上げます
      </p>
      <p class="center-text">＜特徴＞</p>
      <div class="box-left" >
        <p>
          ■目的に合わせる<br>
          ホームページを作ることが目的ではありません。<br>
          ホームページを作って何を実現したいのか丁寧にヒアリングさせて頂いた上で、目的に合わせたホームページを制作します。<br><br>
          ■お客様の手間を最小限に<br>
          事業内容を詳しくヒアリングさせて頂き、お客様の会社・事業のことを十分理解した状態で制作することで、キャッチコピーや掲載する文章は当社で作成することが可能となります。<br><br>
          ■豊富な事例を紹介<br>
          他の会社ではこういうやり方をしていますよ、といった豊富な事例を紹介しながら、お客様の事業成長へ貢献できるホームページを制作します。<br><br>
          ■コストパフォーマンス<br>
          大手制作会社の半分以下の費用で対応します。仕様書や打ち合わせは必要最低限に抑えるだけでなく、社内の間接費用を最小限に抑えているため、このコストパフォーマンスを実現できています。<br><br>
          ■魅力を伝えるデザイン<br>
          きれいなデザインにすることは当たり前。あなたの会社やサービスの魅力を引き出し、本当に伝えたい事が伝わるデザインを提供します。<br>
        </p>
      </div>


      <div class="columns is-multiline">
        <div v-for="(item, i) in homePage" :key="i" class="column is-one-third">

          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 center-text">{{ item.title }}</p>
                </div>
              </div>
              <div class="icon-image">
                <i :class="item.icon" class="icon fa-5x"/>
              </div>
              <div class="content" v-html="item.content"/>
            </div>
          </div>
        </div>

      </div>



    </div>
    <div>
      <h3 class="is-5 blank">②Webシステム開発</h3>
      <p class="explanation">
        システム開発することが目的ではなく、お客さまの事業成長へ貢献することが目的なので、検討した結果「システム開発は行わずに簡易的な無料ツールを使いましょう」というご提案ができることが当社の強みです。
      </p>
      <p class="center-text">＜特徴＞</p>
      <div class="box-left" >
        <p>
          ■目的に合わせる<br>
          お客さまから言われたことをそのまま対応するのではなく、
          お客さまの立場にたって「何のために必要か？」「本当に必要か？」ということを考え、
          目的に合わせて「こうした方がより良い効果が得られます」というご提案をしながら進めます。<br><br>
          ■納品してからがスタート<br>
          システムを開発し納品することがゴールではなく、お客さまにとってはシステム納品がスタートです。<br>
          そのため、開発よりも「開発後」を第一に考えて運用保守まで一貫して行います。<br><br>
          ■業務とシステムを両方考える<br>
          システムは単なるツールです。どの業務でどうやってシステムを使うかということが重要ですので、
          「業務」と「システム」の両面からサポートいたします。<br><br>
        </p>
      </div>
    </div>
    <div/>
  </div>
</template>

<script>
export default {
  data: () => ({
    homePage: [
      {
        title: '目的に合わせる',
        icon: 'fas fa-desktop',
        content:
          'ホームページを作ることが目的ではありません。<br>ホームページを作って何を実現したいのか丁寧にヒアリングさせて頂いた上で、目的に合わせたホームページを制作します。'
      },
      {
        title: 'お客様の手間を最小限に',
        icon: 'fas fa-desktop',
        content:
          '事業内容を詳しくヒアリングさせて頂き、お客様の会社・事業のことを十分理解した状態で制作することで、キャッチコピーや掲載する文章は当社で作成することが可能となります。'
      },
      {
        title: '豊富な事例を紹介',
        icon: 'fas fa-desktop',
        content:
          '他の会社ではこういうやり方をしていますよ、といった豊富な事例を紹介しながら、お客様の事業成長へ貢献できるホームページを制作します。'
      },
      {
        title: 'コストパフォーマンス',
        icon: 'fas fa-desktop',
        content:
          '大手制作会社の半分以下の費用で対応します。仕様書や打ち合わせは必要最低限に抑えるだけでなく、社内の間接費用を最小限に抑えているため、このコストパフォーマンスを実現できています。'
      },
      {
        title: '魅力を伝えるデザイン',
        icon: 'fas fa-desktop',
        content:
          'きれいなデザインにすることは当たり前。あなたの会社やサービスの魅力を引き出し、本当に伝えたい事が伝わるデザインを提供します。'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.explanation {
  font-size: 20px;
}
// スマホ版
@media screen and (max-width: 400px) {
  .explanation {
    font-size: 17px;
  }
}

.blank {
  margin-top: 70px !important;
}
.center-text {
  text-align: center;
}
.box-left {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: $black;
  background: $whitesmoke;
  border-left: solid 10px $lightBlue;
}
.box-left p {
  margin: 0;
  padding: 0;
}
.icon {
  width: 100%;
}
.icon-image {
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
