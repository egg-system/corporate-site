<template>
  <div class="container">
    <div>
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


<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  /* color: #35495e; */
  color: white;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
