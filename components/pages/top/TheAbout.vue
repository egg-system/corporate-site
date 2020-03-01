<template>
  <div class="about">
    <div class="about-columns">
      <div class="about-column first">
        <p class="about-column-title">わたしたちについて</p>
        <p class="about-column-content">
          わたしたちは、時代の流れに沿ってめまぐるしく変化する価値観や生活<br class="sp">形態の中でも、一杯のスープに象徴される「豊かな食事」を提案し続ける<br class="sp">ことで、人々の生活を豊かで幸せなものにしたいと考えています。
        </p>
        <div class="btn-area">
          <a class="column-button" href="/about">詳しくみる　　　<p class="column-arrow">></p>
          </a>
        </div>
      </div>
      <div class="about-column">
        <img src="https://eggsystem.co.jp/wp-content/uploads/2019/10/201910-dx3-1024x682.jpg">
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  margin-top: 8%;
  margin-bottom: 10%;
  background: $lightgray;
  padding-top: 40px;
  padding-bottom: 40px;
}
.about-columns {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.about-column {
  padding-top: 10px;
  width: 45%;
  height: 200px;
  color: $black;
  font-size: 15px;
  font-weight: bold;
}
.first {
  padding: 5px;
}
.about-column-title {
  font-size: 24px;
  font-weight: normal;
  text-align: left;
}
.about-column-content {
  font-size: 14px;
  font-weight: normal;
  margin-top: 15px;
}
.btn-area {
  width: 100%;
  text-align: right;
  margin-top: 40px;
  font-weight: normal;
}
.column-button {
  font-size: 14px;
  display: inline-block;
  color: $black;
}
.column-arrow {
  display: inline-block;
  width: 17px;
  height: 17px;
  font-size: 12px;
  background: $black;
  border-radius: 50%;
  color: $white;
  text-align: center;
  line-height: 17px;
  vertical-align: 2px;
}
.about-column img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 600px) {
  .about-columns {
    display: block;
  }
  .about-column {
    width: 100%;
    margin: 0 auto;
  }
  .sp {
    display: none;
  }
}
</style>
