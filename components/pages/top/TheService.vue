<template>
  <div class="service">
    <div class="service-columns">
      <a href="/service" target="_brunk">
        <div class="service-column">
          <p>x-faCEのサービスへ<span>></span></p>
        </div>
      </a>
      <a href="/service" target="_brunk">
        <div class="service-column">
          <p>ご依頼の流れ<span>></span></p>
        </div>
      </a>
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
  margin-bottom: 10%;
  background: $white;
}
.service-columns {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.service-columns a {
  width: 40%;
}
.service-column {
  padding: 0;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  font-weight: bold;
  background: $darkblack;
  border-radius: 4px;
}
.service-column p {
  color: $lightgray;
  font-size: 18px;
}
.service-column p span {
  margin-left: 15px;
}
@media screen and (max-width: 600px) {
  .service-columns {
    display: block;
  }
  .service-column {
    width: 100%;
    margin: 15px auto;
  }
}
</style>
