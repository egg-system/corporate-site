<template>
  <div class="news-list">
    <div class="columns is-multiline">
      <div v-for="(item, i) in news" :key="i" :class="[ i <= 2 ? 'column is-one-third border'+i : 'column is-one-quarter border'+i, ]" >
        <nuxt-link :to="'/news/' + item.id">
          <div class="news-inner">
            <div class="news-image">
              <figure class="image">
                <img v-if="item.img !== undefined" :src="item.img.url" :alt="item.title">
                <img v-if="item.img === undefined" :src="noImage">
              </figure>
            </div>
            <div class="news-content">
              <p class="news-title">{{ item.title }}</p>
              <br>
              {{ item.display_at | dayjs }}
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
}
.news-title {
  font-size: 14px;
  height: 40px;
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
  background: #e2d0b6;
  object-fit: cover;
  margin: 0 auto;
}
@media screen and (min-width: 1030px) {
  .is-one-quarter img {
    width: 250px;
    height: 150px;
    background: #e2d0b6;
    object-fit: cover;
    margin: 0 auto;
  }
  .is-one-quarter .news-title {
    height: 80px;
  }
  .news-content {
    margin: 0 auto;
    width: 250px;
  }
}
@media screen and (max-width: 1029px) and (min-width: 769px) {
  .is-one-third img {
    width: 250px;
    height: 150px;
    background: #e2d0b6;
    object-fit: cover;
    margin: 0 auto;
  }
  .is-one-quarter .news-title {
    height: 100px;
  }
  .is-one-quarter img {
    width: 150px;
    height: 100px;
    background: #e2d0b6;
    object-fit: cover;
    margin: 0 auto;
  }
}
@media screen and (max-width: 769px) and (min-width: 600px) {
  .is-one-quarter img {
    width: 600px;
    height: 400px;
  }
  .is-one-third img {
    width: 600px;
    height: 400px;
    background: #e2d0b6;
    object-fit: cover;
    margin: 0 auto;
  }
}
@media screen and (max-width: 600px) {
  .news-title {
    height: auto;
  }
}
</style>
