<template>
  <div class="back">
    <div class="vision">
      <p>
        recruit
      </p>
      <h2 class="title is-2">
        コンサルティングエンジニア募集
      </h2>
      <button class="button is-primary">詳細をみる</button>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.back {
  background: url('https://eggsystem.co.jp/wp-content/uploads/2019/05/20190518-member01-1024x684.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  height: 400px;
  position: relative;
}
.back:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /*半透明のフィルターをかける*/
}
.vision {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 10%;
  margin-top: 10%;
  position: absolute;
  padding-left: 10%;
  color: $white;
}
.title {
  color: $white;
}
</style>
