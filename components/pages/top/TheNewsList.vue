<template>
  <div class="news">
    <p>
      news
    </p>
    <div class="news-list">
      <div v-for="(item, i) in items" :key="i" class="columns is-gapless">
        <div class="column is-2">{{ item.date }}</div>
        <div class="column is-2">
          <span class="tag is-warning">
            {{ item.label }}
          </span>
        </div>
        <div class="column is-8">
          <nuxt-link :to="item.url">
            {{ item.title }}
          </nuxt-link>
        </div>
        <hr v-if="(i + 1 !== Object.keys(items).length)" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: '本社移転のお知らせ',
        date: '2019/06/03',
        label: 'info',
        url: 'https://yahoo.co.jp'
      },
      {
        title: 'H30年度（2019年度） IT導入支援事業者として登録されました',
        date: '2019/04/26',
        label: 'info',
        url: 'https://yahoo.co.jp'
      },
      {
        title: '近代中小企業（KinChu）2019年4月号 掲載のお知らせ',
        date: '2019/04/03',
        label: 'info',
        url: 'https://yahoo.co.jp'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.news {
  width: 80%;
  margin: 0 auto;
  margin-top: 10%;
  margin-bottom: 10%;
}
.news p {
  margin-bottom: 30px;
}
</style>
