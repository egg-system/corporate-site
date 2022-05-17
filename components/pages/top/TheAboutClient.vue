<template>
  <div class="about-client-area">
    <div class="about-client-summary">
      業種・業界問わず<br>中小企業様への支援実績が約90%です
    </div>
    <figure>
      <img :src="image" alt="顧客内訳・構成">
    </figure>
  </div>
</template>

<script>
import aboutImage from '~/assets/top/client-breakdown_new.jpg'

export default {
  computed: {
    image() {
      return aboutImage
    }
  }
}
</script>

<style lang="scss" scoped>
.about-client-area {
  text-align: center;
  margin-bottom: 5rem;

  .about-client-summary {
    margin: 1rem;
    font-size: 1.4rem;
    @media screen and (max-width: 769px) {
      font-size: 1rem;
    }
  }

  img {
    width: 80%;
    border: 1px solid #dbdbdb;
    margin: auto;
    padding: 1rem;

    @media screen and (max-width: 769px) {
      width: 95%;
    }
  }
}
</style>
