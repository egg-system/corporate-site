<template>
  <div class="container-client">
    <div class="ok-client">
      <div class="title">
        ◯当社サービスに向いているお客様
      </div>
      <ul class="list">
        <li>零細企業・ベンチャー企業のお客様</li>
        <li>中小企業(従業員数100人以下、情報システム部門が5人以下)のお客様</li>
      </ul>
    </div>

    <br>

    <div class="ng-client">
      <div class="title">
        ◯当社サービスに向いていないお客様
      </div>
      <ul class="list">
        <li>大規模なプロジェクトや大規模なシステム開発を希望されるお客様</li>
      </ul>
    </div>

  </div>
</template>

<script>
</script>

<style scoped>
.list,
.title {
  text-align: left;
}

.list {
  line-height: 2.5em;
}

.container-client {
  /*  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);*/
  padding: 1.2em;
  display: flex;
}
/* スマホ対応 */
@media screen and (max-width: 767px) {
  .container-client {
    display: inline;
  }
}
</style>
