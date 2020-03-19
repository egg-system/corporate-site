<template>
  <div class="contact">
    <div class="contact-button">
      <button class="button has-text-white has-background-black is-large is-fullwidth" @click="go('/contact')">採用について質問する<span class="right_arrow">＞</span></button>
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
// PC版
@media screen and (min-width: 769px) {
  .right_arrow {
    margin-left: 250px;
  }
}
</style>
