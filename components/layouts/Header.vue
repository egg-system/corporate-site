<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="logo_image_small.png">
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
  .navbar-item {
    height: 5rem;
    img {
      max-height: 3rem;
    }
  }
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
.is-active .navbar-end .navbar-item {
  border-right: none;
}
.logo {
  padding-left: 0.5rem;
  font-size: 1.2rem;
}
.navbar-burger {
  width: 5rem;
  height: 5rem;
}
.large-burger {
  width: 40%;
  left: calc(50% - 1rem);
  &:nth-child(1) {
    top: 44.75%;
  }
  &:nth-child(2) {
    top: 51%;
  }
  &:nth-child(3) {
    top: 57.25%;
  }
}
</style>
