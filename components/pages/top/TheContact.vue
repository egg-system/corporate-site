<template>
  <div class="contact">
    <div class="contact-content">
      <p>「こんな相談してよいのか分からない」</p>
      <p>「まずは話だけ聞いてみたい」</p>
      <p>といった方もお気軽にご相談ください。</p>
    </div>
    <div class="link">
      <nuxt-link to="/contact" class="button is-dark">
        <span class="link-message">お問い合わせ・ご相談はこちらから</span>
        <span class="column-arrow" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.contact {
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
.contact-content {
  padding-top: 30px;
}
.contact-content p {
  font-size: 32px;
  text-align: center;
  padding: 10px 5px;
}

.link {
  width: 30rem;
  margin: 30px auto;
}

@media screen and (max-width: 600px) {
  .contact {
    width: 90%;
  }
  .link {
    width: 100%;
  }
}
</style>
