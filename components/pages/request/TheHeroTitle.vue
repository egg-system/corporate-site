<template>
  <div>
    <section class="hero">
      <div class="hero-body page-content">
        <div class="container">
          <h1 class="title">
            {{ mainText }}
          </h1>
          <h2 v-if="subText !== ''" class="subtitle">
            {{ subText }}
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    mainText: {
      type: String,
      default: ''
    },
    subText: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.page-content {
  padding-left: 0rem;
}
.container {
  margin-left: 0;
}
.hero {
  text-align: left;
}
</style>
