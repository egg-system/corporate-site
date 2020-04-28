<template>
  <div class="service">
    <div class="service-columns">
      <div class="link">
        <nuxt-link to="/service" class="button is-dark">
          <span class="link-message">x-faCEのサービスへ</span>
          <span class="column-arrow" />
        </nuxt-link>
      </div>
      <div class="link">
        <nuxt-link to="/request" class="button is-dark">
          <span class="link-message">ご依頼の流れ</span>
          <span class="column-arrow" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.service {
  width: 80%;
  margin: 0 auto;
  margin-top: 8%;
  margin-bottom: 8%;
  background: $white;
}
.service-columns {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.link {
  width: 30rem;
}

@media screen and (max-width: 600px) {
  .service {
    width: 90%;
  }
  .link {
    width: 100%;
  }
}
@media screen and (max-width: 769px) {
  .service-columns {
    display: block;
  }
  .link {
    margin: 50px auto;
  }
}
</style>
