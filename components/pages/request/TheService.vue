<template>
  <div class="columns is-multiline">
    <div v-for="(service, i) in services" :key="i" class="column is-one-third">
      <figure class="image">
        <img :src="service.img" class="is-square">
      </figure>
      <div class="center-text">
        <p v-html="service.title" />
        <p class="description" v-html="service.description" />
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
figure {
  margin: 0;
}
.columns {
  position: relative;
  margin-top: 2rem;
  padding-bottom: 3rem;
}
.column {
  padding: 2rem;
  min-height: 30rem;
  position: relative;
}
.center-text::after {
  position: absolute;
  content: '';
  width: 80%;
  height: 1px;
  background: $lightgray;
  margin-top: 1.5rem;
  left: 10%;
  bottom: 0;
}
.description {
  font-size: 13px;
}
</style>
