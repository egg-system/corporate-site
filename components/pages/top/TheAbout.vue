<template>
  <div class="about">
    <the-sub-header text="わたしたちについて" class="about-header-sp" />
    <div class="columns reverse">
      <div class="column second is-5">
        <img :src="img" class="image">
      </div>
      <div class="column first is-7">
        <p class="about-column-title">わたしたちについて</p>
        <p class="about-column-content">
          株式会社エッグシステムのコンサルティングエンジニア集団<br class="sp">「x-faCE（for all Consulting Engineer）」では、 <br class="sp">《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》<br class="sp">の実現のために、ITシステムを活用します。
        </p>
        <div class="btn-area">
          <div class="Heading__cta">
            <nuxt-link class="next-button" to="/about">
              <the-link-button />
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
import TheLinkButton from '~/components/pages/common/TheLinkButton.vue'

export default {
  components: {
    TheSubHeader,
    TheLinkButton
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
  background: $whitesmoke;
  margin-top: 30px;
  padding: 5rem 0;
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
  margin-bottom: 2rem;
}
.about-column-content {
  font-size: 16px;
  font-weight: normal;
  line-height: 32px;
  margin-bottom: 2.5rem;
}
.btn-area {
  display: flex;
  justify-content: flex-end;
}
.Heading__cta {
  width: 45%;
  text-align: right;
}
.next-button {
  color: $black;
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
.image {
  width: 500px;
  height: 250px;
}
@media screen and (max-width: 600px) {
  .about {
    padding: 1.5rem 0;
  }
  .columns {
    width: 90%;
  }
}
@media screen and (max-width: 768px) {
  .about {
    height: auto;
    padding: 2.5rem 0;
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
  .image {
    width: 100%;
    height: auto;
  }
}
</style>
