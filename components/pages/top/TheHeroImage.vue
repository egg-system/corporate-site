<template>
  <div class="bg-image">
    <h2 class="title is-2">
      <p class="bg-text">x-faCEは、<br class="sp">コンサルティング集団です。</p>
    </h2>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title {
  padding-top: 60px;
}
.bg-image {
  background: url('https://storage.googleapis.com/prd-careers-asset/2019/05/7b516167-design_thum-768x400.jpg');
  width: 100%;
  height: 500px;
  background-size: cover;
}
.bg-text {
  color: $black;
  line-height: 3.5rem;
  padding-top: 100px;
  width: 95%;
  margin: 0 auto;
}
.sp {
  display: none;
}
@media screen and (max-width: 600px) {
  .bg-text {
    width: 90%;
    font-size: 36px;
  }
  .sp {
    display: block;
  }
}
</style>
