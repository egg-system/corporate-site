<template>
  <div class="service-links">
    <div class="link-wrapper">
      <nuxt-link to="/service/consulting-engineer" class="case-button button is-dark">
        <span class="link-message">料金プラン</span>
      </nuxt-link>
    </div>
    <div class="link-wrapper">
      <nuxt-link to="/cases" class="case-button button is-dark">
        <span class="link-message">顧客インタビュー・事例紹介</span>
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
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }

  .link-wrapper {
    a {
      margin-bottom: 2rem;
      width: 20rem;
    }
  }
}
</style>
