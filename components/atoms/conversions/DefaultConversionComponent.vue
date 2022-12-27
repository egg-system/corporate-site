<template>
  <div class="conversion">
    <nuxt-link
      id="download-conversion-lik"
      to="/download"
    >
      『業務自動化・デジタル化事例紹介』<br>無料ダウンロードはこちら
    </nuxt-link>
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
