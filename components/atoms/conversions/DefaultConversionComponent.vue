<template>
  <div class="conversion">
    <nuxt-link
      id="download-conversion-lik"
      to="/download"
    >
      無料資料『IT投資の成功事例と補助金を紹介』ダウンロードはこちら
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.conversion {
  position: fixed;
  bottom: 4rem;
  background-color: #333;
  padding: 1rem 2rem;
  border: 1px solid #fff;
  border-radius: 4px;

  @media screen and (max-width: 769px) {
    width: 90%;
    margin: 0 5%;
  }

  @media screen and (min-width: 770px) {
    right: 3rem;
  }

  a {
    color: whitesmoke;
  }
}
</style>
