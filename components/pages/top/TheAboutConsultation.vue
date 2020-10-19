<template>
  <div
    :class="isServiceDetails ? 'service-detail-page' : ''"
    class="service-area"
  >
    <div class="service-image-area">
      <div class="service-image">
        <div class="service-feature">
          初めてお取引する企業様は初月無料
        </div>
        <div>
          <div class="service-details free-image">
            <div>1ヶ月目<br>¥0</div>
            <div>2ヶ月目以降から<br>費用が発生</div>
          </div>
          <img :src="firstMountFreeImage" alt="初月無料">
        </div>
        <div class="service-notice">
          <span>
            ※1ヶ月試してみて万が一ご期待に添えない場合は、<br>
            契約終了とし料金は請求いたしません。
          </span>
        </div>
      </div>
      <div class="service-image">
        <div class="service-feature">
          1ヶ月単位の契約が可能
        </div>
        <div>
          <div class="service-details contract-image">
            <div>○月</div>
            <div>○+1月</div>
            <div>○+2月</div>
          </div>
          <img :src="oneMountContractImage" alt="初月無料">
          <div class="service-details contract-image">
            <div>更新</div>
            <div>更新</div>
            <div>更新</div>
          </div>
        </div>
        <div class="service-notice">
          <span>
            ※ご希望に応じて、四半期単位、半期単位、年単位でのご契約も可能です。
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="service-reason">
        コンサルティング業界初の『初月無料』に取り組む理由
      </div>
      <div class="reason-button" @click="isOpened = !isOpened">
        詳しく見る {{ isOpened ? '-' : '+' }}
      </div>
      <the-first-mouth-free-reason v-if="isOpened" />
    </div>
  </div>
</template>

<script>
import firstMountFreeImage from '~/assets/top/top-firstmonth-free.png'
import oneMountContractImage from '~/assets/top/top-1month-contract.png'
import TheFirstMouthFreeReason from './TheFirstMouthFreeReason.vue'

export default {
  components: { TheFirstMouthFreeReason },
  props: {
    isServiceDetails: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({ isOpened: false }),
  computed: {
    firstMountFreeImage() {
      return firstMountFreeImage
    },
    oneMountContractImage() {
      return oneMountContractImage
    }
  }
}
</script>

<style lang="scss" scoped>
.service-area {
  text-align: center;
  width: 80%;
  margin: 1rem auto;

  .service-image-area {
    display: flex;
    justify-content: center;
  }

  .service-image {
    width: 50%;
    border: 1px solid #dbdbdb;
    margin: 0 1rem 3rem;
    padding: 1rem 2rem;

    .service-feature {
      font-weight: bold;
      margin-bottom: 2rem;
    }

    .service-details {
      display: flex;
    }

    .free-image div {
      width: 50%;
    }

    .contract-image div {
      width: 33.3333%;
    }

    .service-notice {
      margin-top: 1rem;
      text-align: left;

      span {
        font-size: 0.5rem;
      }
    }
  }

  .service-reason {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 769px) {
    width: 95%;

    .service-image-area {
      flex-flow: column;
      align-items: center;
    }

    .service-image {
      width: 100%;
      margin-bottom: 3rem;
    }
  }

  .reason-button {
    margin: 1rem 0 1rem;
    cursor: pointer;
  }
}

.service-detail-page {
  width: 100%;
  margin-top: 2rem;

  @media screen and (min-width: 1024px) {
    .service-image-area {
      .service-image {
        width: 40%;
      }
    }
  }
}
</style>
