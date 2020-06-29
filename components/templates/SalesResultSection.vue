<template>
  <div class="margin-2 margin-top-5">
    <result-section-title label="年間売上高規模別" />
    <result-section-description :range="range" label="年間売上" />
    <result-table
      :industry="industry"
      :genre="genre"
      :client-val="clientVal.toString()"
      :industry-val="industryVal.toString()"
      :genre-val="genreVal.toString()"
      :all-val="allVal.toString()"
    />
    <div class="columns">
      <div class="column margin-2">
        <difference :value="value" :message="difMessage" />
      </div>
      <div class="column margin-2">
        <recommend :message="recMessage" />
      </div>
    </div>
  </div>
</template>

<script>
import dataForSales from '~/assets/service/simulator/dataForSales.json'
import ResultSectionTitle from '~/components/atoms/ResultSectionTitle.vue'
import ResultSectionDescription from '~/components/atoms/ResultSectionDescription.vue'
import ResultTable from '~/components/atoms/ResultTable.vue'
import Difference from '~/components/molecules/Difference.vue'
import Recommend from '~/components/molecules/Recommend.vue'

export default {
  name: 'SalesResultSection',
  components: {
    ResultSectionTitle,
    ResultSectionDescription,
    ResultTable,
    Difference,
    Recommend
  },
  computed: {
    // 入力売上高から該当範囲を選出
    range: function() {
      var sales = this.$store.state.simulator.simulationInfo.sales
      if (sales <= 100000000) return '～ １億円以下'
      else if (sales <= 500000000) return '１億円超～ ５億円以下'
      else if (sales <= 1000000000) return '５億円超～ １０億円以下'
      else if (sales <= 2000000000) return '１０億円超～ ２０億円以下'
      else if (sales <= 10000000000) return '２０億円超～ １００億円以下'
      else if (sales <= 100000000000) return '１００億円超～ １，０００億円以下'
      else return '１，０００億円超～'
    },
    // 差分を算出
    value: function() {
      if (this.industryVal != 'NO DATA') {
        return (
          Math.floor(
            (Math.abs(this.clientVal - this.industryVal) / 100) *
              this.$store.state.simulator.simulationInfo.sales
          ).toLocaleString() + '円'
        )
      } else {
        return '比較対象データがないため算出不可です。'
      }
    },
    // 多いか少ないその他かメッセージを判定
    difMessage: function() {
      if (this.industryVal != 'NO DATA') {
        return this.clientVal - this.industryVal < 0 ? '少ないです' : '多いです'
      } else {
        return '（' + this.industry + 'のデータがありません）'
      }
    },
    // おすすめメッセージを判定
    recMessage: function() {
      if (this.industryVal != 'NO DATA') {
        return this.clientVal - this.industryVal < 0
          ? '新システムの導入や機能追加など、システム投資を増やす検討をおすすめします'
          : 'コスト削減をおすすめします'
      } else {
        return 'こちらからお問い合わせいただきますと、<br>詳細なご試算が可能です。'
      }
    },
    // 業種を取得
    industry: function() {
      return this.$store.state.simulator.simulationInfo.industry
    },
    // 業種種別を算出
    genre: function() {
      var genre = this.$store.state.simulator.simulationInfo.genre
      if (genre == 'seizou') return '製造業'
      else return '非製造業'
    },
    // 顧客コスト割合を算出
    clientVal: function() {
      var cost = this.$store.state.simulator.simulationInfo.cost
      var sales = this.$store.state.simulator.simulationInfo.sales
      return Math.round((cost / sales) * 1000) / 10
    },
    // 同業種のコスト割合を算出
    industryVal: function() {
      var value = Number(dataForSales[this.industry][this.range])
      if (value == 0) return 'NO DATA'
      else return value
    },
    // 業種種別のコスト割合を算出
    genreVal: function() {
      var value = Number(dataForSales[this.genre + '計'][this.range])
      if (value == 0) return 'NO DATA'
      return value
    },
    // 全業種のコスト割合を算出
    allVal: function() {
      var value = Number(dataForSales['合計'][this.range])
      if (value == 0) return 'NO DATA'
      return value
    }
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}
.margin-2 {
  margin: 2rem;
}
.margin-3 {
  margin: 3rem;
}
.margin-top-5 {
  margin-top: 5rem;
}
</style>
