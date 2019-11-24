<template>
  <div class="bg-image">
    <div class="bg-mask">
      <div class="bg-text">
        <the-sub-header class="vision" text="recruit" />
        <h1 class="title is-2">
          <p class="vision-text">
            100人の<br>コンサルティングエンジニア募集
          </p>
        </h1>
        <button class="button is-primary">詳細をみる</button>
      </div>
    </div>
  </div>
</template>

<script>
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'

export default {
  components: {
    TheSubHeader
  }
}
</script>

<style lang="scss" scoped>
.bg-image {
  background: url('https://eggsystem.co.jp/wp-content/uploads/2019/05/20190518-member01-1024x684.jpg');
  background-attachment: fixed;
  object-fit: cover;
  width: 100%;
  height: 550px;
  background-size: cover;
}
.bg-mask {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.bg-text {
  color: $white;
  padding-top: 100px;
  width: 80%;
  margin: 0 auto;
}
.vision-text {
  color: $white;
}
</style>
