<template>
  <figure class="image">
    <img :src="img">
  </figure>
</template>

<script>
import recruitTop from '~/assets/recruit/recruit-top.jpg'
export default {
  data() {
    return {
      img: recruitTop
    }
  }
}
</script>

<style lang="scss" scoped>
.main-image {
  width: 80%;
  object-fit: cover;
}
@media screen and (max-width: 600px) {
}
</style>
