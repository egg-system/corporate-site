<template>
  <div class="conversion">
    <nuxt-link to="/download">
      『IT投資を成功に導く方法』の<br>ダウンロードはこちら
    </nuxt-link>
  </div>  
</template>

<style lang="scss" scoped>
.conversion {
  position: fixed;
  bottom: 5rem;
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

    br {
      display: none;
    }
  }

  a {
    color: whitesmoke;
  }
}
</style>
