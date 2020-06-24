<template>
  <div class="margin-2 margin-top-7">
    <result-section-title label="従業員数規模別" />
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
import dataForEmployees from '~/assets/service/simulator/dataForEmployees.json'
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
      var employees = this.$store.state.simulator.simulationInfo.employees
      if (employees <= 100) return '～ １００人'
      else if (employees <= 200) return '１０１人～ ２００人'
      else if (employees <= 250) return '２０１人～ ２５０人'
      else if (employees <= 300) return '２５１人～ ３００人'
      else if (employees <= 1000) return '３０１人～ １，０００人'
      else if (employees <= 5000) return '１，００１人～ ５，０００人'
      else return '５，００１人～'
    },
    // 差分を算出
    value: function() {
      if (this.industryVal != 'NO DATA') {
        return (
          Number(
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
        return ''
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
      var value = Number(dataForEmployees[this.industry][this.range])
      if (value == 0) return 'NO DATA'
      else return value
    },
    // 業種種別のコスト割合を算出
    genreVal: function() {
      var value = Number(dataForEmployees[this.genre + '計'][this.range])
      if (value == 0) return 'NO DATA'
      return value
    },
    // 全業種のコスト割合を算出
    allVal: function() {
      var value = Number(dataForEmployees['合計'][this.range])
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
.margin-top-7 {
  margin-top: 7rem;
}
</style>
