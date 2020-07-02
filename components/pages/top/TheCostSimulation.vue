<template>
  <div class="cost-simulation">
    <the-sub-header text="ITコストシミュレーション" class="about-header-sp" />
    <div class="columns">
      <div class="column second is-5">
        <img :src="img">
      </div>
      <div class="column first is-7">
        <h2 class="about-column-title">ITコストシミュレーション</h2>
        <p class="about-column-content">
          システムにかかる総コスト（ITコスト）が妥当かどうか、
          5分で簡単にわかるITコストシミュレーションを無料でご利用いただけます。<br>
          経済産業省が公表しているデータに基づき、業種、売上規模・従業員数が同程度の他社と比較しITコストが妥当かシミュレーションします。
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
import Image from '~/assets/top/it-cost-simulation.jpg'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import TheLinkButton from '~/components/pages/common/TheLinkButton.vue'

export default {
  components: {
    TheSubHeader,
    TheLinkButton
  },
  data() {
    return {
      img: Image
    }
  }
}
</script>

<style lang="scss" scoped>
.cost-simulation {
  width: 100%;
  min-height: 350px;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.columns {
  margin: auto;
  position: relative;
  width: 80%;
}
.column {
  padding: 0;
}
.about-column-title {
  display: inline-block;
  font-size: 1.5em;
  font-weight: bold;
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
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $lightgray;
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
  padding-left: 60px;
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
    padding-left: 0;
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
