<template>
  <div class="news-list">
    <div v-for="(item, i) in news" :key="i">
      <div class="news-inner">
        <div class="news-title">{{ item.title }}</div>
        <div class="news-date">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.news-list {
  display: flex;
}
.news-inner {
  width: 90%;
  margin: 0 auto;
}
.news-title {
  padding: 5px 10px;
}
.news-date {
  text-align: right;
  font-size: 14px;
  color: $darksmoke;
}
@media screen and (max-width: 600px) {
  .news-list {
    display: block;
  }
  .news-inner {
    margin: 10px auto;
  }
  .news-title {
    font-size: 14px;
  }
}
</style>
