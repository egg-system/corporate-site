<template>
  <div class="columns is-multiline">
    <div v-for="(item, i) in columns" :key="i" class="column is-one-third">
      <figure class="image">
        <img :src="item.img" class="is-square">
      </figure>
      <div class="description">
        {{ item.title }}<br>
        {{ item.date }}
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
.image {
  margin: auto;
  width: 200px;
}
.description {
  border-bottom: 1px solid $darksmoke;
}
.columns {
  padding: 40px;
}
.description {
  text-align: center;
}
</style>
