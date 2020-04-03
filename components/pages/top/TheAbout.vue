<template>
  <div class="about">
    <the-sub-header text="わたしたちについて" class="about-header-sp" />
    <div class="columns reverse">
      <div class="column second is-5">
        <img :src="img">
      </div>
      <div class="column first is-7">
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
  min-height: 350px;
  margin-top: 5%;
  margin-bottom: 5%;
  background: $whitesmoke;
  padding-top: 15px;
  padding-bottom: 15px;
}
.columns {
  margin: auto;
  position: relative;
  width: 90%;
}
.reverse {
  flex-direction: row-reverse;
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
  min-width: 15rem;
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
.about-header-sp {
  display: none;
}
.about-columns-sp {
  display: none;
}
@media screen and (max-width: 768px) {
  .about {
    background: $white;
    height: auto;
    margin-top: 0;
  }
  .about-header-sp {
    display: block;
  }
  .about-column-title {
    display: none;
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
