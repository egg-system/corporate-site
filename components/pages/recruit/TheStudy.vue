<template>
  <div class="study">
    <p class="top-message is-size-3">
      システムエンジニア向け勉強会
    </p>
    <div class="columns">
      <figure class="column img">
        <img src="https://eggsystem.co.jp/wp-content/uploads/2019/05/20190518-member01-1024x684.jpg">
      </figure>
      <section class="column">
        <p class="sub-message">
          システムエンジニア向け勉強会を定期的に開催しています。
          弊社の取り組みにご興味のある方だけでなく、スキルアップとしてもご参加いただければ幸いです。
        </p>
        <div class="contact-button">
          <button class="button is-black is-large is-fullwidth" @click="go('/contact')">
            conpas(外部サイト)へ&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;＞
          </button>
          <button class="button is-black is-large is-fullwidth" @click="go('/contact')">
            TECH PLAY(外部サイト)へ&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;＞
          </button>
        </div>
      </section>
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
