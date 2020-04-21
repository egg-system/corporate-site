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
          株式会社エッグシステムのコンサルティングエンジニア集団<br class="sp">「x-faCE（for all Consulting Engineer）」では、 <br class="sp">《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》<br class="sp">の実現のために、ITシステムを活用します。
        </p>
        <div class="btn-area">
          <div class="Heading__cta">
            <nuxt-link class="ReadMore" to="/about">
              <span class="ReadMore__label">詳しくみる</span>
              <svg class="Icon -arrow-right-rounded" aria-hidden="true" focusable="false">
                <use xlink:href="#icon-arrow-right-rounded">
                  <svg id="icon-arrow-right-rounded" viewBox="0 0 18 18">
                    <path d="M0 9c0-4.967 4.033-9 9-9s9 4.033 9 9-4.033 9-9 9-9-4.033-9-9z">*</path>
                    <path d="M8.017 6l3.554 3.193-3.554 3.193" vector-effect="non-scaling-stroke">*</path>
                  </svg>
                </use>
              </svg>
            </nuxt-link>
          </div>
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
  width: 80%;
}
.column {
  padding: 0;
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
.btn-area {
  display: flex;
  justify-content: flex-end;
}
.Heading__cta {
  width: 45%;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $lightgray;
  text-align: right;
}
.ReadMore > * {
  vertical-align: middle;
}
.ReadMore {
  color: inherit;
  font-size: 1.125rem;
  font-weight: 400;
  text-decoration: none;
}
.ReadMore__label {
  margin-right: 5px;
  font-size: 14px;
}
.Icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: inherit;
  stroke: transparent;
  fill: currentColor;
}
.Icon.-arrow-right-rounded {
  stroke: #fff;
}
.about-header-sp {
  display: none;
}
.about-columns-sp {
  display: none;
}
.is-7 {
  padding-right: 60px;
}
@media screen and (max-width: 600px) {
  .columns {
    width: 90%;
  }
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
  .Heading__cta {
    width: 100%;
  }
  .is-7 {
    padding-right: 0;
  }
  .sp {
    display: none;
  }
}
</style>
