<template>
  <div class="column-item">
    <div class="columns is-multiline">
      <div v-for="(item, i) in columns" :key="i" class="column is-one-third">
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
              <nuxt-link :to="'/column?filters=' + item.label.id">
                <span :class="'tag ' + item.label.color_class ">
                  {{ item.label.label }}
                </span>
              </nuxt-link>
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
}
.column-content {
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
@media screen and (max-width: 600px) {
  .column-title {
    height: auto;
  }
}
</style>
