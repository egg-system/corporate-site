<template>
  <div class="service-links">
    <div class="link-wrapper">
      <nuxt-link to="/cases" class="case-button button is-dark">
        <span class="link-message">顧客インタビュー・事例紹介</span>
      </nuxt-link>
    </div>
    <div class="link-wrapper">
      <nuxt-link to="/company" class="case-button button is-dark">
        <span class="link-message">会社概要</span>
      </nuxt-link>
    </div>
    <div class="link-wrapper">
      <nuxt-link to="/about" class="case-button button is-dark">
        <span class="link-message">わたしたちについて</span>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service-links {
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1023px) {
    flex-flow: column;
    align-items: center;
  }

  .link-wrapper {
    a {
      margin-bottom: 2rem;
      width: 20rem;
      height: 49px;
    }
  }
}
</style>
