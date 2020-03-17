<template>
  <div class="about">
    <div class="about-columns">
      <div class="about-column first">
        <p class="about-column-title">わたしたちについて</p>
        <p class="about-column-content">
          株式会社エッグシステムでは、<br class="sp">「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会<br class="sp">の実現のために、ITシステムを活用します。
        </p>
        <div class="about-btn-area">
          <a href="/about" target="_brunk">
            <div class="btn-area">
              <p>詳しくみる<span>></span></p>
            </div>
          </a>
        </div>
      </div>
      <div class="about-column">
        <img :src="images">
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
  background: $whitesmoke;
  padding-top: 15px;
  padding-bottom: 15px;
}
.about-columns {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.about-column {
  padding-top: 10px;
  width: 45%;
  height: 250px;
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
  padding: 15px 0;
}
.about-column-content {
  font-size: 16px;
  font-weight: normal;
  margin-top: 15px;
  line-height: 28px;
}
.about-btn-area {
  width: 40%;
  margin-top: 30px;
  float: right;
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
