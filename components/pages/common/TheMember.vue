<template>
  <div class="columns is-multiline">
    <div v-for="(member, i) in members" :key="i" class="column is-one-third">
      <figure class="image">
        <img :src="member.img" class="is-rounded">
      </figure>
      <div>
        {{ member.role }}<br>
        <b>{{ member.nameJP }}</b>  {{ member.nameEN }}<br>
        {{ member.profile }}
      </div>
    </div>
  </div>
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
b {
  font-size: 22px;
}
.image {
  margin: auto;
  width: 200px;
}
</style>
