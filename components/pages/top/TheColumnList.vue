<template>
  <div class="column-list">
    <the-sub-header text="column" />
    <the-column-list :columns="columns" />
    <div class="more-btn">
      <button class="button is-fullwidth more" @click="go('/column')">もっと見る</button>
    </div>
  </div>
</template>

<script>
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import method from '~/mixins/method'

export default {
  components: {
    TheSubHeader,
    TheColumnList
  },
  mixins: [method],
  data: () => ({
    columns: [
      {
        title:
          'デジタルトランスフォーメーション（DX）とは？DXレポートから中小企業での活用方法まで解説（前編）',
        date: '2019/11/03',
        label: 'info',
        url: '/about',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/10/201910-dx3-1024x682.jpg'
      },
      {
        title: '明石悠佳（あかしゆか）さん座談会｜複業・働き方を考える',
        date: '2019/10/28',
        label: 'info',
        url: '/about',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/10/20190910-08-1024x683.jpg'
      },
      {
        title:
          '複業メンバーによるシステム開発をやってみて【振り返りと今後の対策】',
        date: '2019/08/18',
        label: 'info',
        url: '/about',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/08/20190622-DSC_3506-min-1024x684.jpg'
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
.more {
  margin-top: 30px;
}
.more-btn {
  width: 50%;
  margin: auto;
}
</style>
