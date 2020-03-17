<template>
  <div class="member">
    <slick-slide ref="slick" :options="slickOptions">
      <div v-for="value in members" :key="value">
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
      <div class="more-btn">
        <a class="member-button" href="/member">詳しくみる　　　<p class="member-arrow">></p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import '../../../node_modules/slick-carousel/slick/slick.css'
export default {
  name: 'Member',
  components: {
    TheSubHeader
  },
  data() {
    return {
      members: [
        {
          image:
            'https://storage.googleapis.com/prd-careers-asset/2019/05/7b516167-design_thum-768x400.jpg',
          name: '髙橋 翼',
          romajiName: 'Tsubasa Takahashi'
        },
        {
          image:
            'https://storage.googleapis.com/prd-careers-asset/2019/05/7b516167-design_thum-768x400.jpg',
          name: '髙橋 光',
          romajiName: 'Hikaru Takahashi'
        },
        {
          image:
            'https://storage.googleapis.com/prd-careers-asset/2019/05/7b516167-design_thum-768x400.jpg',
          name: '布村 武大',
          romajiName: 'Takehiro Nonomura'
        },
        {
          image:
            'https://storage.googleapis.com/prd-careers-asset/2019/05/7b516167-design_thum-768x400.jpg',
          name: '横田 峻',
          romajiName: 'Shun Yokota'
        },
        {
          image:
            'https://storage.googleapis.com/prd-careers-asset/2019/05/7b516167-design_thum-768x400.jpg',
          name: '髙橋 翼',
          romajiName: 'Tsubasa Takahashi'
        },
        {
          image:
            'https://storage.googleapis.com/prd-careers-asset/2019/05/7b516167-design_thum-768x400.jpg',
          name: '髙橋 光',
          romajiName: 'Hikaru Takahashi'
        },
        {
          image:
            'https://storage.googleapis.com/prd-careers-asset/2019/05/7b516167-design_thum-768x400.jpg',
          name: '布村 武大',
          romajiName: 'Takehiro Nonomura'
        },
        {
          image:
            'https://storage.googleapis.com/prd-careers-asset/2019/05/7b516167-design_thum-768x400.jpg',
          name: '横田 峻',
          romajiName: 'Shun Yokota'
        }
      ],
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
  cursor: pointer;
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
  text-align: right;
  width: 100%;
}
.more-btn {
  width: 50%;
  margin-left: 50%;
  padding-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid $lightgray;
}
.member-button {
  font-size: 16px;
  display: inline-block;
  color: $black;
}
.member-arrow {
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
@media screen and (max-width: 600px) {
  .more-btn {
    padding-top: 20px;
    padding-bottom: 10px;
  }
}
</style>
