<template>
  <div class="case-list">
    <div v-for="item in cases" :key="item.id" class="columns">
      <div class="column second is-5">
        <figure>
          <img :src="item.img.url" :alt="item.title">
        </figure>
      </div>
      <div class="column first is-7">
        <p class="case-title">{{ item.title }}</p>
        <p class="case-summary">{{ item.summary }}</p>
        <nuxt-link :to="'/cases/' + item.id" class="case-button button is-dark">
          <span class="link-message">インタビュー詳細へ</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cases: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.case-list {
  margin-bottom: 4rem;
}

@media screen and (min-width: 1030px) {
  .is-7 {
    padding-left: 60px;
  }
}

.case-title {
  margin-bottom: 3rem;
}

.case-summary {
  margin-bottom: 2rem;
}

.case-button {
  font-size: 0.8rem;
  height: 49px;
  padding: 1.2rem 2.5rem;
}
</style>
