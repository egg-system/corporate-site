<template>
  <div class="contact">
    <p>
      サービス内容や事例について等、お気軽にお問い合わせください。<br>
      依頼するかどうかまだ決まっていない、問い合わせるべきかどうか迷っている、<br>
      といった状態でもご相談を受け付けております。<br>
    </p>
    <div class="contact-button">
      <button class="button is-large is-fullwidth" @click="go('/contact')">お問い合わせ</button>
    </div>
  </div>
</template>

<script>
import method from '~/mixins/method'

export default {
  mixins: [method]
}
</script>

<style lang="scss" scoped>
.contact {
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
}
.contact-button {
  width: 50%;
  margin: auto;
}
</style>
