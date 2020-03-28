<template>
  <div>
    <section class="hero">
      <div class="hero-body">
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
.hero {
  text-align: left;
}
.subtitle {
  font-size: 1.75rem;
}
</style>
