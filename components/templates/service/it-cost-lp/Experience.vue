<template>
  <div class="experience">
    <the-sub-header text="得られること" class="margin-bottom-3rem" />
    <div class="columns text-center">
      <div class="column">
        <div class="div-image">
          <img :src="img1">
        </div>
        <item-title message="(1)<br>システムにかかる費用の<br>妥当性がわかる" class="margin-bottom-3rem" />
        <description
          message="現在システムにかかっている費用（ITコスト）が、同業他社と比べて多いのか、少ないのか、わかります。地図を広げて目的地へ向かうためには、まずは現在地を把握する必要があります。現状のITコストの妥当性を把握することが第一歩です。"
        />
      </div>
      <div class="column">
        <div class="div-image">
          <img :src="img2">
        </div>        <item-title message="(2)<br>IT戦略策定の判断材料にできる" class="margin-bottom-3rem" />
        <description
          message="<br>客観的なデータに基づいて診断されるため、今後システム投資を積極的に行うべきか、またはコスト削減を行っていくべきか、IT戦略を策定するための判断材料にすることができます。"
        />
      </div>
      <div class="column">
        <div class="div-image">
          <img :src="img3">
        </div>
        <item-title message="(3)<br>具体的な金額まで分かる" class="margin-bottom-3rem" />
        <description
          message="<br>同業他社と比較した結果を具体的な金額として得ることができます。そのため、どの程度の金額をシステム投資すべきか、あるいはどの程度コスト削減すべきか、具体的な金額まで分かります。"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheSubHeader from '~/components/atoms/header/TheSubHeader.vue'
import ItemTitle from '~/components/atoms/header/ItemTitle.vue'
import Description from '~/components/atoms/message/Description.vue'
import img1 from '~/assets/service/img/it-cost-LP_feature1.png'
import img2 from '~/assets/service/img/it-cost-LP_feature2.png'
import img3 from '~/assets/service/img/it-cost-LP_feature3.png'

export default {
  name: 'Experience',
  components: {
    TheSubHeader,
    ItemTitle,
    Description
  },
  data() {
    return {
      img1: img1,
      img2: img2,
      img3: img3
    }
  }
}
</script>
<style lang="scss" scoped>
.experience {
  padding: 4rem 0;
}
.text-center {
  text-align: center;
}
.margin-bottom-3rem {
  margin-bottom: 2rem;
}
.div-image {
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 85%;
}
</style>
