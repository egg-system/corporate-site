<template>
  <div class="column-list">
    <the-column-list :columns="columns" />
    <div class="btn-area">
      <div class="more-btn">
        <nuxt-link class="column-button" to="/column">詳しくみる　　　<p class="column-arrow">></p>
        </nuxt-link>
      </div>
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
        title: '1月21日(火)より　ルクア大阪店 改装に伴う一時休業のお知らせ',
        date: '2019/11/03',
        store: 'Soup Stock Tokyo　ルクア大阪店',
        label: 'info',
        url: '/column/aaa',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/10/201910-dx3-1024x682.jpg'
      },
      {
        title: `12月30日(月)より　野菜と鶏肉のトマトシチュー販売`,
        date: '2019/10/28',
        store: 'Soup Stock Tokyo全店',
        label: 'info',
        url: '/column/aaa',
        img:
          'https://eggsystem.co.jp/wp-content/uploads/2019/10/20190910-08-1024x683.jpg'
      },
      {
        title: 'Soup Stock Tokyoの、年始のご挨拶',
        date: '2019/08/18',
        store: 'Soup Stock Tokyo全店',
        label: 'info',
        url: '/column/aaa',
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
  margin-top: 20px;
  margin-bottom: 5%;
}
.btn-area {
  text-align: right;
  width: 100%;
}
.more-btn {
  width: 50%;
  margin-left: 50%;
  padding-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid $lightgray;
}
.column-button {
  font-size: 16px;
  display: inline-block;
  color: $black;
}
.column-arrow {
  display: inline-block;
  width: 17px;
  height: 17px;
  font-size: 12px;
  background: $black;
  border-radius: 50%;
  color: $white;
  text-align: center;
  line-height: 17px;
  vertical-align: 2px;
}
@media screen and (max-width: 600px) {
  .more-btn {
    padding-top: 20px;
    padding-bottom: 10px;
  }
}
</style>
