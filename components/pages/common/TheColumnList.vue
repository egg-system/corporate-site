<template>
  <div class="column-item">
    <div class="columns is-multiline">
      <div v-for="(item, i) in columns" :key="i" :class="[ i <= 2 ? 'column is-one-third' : 'column is-one-quarter']" >
        <nuxt-link :to="'/column/' + item.id">
          <div class="column-inner">
            <div class="column-image">
              <figure class="image">
                <img :src="item.img.url" :alt="item.title">
              </figure>
            </div>
            <div class="column-content">
              <p class="column-title">{{ item.title }}</p>
              <br>
              {{ item.display_at | dayjs }}
              <br>
              <p class="column-store">{{ item.store }}</p>
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
export default {
  props: {
    columns: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.column-inner {
  border-bottom: 1px solid $lightgray;
  margin-bottom: 20px;
}
.column-content {
  color: $black;
  padding: 10px 5px;
}
.column-title {
  font-size: 14px;
  height: 40px;
}
.column-store {
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
  .is-one-quarter .column-title {
    height: 80px;
  }
  .column-content {
    margin: 0 auto;
    width: 100%;
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
  .is-one-quarter .column-title {
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
  .column-title {
    height: auto;
  }
}
</style>
