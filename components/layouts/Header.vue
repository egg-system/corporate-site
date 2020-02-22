<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="https://eggsystem.co.jp/wp-content/uploads/2018/06/logo-yoko.png" width="150" height="30">
      </nuxt-link>

      <a :class="[isOpen ? 'is-active' : '']"
         class="navbar-burger burger"
         role="button"
         aria-label="menu"
         aria-expanded="false"
         data-target="navbarBasicExample"
         @click="menu()"
      >
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    </div>

    <div id="navbarBasicExample" :class="[isOpen ? 'is-active' : '']" class="navbar-menu" @click="menu()">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/about">
          わたしたちについて
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/company">
          会社情報
        </nuxt-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <nuxt-link class="navbar-link" to="/service">
            サービス
          </nuxt-link>

          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/service/consulting">
              システムコンサルティング
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/service/development">
              システム開発
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/service/salon">
              サロン開業支援サービス
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/service/media">
              オウンドメディア運営
            </nuxt-link>
          </div>
        </div>

        <nuxt-link class="navbar-item" to="/xface">
          x-faCE
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/member">
          メンバー
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/news">
          ニュース
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/column">
          コラム
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/recruit">
          採用情報
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
.subtitle {
  color: $black !important;
}
</style>
