<template>
  <div class="study">
    <p class="top-message">
      システムエンジニア向け勉強会
    </p>
    <p class="sub-message">
      システムエンジニア向け勉強会を定期的に開催しています。
      
    </p>
    <div class="contact-button">
      <button class="button is-black is-large is-fullwidth" @click="go('/contact')">
        詳しく見る&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;＞
      </button>
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
</style>
