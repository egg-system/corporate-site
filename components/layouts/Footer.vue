<template>
  <footer class="footer">
    <div class="columns">
      <div class="column is-4 image">
        <img src="/footer_white.png">
        <p>株式会社エッグシステム</p>
      </div>
      <div class="column is-3 first ">
        <nuxt-link class="navbar-item" to="/about">
          わたしたちについて
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/service">
          サービス
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/member">
          メンバー
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/recruit">
          採用
        </nuxt-link>
      </div>
      <div class="column is-3 second">
        <nuxt-link class="navbar-item" to="/company">
          会社概要
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/request">
          ご依頼について
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/column">
          最近の活動・コラム
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/news">
          お知らせ
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/contact">
          お問い合わせ
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/privacy">
          プライバシーポリシー
        </nuxt-link>
      </div>
    </div>
    <div class="copyright">
      <div class="centered">
        <p>
          COPYRIGHT © EGG SYSTEM,Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.columns {
  margin-bottom: 5rem;
}
.copyright {
  color: $copyright;
  background-color: $black;
}
.centered {
  margin: 0 auto;
  max-width: 77.75rem;
  padding: 0 0.2rem;
}
.centered p {
  padding: 0.75rem 0;
  font-size: 0.75rem;
  font-weight: 400;
  text-align: right;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.image {
  margin-right: 10%;
}
.column .image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image img {
  width: 50%;
  margin: 20px auto;
}
.image p {
  text-align: center;
  font-size: 16px;
  margin-top: 40px;
  color: $white;
}
.navbar-item {
  font-size: 0.8em;
}
.column a {
  color: $white;
}
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active {
  background-color: $darkgray;
}
@media screen and (max-width: 769px) and (min-width: 600px) {
  .image {
    margin-bottom: 30px;
  }
  .column {
    display: inline-block;
  }
  .first {
    margin-left: 20%;
    vertical-align: top; /* 追加 */
  }
}
@media screen and (max-width: 600px) {
  .navbar-item {
    margin-left: 7.5%;
  }
}
</style>
