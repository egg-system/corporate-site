<template>
  <div class="news-list">
    <div class="columns is-multiline">
      <ul>
        <div v-for="(item, i) in news" :key="i" :class="[ 
          i <= 2 ? 'column is-one-third border'+i : 'column is-one-quarter border'+i,
        ]" >
          <li class="news-inner">
            <div class="news-title">
              <nuxt-link :to="'/news/' + item.id">
                {{ item.title }}
              </nuxt-link>
            </div>
            <div class="column news-date is-4-mobile">{{ item.display_at | dayjs }}</div>
            <div class="column is-4-mobile">
              <span class="tag info-color">
                {{ item.label.label }}
              </span>
            </div>
          </li>
        </div>
      </ul>
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
  height: 100px;
}
.news-title a {
  color: $black;
}
.news-date {
  text-align: right;
  font-size: 14px;
  // color: $darksmoke;
  color: $black;
}
.is-one-third {
  display: inline-block;
  border-right: 1px solid $lightgray;
  border-left: 1px solid $lightgray;
  margin: 10px 0;
}
.is-one-quarter {
  display: inline-block;
  border-right: 1px solid $lightgray;
  border-left: 1px solid $lightgray;
  margin: 10px 0;
}
.info-color {
  color: $white;
  background-color: $black;
}
.border0,
.border3,
.border7,
.border11,
.border15,
.border19 {
  border-left: none;
}
.border2,
.border6,
.border10,
.border14,
.border18,
.border22 {
  border-right: none;
}
ul li {
  display: inline-block;
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
