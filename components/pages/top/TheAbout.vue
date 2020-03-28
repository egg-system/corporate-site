<template>
  <div class="about">
    <div class="about-columns">
      <div class="about-column first">
        <p class="about-column-title">わたしたちについて</p>
        <p class="about-column-content">
          株式会社エッグシステムのコンサルティングエンジニア集団<br>「x-faCE（for all Consulting Engineer）」では、 <br>《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》<br>の実現のために、ITシステムを活用します。
        </p>
        <div class="about-btn-area">
          <nuxt-link to="/about">
            <div class="btn-area">
              <p>詳しくみる<span>></span></p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="about-column second">
        <img :src="img">
      </div>
    </div>
    <the-sub-header text="わたしたちについて" class="about-header-sp" />
    <div class="about-columns-sp">
      <div class="about-column first">
        <img :src="img">
      </div>
      <div class="about-column second">
        <p class="about-column-content">
          株式会社エッグシステムのコンサルティングエンジニア集団「x-faCE（for all Consulting Engineer）」では、《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》の実現のために、ITシステムを活用します。
        </p>
        <div class="about-btn-area">
          <nuxt-link to="/about">
            <div class="btn-area">
              <p>詳しくみる<span>></span></p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutImage from '~/assets/top/about.jpeg'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'

export default {
  components: {
    TheSubHeader
  },
  data() {
    return {
      img: aboutImage
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 350px;
  margin-top: 5%;
  margin-bottom: 5%;
  background: $whitesmoke;
  padding-top: 15px;
  padding-bottom: 15px;
}
.about-columns {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.about-column {
  padding-top: 10px;
  height: 250px;
  font-size: 15px;
  font-weight: bold;
}
.first {
  width: 55%;
  padding: 5px;
}
.second {
  width: 35%;
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
  margin-top: 35px;
  line-height: 32px;
}
.about-btn-area {
  width: 40%;
  margin-top: 55px;
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
.about-header-sp {
  display: none;
}
.about-columns-sp {
  display: none;
}
@media screen and (max-width: 600px) {
  .about {
    background: $white;
    height: auto;
    margin-top: 0;
  }
  .about-columns {
    display: none;
  }
  .about-header-sp {
    display: block;
  }
  .about-columns-sp {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
  .about-column {
    width: 100%;
    margin: 0 auto;
    height: auto;
  }
  .about-column-content {
    font-size: 14px;
    margin-top: 10px;
  }
  .about-btn-area {
    width: 100%;
    float: none;
    margin-top: 20px;
  }
}
</style>
