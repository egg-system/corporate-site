<template>
  <div class="container">
    <div>
      <!-- <img src="~assets/img/mv-pc-min3.png"> -->
      <logo/>
      <h1 class="title">EGG SYSTEM</h1>
      <h2 class="subtitle">中小企業に向けたシステムコンサルティング</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">会社情報</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">サービス</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">事例</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">メンバー紹介</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">ニュース</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">コラム</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">採用情報</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">お問い合わせ</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>
