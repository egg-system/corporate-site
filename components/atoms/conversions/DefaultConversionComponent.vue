<template>
  <div class="conversion">
<!--
<nuxt-link
      id="download-conversion-lik"
      to="/download"
    >
-->
<a href="https://contents.eggsystem.co.jp/dencho-flow-document">
電子帳簿保存法対応業務フロー解説<br>無料ダウンロード →
    </a>
  </div>
</template>

<style lang="scss" scoped>
.conversion {
  position: fixed;
  bottom: 3rem;
  background-color: #333;
  padding: 0.8rem 1rem;
  border: 1px solid #fff;
  border-radius: 4px;
  text-align: center;

  @media screen and (max-width: 769px) {
    width: 90%;
    margin: 0 5%;
  }

  @media screen and (min-width: 770px) {
    right: 2rem;
  }

  a {
    color: whitesmoke;
  }
}
</style>
