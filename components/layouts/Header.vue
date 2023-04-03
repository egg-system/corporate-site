<template>
  <nav class="navbar darksmoke-underline" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="/logo_image_small_new.png">
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

    <div :class="[isOpen ? 'is-active' : '']" class="navbar-menu" @click="menu()">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/about">
          経営理念
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/service">
          サービス
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
      </div>

      <div class="convertion-area">
        <nuxt-link
          id="free-contact-button"
          class="conversion-button button is-dark is-outlined"
          to="/free-contact"
        >
          <span class="link-message">無料相談</span>
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

#download-button {
  color: whitesmoke;
}

.convertion-area {
  display: flex;
  @media screen and (min-width: $navbar-breakpoint) {
    margin-right: 1rem;
  }
}

@media screen and (max-width: $navbar-breakpoint) {
  .navbar-brand {
    margin-left: 2%;
  }

  .navbar-end {
    .navbar-item {
      border-right: none;
      margin: 0.3rem;
    }
  }

  .convertion-area {
    display: flex;
    flex-flow: column;

    .conversion-button {
      margin: 0.5rem 1rem;
    }
  }
}
@media screen and (min-width: $navbar-breakpoint) {
  .navbar-brand {
    margin-left: 7.5%;
  }

  .navbar-end {
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

  .conversion-button {
    margin: auto 0.5rem;
    height: 3rem;
  }
}
</style>
