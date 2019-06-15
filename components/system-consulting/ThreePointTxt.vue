<template>
  <div class="msg-txt">
    <h3 class="msg-title">システム導入における３つのポイント</h3>
    <br>

    <div id="system_consulting_three_points_in_introduction_detail_text_area">
      <p id="system_consulting_introduce_page_p">システム導入およびシステム導入後の運用における「計画」「推進」「管理」に沿ったコンサルティングサービスを提供します。</p>
    </div>

    <v-data-table
      :items="desserts"
      class="elevation-1"
      hide-default-footer
    >
      <template v-slot:body="{ items }">
        <tr v-for="item in items" :key="item.name" class="threepoint-tbl-tr">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: '計画',
          description: 'IT戦略・IT投資計画策定サービス'
        },
        {
          name: '管理',
          description: '業務改善コンサルティングサービス'
        },
        {
          name: '推進',
          description: 'プロジェクトマネジメントサービス'
        }
      ]
    }
  }
}
</script>

<style scoped>
.msg-title {
  color: #1f55a5 !important;
  font-size: 1.7em;
}
.font-red {
  color: red;
}
.threepoint-tbl-tr:hover {
  background-color: #f5f5f5;
}
</style>
