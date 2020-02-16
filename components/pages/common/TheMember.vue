<template>
  <div class="columns is-multiline">
    <div v-for="(member, i) in members" :key="i" class="column is-3">
      <figure class="image">
        <img :src="member.img">
      </figure>
      <div class="has-text-centered">
        {{ member.role }}<br>
        {{ member.nameJP }}<br>
        {{ member.nameEN }}<br>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/members/tsubasa02.jpg'
import '~/assets/members/hikaru01.jpg'
import '~/assets/members/nunomura01.jpg'
import '~/assets/members/papa02.jpg'
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
  width: 200px;
  margin: 0 auto;
}
</style>
