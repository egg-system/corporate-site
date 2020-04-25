<template>
  <div class="member">
    <slick-slide ref="slick" :options="slickOptions">
      <div v-for="(value, key) in members" :key="key">
        <div class="member-list">
          <div class="member-image">
            <img :src="value.image">
          </div>
          <div class="member-name">
            <p>{{ value.name }}</p>
            <p class="member-romajiName">{{ value.romajiName }}</p>
          </div>
        </div>
      </div>
    </slick-slide>
    <div class="btn-area">
      <div class="Heading__cta">
        <nuxt-link class="next-button" to="/member">
          <the-link-button />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import '../../../node_modules/slick-carousel/slick/slick.css'
import members from '~/assets/js/top-member.js'
import TheLinkButton from '~/components/pages/common/TheLinkButton.vue'

export default {
  name: 'Member',
  components: {
    TheSubHeader,
    TheLinkButton
  },
  data() {
    return {
      members: members.members,
      slickOptions: {
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.member {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 5%;
}
.member-list {
  opacity: 1;
  margin: 0 10px;
}
.member-image {
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.member-image::before {
  content: '';
  background: $white;
  opacity: 0.5;
  position: absolute;
  left: -10%;
  top: 0px;
  height: 100%;
  width: 0;
  transform: skewX(0);
  transition: all 0.45s;
  z-index: -1;
}
.member-list:hover {
  .member-image::before {
    width: 110%;
    transition: all 0.2s ease-in;
    z-index: 1;
  }
}
.member-name {
  font-size: 14px;
  padding: 5px 0;
  text-align: center;
}
.member-message p {
  padding: 5px 0;
}
.member-romajiName {
  font-size: 16px;
  text-align: center;
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
.next-button {
  color: $black;
}
@media screen and (max-width: 600px) {
  .member {
    width: 90%;
  }
  .member-name {
    font-size: 12px;
  }
  .member-romajiName {
    font-size: 12px;
  }
}
@media screen and (max-width: 769px) {
  .Heading__cta {
    width: 100%;
  }
}
</style>
