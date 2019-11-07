<template>
  <div>
    <triangle-up />
    <div class="value">
      <p>value</p>
      <h3 class="title is-3">
        圧倒的当事者意識
      </h3>
      <h3 class="title is-3">
        目の前の人を大事にする
      </h3>
      <h3 class="title is-3">
        和衷協同
      </h3>
    </div>
    <triangle-down/>
  </div>
</template>

<script>
import TriangleUp from '~/components/pages/top/TriangleUp.vue'
import TriangleDown from '~/components/pages/top/TriangleDown.vue'

export default {
  components: {
    TriangleUp,
    TriangleDown
  }
}
</script>

<style lang="scss" scoped>
.value {
  width: 80%;
  margin: 0 auto;
}
</style>
