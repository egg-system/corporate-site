<template>
  <div class="news-list">
    <li>
      <div v-for="(item, i) in news" :key="i">
        <ul>
          <div class="columns">
            <div class="columns is-mobile">
              <div class="column news-date is-4-mobile">{{ item.display_at | dayjs }}</div>
              <div class="column is-4-mobile">
                <span class="tag is-primary">
                  {{ item.label.label }}
                </span>
              </div>
            </div>

            <div class="news-title">
              <nuxt-link :to="'news/' + item.id">
                {{ item.title }}
              </nuxt-link>
            </div>
          </div>
        </ul>
      </div>
    </li>
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
li {
  list-style: none;
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
