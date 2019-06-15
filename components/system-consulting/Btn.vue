<template>
  <div>
    <div class="title"/>
    <div class="my-2">
      <v-btn depressed large color="primary"><a href="https://eggsystem.co.jp/contact">お問い合わせはこちら</a></v-btn>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.primary {
  background-color: #f9b923 !important;
  border-color: #f9b923 !important;
  width: 300px;
  height: 60px;
  font-size: 1.2em;
}
a {
  text-decoration: none;
}
a:visited {
  color: white;
  text-decoration: none;
}
/* タグレット・PC対応 */
@media screen and (max-width: 1024px) {
  .img_3point {
    width: 300px;
  }
}
</style>
