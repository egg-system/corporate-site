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
              <p class="card-title">{{ item.title }}</p>
              <p class="card-store">{{ item.store }}</p>
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
.card-content {
  padding: 10px 5px;
}
.card-title {
  font-size: 14px;
  height: 40px;
}
.card-store {
  font-size: 14px;
  color: $darksmoke;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
