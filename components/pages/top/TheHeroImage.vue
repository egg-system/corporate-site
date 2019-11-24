<template>
  <div class="bg-image">
    <div class="bg-mask">
      <h1 class="title is-2">
        <p class="bg-text">献身的な人のためにITシステムを活用する</p>
      </h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bg-image {
  background: url('https://storage.googleapis.com/prd-careers-asset/2019/05/7b516167-design_thum-768x400.jpg');
  width: 100%;
  height: 500px;
  background-size: cover;
}
.bg-mask {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.bg-text {
  color: $white;
  line-height: 3.5rem;
  padding-top: 100px;
  width: 80%;
  margin: 0 auto;
}
</style>
