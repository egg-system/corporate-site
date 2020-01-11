<template>
  <div class="news-list">
    <div v-for="(item, i) in news" :key="i">
      <div class="columns">
        <div class="column is-4">
          <div class="columns is-mobile">
            <div class="column is-4-mobile">{{ item.date }}</div>
            <div class="column is-4-mobile">
              <span class="tag is-warning">
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>
        <div class="column is-8">
          <nuxt-link :to="item.url">
            {{ item.title }}
          </nuxt-link>
        </div>
      </div>
      <hr v-if="(i + 1 !== Object.keys(news).length)" >
    </div>
  </div>
</template>

<script>
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'

export default {
  components: {
    TheSubHeader
  },
  props: {
    news: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
