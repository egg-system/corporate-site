<template>
  <article class="columns is-multiline">
    <div v-for="(member, i) in members" :key="i" class="column is-3">
      <figure class="image">
        <img :src="member.img">
      </figure>
      <h2 class="has-text-centered">
        {{ member.role }}<br>
        {{ member.nameJP }}<br>
        {{ member.nameEN }}<br>
      </h2>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    members: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  margin: 0 auto;
}
</style>
