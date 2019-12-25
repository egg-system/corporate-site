<template>
  <div>
    <div>
      <h3 class="is-5 blank center-text word">①ホームページ制作</h3>
      <p class="explanation center-text">
        お客様の事業内容や目的に合わせたホームページを安く、早く、綺麗に作り上げます
      </p>

      <div class="columns is-multiline">
        <div v-for="(item, i) in homePage" :key="i" :class="item.offset" class="column is-one-third">
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
      <h3 class="is-5 blank center-text word">②Webシステム開発</h3>
      <p class="explanation">
        システム開発することが目的ではなく、お客さまの事業成長へ貢献することが目的なので、検討した結果「システム開発は行わずに簡易的な無料ツールを使いましょう」というご提案ができることが当社の強みです。
      </p>

      <div class="columns is-multiline">
        <div v-for="(item, i) in web" :key="i" :class="item.offset" class="column is-one-third">
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
          'ホームページを作ることが目的ではありません。<br>ホームページを作って何を実現したいのか丁寧にヒアリングさせて頂いた上で、目的に合わせたホームページを制作します。',
        offset: ''
      },
      {
        title: 'お客様の手間を最小限に',
        icon: 'fas fa-cut',
        content:
          '事業内容を詳しくヒアリングさせて頂き、お客様の会社・事業のことを十分理解した状態で制作することで、<br>キャッチコピーや掲載する文章は当社で作成することが可能となります。',
        offset: ''
      },
      {
        title: '豊富な事例を紹介',
        icon: 'far fa-copy',
        content:
          '他の会社ではこういうやり方をしていますよ、といった豊富な事例を紹介しながら、<br>お客様の事業成長へ貢献できるホームページを制作します。',
        offset: ''
      },
      {
        title: 'コストパフォーマンス',
        icon: 'fas fa-yen-sign',
        content:
          '大手制作会社の半分以下の費用で対応します。仕様書や打ち合わせは必要最低限に抑えるだけでなく、社内の間接費用を最小限に抑えているため、このコストパフォーマンスを実現できています。',
        offset: 'is-offset-2'
      },
      {
        title: '魅力を伝えるデザイン',
        icon: 'fas fa-paint-brush',
        content:
          'きれいなデザインにすることは当たり前。<br>あなたの会社やサービスの魅力を引き出し、本当に伝えたい事が伝わるデザインを提供します。',
        offset: ''
      }
    ],
    web: [
      {
        title: '目的に合わせる',
        icon: 'far fa-copy',
        content:
          'お客さまから言われたことをそのまま対応するのではなく、<br>目的に合わせて「こうした方がより良い効果が得られます」というご提案をしながら進めます。',
        offset: ''
      },
      {
        title: '納品してからがスタート',
        icon: 'fas fa-yen-sign',
        content:
          'システムを開発し納品することがゴールではなく、お客さまにとってはシステム納品がスタートです。<br>そのため、開発よりも「開発後」を第一に考えて運用保守まで一貫して行います。',
        offset: ''
      },
      {
        title: '業務とシステムを両方考える',
        icon: 'fas fa-paint-brush',
        content:
          'システムは単なるツールです。どの業務でどうやってシステムを使うかということが重要ですので、<br>「業務」と「システム」の両面からサポートいたします。',
        offset: ''
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
// PC版
@media screen and (min-width: 769px) {
  .card {
    height: 310px;
  }
}

.blank {
  margin-top: 70px !important;
}
.icon {
  width: 100%;
}
.icon-image {
  padding-top: 15px;
  padding-bottom: 15px;
}
.word {
  color: $blue;
}
</style>
