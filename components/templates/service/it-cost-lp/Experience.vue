<template>
  <div class="experience">
    <the-sub-header text="得られること" class="margin-bottom-3rem" />
    <div class="columns text-center">
      <div class="column">
        <item-title message="(1)<br>無料でITコストの妥当性がわかる" class="margin-bottom-3rem" />
        <description
          message="現在システムにかかっているITコストが、同業他社と比べて多いのか、少ないのか、わかります。目的地へ向かうために、まず現在地を把握する必要があります。現状のITコストの妥当性を把握することが第一歩です。"
        />
      </div>
      <div class="column">
        <item-title message="(2)<br>IT戦略策定の判断材料にできる" class="margin-bottom-3rem" />
        <description
          message="客観的なデータに基づいて診断されるため、今後システム投資を積極的に行うべきか、またはコスト削減を行っていくべきか、IT戦略を策定するための判断材料にすることができます。"
        />
      </div>
      <div class="column">
        <item-title message="(3)<br>具体的な金額まで分かる" class="margin-bottom-3rem" />
        <description
          message="同業他社と比較した結果を具体的な金額として得ることができます。そのため、どの程度の金額をシステム投資すべきか、あるいはどの程度コスト削減すべきか、具体的な金額まで分かります。"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheSubHeader from '~/components/atoms/header/TheSubHeader.vue'
import ItemTitle from '~/components/atoms/header/ItemTitle.vue'
import Description from '~/components/atoms/message/Description.vue'

export default {
  name: 'Experience',
  components: {
    TheSubHeader,
    ItemTitle,
    Description
  }
}
</script>
<style lang="scss" scoped>
.experience {
  padding: 4rem 0;
  border-bottom: 1px solid $whitesmoke;
}
.text-center {
  text-align: center;
}
.margin-bottom-3rem {
  margin-bottom: 3rem;
}
</style>
