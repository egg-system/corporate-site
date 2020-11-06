<template>
  <nav class="navbar darksmoke-underline" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="/logo_image_small.png">
      </nuxt-link>
      <a :class="[isOpen ? 'is-active' : '']"
         class="navbar-burger burger"
         role="button"
         aria-label="menu"
         aria-expanded="false"
         data-target="navbarBasicExample"
         @click="menu()"
      >
        <span class="large-burger" aria-hidden="true"/>
        <span class="large-burger" aria-hidden="true"/>
        <span class="large-burger" aria-hidden="true"/>
      </a>
    </div>

    <div id="navbarBasicExample" :class="[isOpen ? 'is-active' : '']" class="navbar-menu" @click="menu()">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/about">
          わたしたちについて
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/service">
          サービス
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/member">
          メンバー
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/cases">
          事例紹介
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/column">
          最近の活動・コラム
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/recruit">
          採用
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/company">
          会社概要
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/free-contact">
          無料相談
        </nuxt-link>

      </div>

    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  data: () => ({
    isOpen: false
  }),
  methods: {
    menu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
a:visited,
a:hover,
a:active {
  color: inherit;
}
.navbar-brand {
  a {
    padding: 0px;
  }
  img {
    max-height: 2.5rem;
    height: 2.5rem;
  }
}
.large-burger {
  width: 24px;
  left: calc(50% - 12px);
}
@media screen and (max-width: $navbar-breakpoint) {
  .navbar-brand {
    margin-left: 2%;
  }
  .navbar-end .navbar-item {
    border-right: none;
    margin: 0.3rem;
  }
}
@media screen and (min-width: $navbar-breakpoint) {
  .navbar-brand {
    margin-left: 7.5%;
  }
  .navbar-end {
    padding-right: 6%;
    .navbar-item {
      border-right: solid 0.5px;
      height: 35%;
      padding-top: 0px;
      padding-bottom: 0px;
      margin: auto;
      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
