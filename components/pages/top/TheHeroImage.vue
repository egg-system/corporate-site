<template>
  <div class="bg-image">
    <img :src="img">
  </div>
</template>

<script>
import heroImage from '~/assets/top/top.jpeg'
export default {
  data() {
    return {
      img: heroImage
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  padding-top: 30px;
}
.bg-image {
  width: 100%;
}
.bg-text {
  font-size: 44px;
  color: $black;
  line-height: 3.5rem;
  padding-top: 10px;
  width: 85%;
  margin: 0 auto;
  text-align: right;
}
.sp {
  display: none;
}
@media screen and (max-width: 600px) {
  .title {
    padding-top: 100px;
  }
  .bg-text {
    width: 90%;
    font-size: 24px;
    padding-top: 50px;
    padding-right: 70px;
    text-align: left;
  }
  .sp {
    display: block;
  }
}
</style>
