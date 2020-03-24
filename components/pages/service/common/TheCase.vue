<template>
  <div>
    <p class="is-size-5">事例紹介</p>
    <div class="columns is-multiline">
      <div v-for="(item, i) in cases" :key="i" :class="{ right: (i % 2) === 1 }" class="column is-half">
        <div class="case-title button is-dark">
          <span v-html="item.title" />
        </div>
        <div class="sub-title">
          {{ item.subtitle }}
        </div>
        <div class="description">
          {{ item.description }}
        </div>
        <br>
        <div class="case-item">
          <span v-html="item.item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cases: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    isActive: true
  })
}
</script>

<style lang="scss" scoped>
.is-size-5 {
  margin-top: 2rem;
}
.columns {
  position: relative;
  margin-bottom: 3rem;
}
div {
  font-size: 0.75rem;
}
.column {
  position: relative;
  min-height: 20rem;
  .button {
    width: 15rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
}
.case-title {
  cursor: default;
  height: 3rem;
}
.sub-title,
.description,
.case-item {
  line-height: 1.75;
}
@media screen and (min-width: 769px) {
  .right::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 85%;
    left: 0;
    background: $lightgray;
  }
}
@media screen and (max-width: 768px) {
  .column::after {
    position: absolute;
    content: '';
    width: 90%;
    height: 1px;
    background: $lightgray;
    margin-top: 0.5rem;
  }
  .column:last-child::after {
    height: 0px;
  }
}
</style>
