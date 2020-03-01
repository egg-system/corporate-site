<template>
  <div class="service">
    <div class="service-columns">
      <div class="service-column">
        <a href="/service" target="_brunk">(仮)x-faCEのサービス(リンクになっています)</a>
      </div>
      <div class="service-column">
        (仮)ご利用の流れ
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
  margin-bottom: 10%;
  background: $white;
}
.service-columns {
  display: flex;
  justify-content: space-between;
}
.service-column {
  padding: 0;
  width: 45%;
  height: 200px;
  border: 2px solid $gray;
  color: $black;
  text-align: center;
  line-height: 200px;
  font-size: 15px;
  font-weight: bold;
}
.service-column a {
  color: $black;
}
@media screen and (max-width: 600px) {
  .service-columns {
    display: block;
  }
  .service-column {
    width: 100%;
    margin: 10px auto;
  }
}
</style>
