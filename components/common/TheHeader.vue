<template>
  <header class="egg-common-header">
    <h1><i class="fas fa-egg-fried"></i>EGG SYSTEM</h1>
    <div class="header-link">
      <a href="https://eggsystem.co.jp/company-data/" target="_blank" class="button--green">会社情報</a>
      <a href="https://eggsystem.co.jp/homepage-web/" target="_blank" class="button--green">サービス</a>
      <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">事例</a>
      <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">メンバー紹介</a>
      <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">ニュース</a>
      <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">コラム</a>
      <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">採用情報</a>
      <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">お問い合わせ</a>
    </div>
  </header>
</template>

<style scoped>
.egg-common-header {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e3e3e3;
  padding-top: 10px;
  padding-bottom: 10px;
  position: sticky;
  top: 0;
  z-index: 9997;
  background: #fff;
  width: 100%;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  color: #35495e;
}
.header-link .button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.header-link .button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.header-link .button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.header-link .button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>