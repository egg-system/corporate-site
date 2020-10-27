<template>
  <div class="news-list">
    <div class="columns is-multiline">
      <div
        v-for="(item, index) in news"
        :key="index"
        :class="[
          index <= 2
            ? `column is-one-third border${index}`
            : `column is-one-quarter border${index}`,
        ]"
      >
        <nuxt-link :to="`/news/${item.id}`">
          <div class="news-inner">
            <div class="news-image">
              <figure class="image">
                <img v-if="item.img === undefined" :src="noImage">
                <img v-else :src="item.img.url" :alt="item.title">
              </figure>
            </div>
            <div class="news-content">
              <p class="news-title">{{ item.title }}</p>
              <br>
              公開日：{{ item.display_at | dayjs }}<br>
              更新日：{{ item.updatedAt | dayjs }}
              <br>
              <p class="news-store">{{ item.store }}</p>
              <span class="tag info-color">
                {{ item.label.label }}
              </span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import noImage from '~/assets/js/no-image.js'

export default {
  props: {
    news: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      noImage: noImage.noImage
    }
  }
}
</script>

<style lang="scss" scoped>
.news-inner {
  border-bottom: 1px solid $lightgray;
  margin-bottom: 20px;
}
.news-content {
  color: $black;
  padding: 10px 5px;
  font-size: 12px;
}
.news-title {
  font-size: 14px;
  height: 4rem;
  overflow: hidden;
}
.news-store {
  font-size: 14px;
  color: $darksmoke;
  margin-top: 10px;
  margin-bottom: 20px;
}
.info-color {
  color: $white;
  background-color: $black;
}
.is-one-third img {
  width: 300px;
  height: 200px;
  object-fit: contain;
  margin: 0 auto;
}
.is-one-quarter img {
  width: 300px;
  height: 200px;
  object-fit: contain;
  margin: 0 auto;
}
@media screen and (min-width: 1030px) {
  .is-one-quarter img {
    width: 250px;
    height: 150px;
    object-fit: contain;
    margin: 0 auto;
  }
  .is-one-quarter .news-title {
    height: 6rem;
  }
  .news-content {
    margin: 0 auto;
    width: 100%;
  }
}
@media screen and (max-width: 1029px) and (min-width: 769px) {
  .is-one-third img {
    width: 250px;
    height: 150px;
    object-fit: contain;
    margin: 0 auto;
  }
  .is-one-third .news-title {
    height: 6rem;
  }
  .is-one-quarter .news-title {
    height: 6rem;
  }
  .is-one-quarter img {
    width: 150px;
    height: 100px;
    object-fit: contain;
    margin: 0 auto;
  }
}
@media screen and (max-width: 769px) and (min-width: 600px) {
  .image img {
    width: 600px;
    height: 400px;
    object-fit: contain;
    margin: 0 auto;
  }
}
@media screen and (max-width: 600px) {
  .news-title {
    height: auto;
  }
}
</style>
