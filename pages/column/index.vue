<template>
  <div>
    <the-hero-title main-text="コラム" />
    <div class="column-list">
      <the-column-list :columns="columns" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'

export default {
  components: {
    TheHeroTitle,
    TheColumnList
  },
  data: () => ({
    columns: [
      {
        title:
          'デジタルトランスフォーメーション（DX）とは？DXレポートから中小企業での活用方法まで解説（前編）',
        date: '2019/11/03',
        label: 'info',
        url: '/column/aaa',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/10/201910-dx3-1024x682.jpg'
      },
      {
        title: '明石悠佳（あかしゆか）さん座談会｜複業・働き方を考える',
        date: '2019/10/28',
        label: 'info',
        url: '/column/aaa',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/10/20190910-08-1024x683.jpg'
      },
      {
        title:
          '複業メンバーによるシステム開発をやってみて【振り返りと今後の対策】',
        date: '2019/08/18',
        label: 'info',
        url: '/column/aaa',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/08/20190622-DSC_3506-min-1024x684.jpg'
      },
      {
        title: '伊藤羊一さん｜プレゼン勉強会「考えて伝える極意」',
        date: '2019/03/08',
        label: 'info',
        url: '/column/aaa',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/03/190227_01-min-1024x683.jpg'
      },
      {
        title:
          '「マーケティング」を知ったかぶりしていたシステムエンジニア社長の新規事業立ち上げ奮闘記②',
        date: '2019/02/10',
        label: 'info',
        url: '/column/aaa',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/01/marketing-dairy.png'
      },
      {
        title:
          '「マーケティング」を知ったかぶりしていたシステムエンジニア社長の新規事業立ち上げ奮闘記①',
        date: '2019/01/15',
        label: 'info',
        url: '/column/aaa',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/01/marketing-dairy.png'
      },
      {
        title: '複業研究家・西村創一朗さん｜社内限定座談会の様子',
        date: '2018/12/04',
        label: 'info',
        url: '/column/aaa',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2018/11/nishimurasan-zadankai.png'
      },
      {
        title: 'プロジェクトの成功率を2倍に上げる要件定義のコツ',
        date: '2018/08/27',
        label: 'info',
        url: '/column/aaa',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2018/08/colomn-20180827-01-min-1024x714.jpeg'
      },
      {
        title:
          '【2018年7月危機】要対応｜SSL非対応のWebサイトは画面に警告が表示',
        date: '2018/07/11',
        label: 'info',
        url: '/column/aaa',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2018/07/column014-min-1024x680.jpg'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.column-list {
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
// スマホ版
@media screen and (max-width: 400px) {
  .column-list {
    width: 90%;
  }
}
</style>
