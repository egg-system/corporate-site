<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <img src="https://eggsystem.co.jp/wp-content/uploads/2018/06/logo-yoko.png" width="150" height="30">
      </a>

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

    <div id="navbarBasicExample" :class="[isOpen ? 'is-active' : '']" class="navbar-menu">
      <div class="navbar-end">

        <a class="navbar-item">
          会社情報
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            サービス
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              システムコンサルティング
            </a>
            <a class="navbar-item">
              システム開発
            </a>
            <a class="navbar-item">
              サロン開業支援サービス
            </a>
            <a class="navbar-item">
              オウンドメディア運営
            </a>
          </div>
        </div>

        <a class="navbar-item">
          x-faCE
        </a>

        <a class="navbar-item">
          メンバー
        </a>

        <a class="navbar-item">
          ニュース
        </a>

        <a class="navbar-item">
          コラム
        </a>

        <a class="navbar-item">
          採用情報
        </a>

        <a class="navbar-item">
          お問い合わせ
        </a>

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
