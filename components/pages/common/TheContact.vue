<template>
  <div class="contact">
    <div class="contact-columns">
      <nuxt-link to="/contact">
        <div class="contact-column">
          <p>採用について質問する<span>></span></p>
        </div>
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
  margin-top: 8%;
  margin-bottom: 10%;
  background: $white;
}
.contact-columns {
  width: 100%;
  display: flex;
  justify-content: center;
}
.contact-columns a {
  width: 60%;
}
.contact-column {
  padding: 0;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  font-weight: bold;
  background: $darkblack;
  border-radius: 4px;
}
.contact-column p {
  color: $lightgray;
  font-size: 18px;
}
.contact-column p span {
  margin-left: 15px;
}
@media screen and (max-width: 600px) {
  .contact-columns {
    display: block;
  }
  .contact-column {
    width: 100%;
    margin: 15px auto;
  }
}
</style>
