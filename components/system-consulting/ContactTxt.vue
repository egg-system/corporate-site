<template>
  <div class="container-contact">
    <div class="description">
      サービス内容や事例について等、お気軽にお問い合わせください。<br>依頼するかどうかまだ決まっていない、問い合わせるべきかどうか迷っている、といった状態でもご相談を受け付けております。
    </div>

    <br>

    <div class="container-btn">
      <btn />
    </div>
  </div>
</template>

<script>
import Btn from '~/components/system-consulting/Btn.vue'

export default {
  components: {
    Btn
  }
}
</script>

<style scoped>
.list,
.title {
  text-align: left;
}

.container-contact {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  padding: 1.2em;
  background-color: #eeeeee;
}

/* タグレット・PC対応 */
@media screen and (max-width: 1024px) {
  .img_3point {
    width: 300px;
  }
}
</style>
