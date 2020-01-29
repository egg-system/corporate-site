<template>
  <div class="column-item">
    <div class="columns is-multiline">
      <div v-for="(item, i) in columns" :key="i" class="column is-one-third">
        <nuxt-link :to="item.url">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img :src="item.img" :alt="item.title">
              </figure>
            </div>
            <div class="card-content">
              <div>
                {{ item.title }}
                <br>
                {{ item.date }}
              </div>
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
</style>
