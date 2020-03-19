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
  padding-top: 30px;
}
.bg-image {
  background: url('../../../assets/top/top.jpeg');
  width: 100%;
  height: 860px;
  background-size: cover;
  background-position-y: -100px;
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
  .bg-image {
    height: 300px;
    background-repeat: no-repeat;
    background-position-y: -70px;
  }
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
