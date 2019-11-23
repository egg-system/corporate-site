<template>
  <div class="column-item">
    <the-sub-header text="column" />
    <div class="columns is-1">
      <div v-for="(item, i) in items" :key="i" class="column">
        <nuxt-link :to="item.url">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img :src="item.img" :alt="item.title">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ item.title }}
                <br>
                {{ item.date }}
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <button class="button is-fullwidth">もっと見る</button>
  </div>
</template>

<script>
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'

export default {
  components: {
    TheSubHeader
  },
  data: () => ({
    items: [
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
.column-item {
  width: 80%;
  margin: 0 auto;
  margin-top: 10%;
  margin-bottom: 10%;
}
.column-item p {
  margin-bottom: 30px;
}
</style>
