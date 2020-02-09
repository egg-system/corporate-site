<template>
  <div class="columns is-multiline">
    <div v-for="(service, i) in services" :key="i" class="column is-one-third">
      <figure class="image">
        <img :src="service.img" class="is-square">
      </figure>
      <div class="description">
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
}

.description {
  border-bottom: 1px solid #dbdbdb;
}
</style>
