<template>
  <div class="columns is-multiline">
    <div v-for="(service, i) in services" :key="i" class="column is-one-third">
      <figure class="image">
        <img :src="service.img" class="is-square">
      </figure>
      <div class="center-text">
        {{ service.title }}<br>
        {{ service.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
b {
  font-size: 22px;
}
.image {
  margin: auto;
  width: 200px;
  img {
    object-fit: cover;
    width: 100%;
    height: 200px;
  }
}

.columns {
  padding: 40px;
}
</style>
