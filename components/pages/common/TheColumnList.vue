<template>
  <div class="column-item">
    <div class="columns is-multiline">
      <div v-for="(item, i) in columns" :key="i" class="column is-one-third">
        <nuxt-link :to="'column/' + item.id">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img :src="item.img.url" :alt="item.title">
              </figure>
            </div>
            <div class="card-content">
              <div>
                {{ item.title }}
                <br>
                {{ item.createdAt | moment }}
                <br>
                <span class="tag is-primary">
                  {{ item.label.label }}
                </span>
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
