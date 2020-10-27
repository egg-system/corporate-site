<template>
  <div class="column-item">
    <div class="columns is-multiline">
      <article
        v-for="(item, i) in columns"
        :key="i"
        :class="[ i <= 2 ? 'column is-one-third' : 'column is-one-quarter']"
      >
        <nuxt-link :to="'/column/' + item.id">
          <div class="column-inner">
            <div class="column-image">
              <figure class="image">
                <img :src="item.img.url" :alt="item.title">
              </figure>
            </div>
            <div class="column-content">
              <component
                :is="isH2Tag ? 'h2' : 'h3'"
                class="column-title"
              >{{ item.title }}</component>
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
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: null
    },
    isH2Tag: {
      type: Boolean,
      default: false
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
  height: 4rem;
  overflow: hidden;
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
  .is-one-quarter .column-title {
    height: 6rem;
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
    object-fit: contain;
    margin: 0 auto;
  }
  .is-one-quarter .column-title {
    height: 8rem;
  }
  .is-one-quarter img {
    width: 150px;
    height: 100px;
    object-fit: contain;
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
    object-fit: contain;
    margin: 0 auto;
  }
}
@media screen and (max-width: 600px) {
  .column-title {
    height: auto;
  }
}
</style>
