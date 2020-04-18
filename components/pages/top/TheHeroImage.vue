<template>
  <div class="bg-image">
    <img :src="imgPC" class="pc">
    <img :src="imgSP" class="sp">
  </div>
</template>

<script>
import heroImage4PC from '~/assets/top/top_pc.jpg'
import heroImage4SP from '~/assets/top/top_sp.jpg'
export default {
  data() {
    return {
      imgPC: heroImage4PC,
      imgSP: heroImage4SP
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
  .pc {
    display: none;
  }
  .sp {
    display: block;
  }
}
</style>
