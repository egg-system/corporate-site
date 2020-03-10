<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="/logo_image_small.png">
        <p class="logo">EGG SYSTEM</p>
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

        <nuxt-link class="navbar-item" to="/company">
          会社概要
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/column">
          最近の活動・コラム
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/recruit">
          採用
        </nuxt-link>

        <nuxt-link class="navbar-item" to="contact">
          お問い合わせ
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
.navbar {
  border-bottom: solid 0.5px $darksmoke;
}
.navbar-brand {
  margin-left: 7.5%;
}
.navbar-end {
  padding-right: 6%;
  .navbar-item {
    border-right: solid 0.5px $black;
    height: 35%;
    padding-top: 0px;
    padding-bottom: 0px;
    margin: auto;
    &:last-child {
      border-right: none;
    }
  }
}
@media screen and (max-width: $navbar-breakpoint) {
  .navbar-end .navbar-item {
    border-right: none;
  }
  .navbar-brand {
    margin-left: 0%;
  }
}
.logo {
  padding-left: 0.5rem;
  font-size: 1.2rem;
}
.large-burger {
  width: 32px;
  left: calc(50% - 16px);
}
</style>
