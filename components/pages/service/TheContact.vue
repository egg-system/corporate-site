<template>
  <div class="contact">
    <div class="contact-content">
      <p>「こんな相談してよいのか分からない」</p>
      <p>「まずは話だけ聞いてみたい」</p>
      <p>といった方もお気軽にご相談ください。</p>
    </div>
    <div class="contact-btn-area">
      <nuxt-link to="/contact">
        <div class="btn-area">
          <p>お問い合わせ・ご相談はこちらから<span>></span></p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
.contact-content p {
  font-size: 32px;
  text-align: center;
  padding: 10px 5px;
}
.contact-btn-area {
  width: 30rem;
  margin: 30px auto;
}
.btn-area {
  padding: 0;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  font-weight: bold;
  background: $darkblack;
  border-radius: 4px;
}
.btn-area p {
  color: $lightgray;
  font-size: 18px;
}
.btn-area p span {
  margin-left: 15px;
}
@media screen and (max-width: 600px) {
  .contact {
    width: 100%;
  }
  .contact-content p {
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
  }
  .contact-btn-area {
    width: 100%;
    margin: 30px auto;
  }
  .btn-area p {
    font-size: 14px;
  }
  .btn-area p span {
    margin-left: 10px;
  }
}
</style>
