<template>
  <div>
    <the-triangle-up />
    <div class="value">
      <the-sub-header text="value" />
      <h3 class="title is-3">
        圧倒的当事者意識
      </h3>
      <h3 class="title is-3">
        目の前の人を大事にする
      </h3>
      <h3 class="title is-3">
        和衷協同
      </h3>
      <button class="button is-primary">詳細をみる</button>
    </div>
    <the-triangle-down/>
  </div>
</template>

<script>
import TheTriangleUp from '~/components/pages/top/TheTriangleUp.vue'
import TheTriangleDown from '~/components/pages/top/TheTriangleDown.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'

export default {
  components: {
    TheTriangleUp,
    TheTriangleDown,
    TheSubHeader
  }
}
</script>

<style lang="scss" scoped>
.value {
  width: 80%;
  margin: 0 auto;
}
</style>
