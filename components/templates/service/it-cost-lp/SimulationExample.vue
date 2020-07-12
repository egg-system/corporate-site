<template>
  <div class="simulation-example">
    <the-sub-header text="シミュレーション結果例" />
    <div class="columns">
      <div class="column is-4 margin-left-2rem">
        <description message="・卸売業" />
        <description message="・売上：3億円" />
        <description message="・従業員数：15名" />
        <description message="・年間システム費用：600万円" />
      </div>
      <div-image class="column is-8" />
    </div>
  </div>
</template>

<script>
import TheSubHeader from '~/components/atoms/header/TheSubHeader.vue'
import Description from '~/components/atoms/message/Description.vue'
import DivImage from '~/components/atoms/img/DivImage0.vue'

export default {
  name: 'SimulationExample',
  components: {
    TheSubHeader,
    Description,
    DivImage
  }
}
</script>
<style lang="scss" scoped>
.simulation-example {
  padding: 4rem 0;
}
.margin-left-2rem {
  margin-left: 2rem;
}
</style>
