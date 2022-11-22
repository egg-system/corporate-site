<template>
  <footer class="footer">
    <div class="columns">
      <div class="column is-4 image">
        <img src="/white-footer-logo-new2.png">
        <p>株式会社エッグシステム</p>
      </div>
      <div class="column is-3 first ">
        <nuxt-link class="navbar-item" to="/about">
          わたしたちについて
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/about/consulting-engineer">
          コンサルティングエンジニアとは
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/service">
          サービス
        </nuxt-link>
        <ul class="navbar-sub-item-list">
          <li>
            <nuxt-link class="navbar-item" to="/service/consulting-engineer">
              ITプロシェアサービス
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="navbar-item" to="/service/it-control">
              IT統制サポート
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="navbar-item" to="/service/others">
              個別サービス
            </nuxt-link>
          </li>
        </ul>
        <nuxt-link class="navbar-item" to="/cases">
          事例紹介
        </nuxt-link>
        <!--
        <nuxt-link class="navbar-item" to="/own_site">
          自社サービス紹介
        </nuxt-link>
        -->
        <nuxt-link class="navbar-item" to="/service/it-cost-lp">
          ITコストシミュレーション
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/member">
          メンバー
        </nuxt-link>
      </div>
      <div class="column is-3 second">
        <nuxt-link class="navbar-item" to="/company">
          会社概要
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/request">
          ご依頼について
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/recruit">
          採用
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/column">
          最近の活動・コラム
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/news">
          お知らせ
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/download">
          資料ダウンロード
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/free-contact">
          無料相談
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

<style lang="scss" scoped>
.columns {
  margin: 0 0 5rem;
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

.navbar-sub-item-list {
  margin-left: 1rem;
}
</style>
