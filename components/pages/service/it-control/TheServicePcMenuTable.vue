<template>
  <div class="service-table-wrapper">
    <table class="service-table">
      <tr class="service-table-header">
        <th />
        <th>ミニマムプラン</th>
        <th>ベーシックプラン</th>
        <th>ハイスペックプラン</th>
      </tr>
      <tr class="service-table-content">
        <td>初期料金</td>
        <td data-label="ミニマムプラン">100,000円</td>
        <td data-label="ベーシックプラン">0円</td>
        <td data-label="ハイスペックプラン">0円</td>
      </tr>
      <tr class="service-table-content">
        <td>月額料金</td>
        <td data-label="ミニマムプラン">0円</td>
        <td data-label="ベーシックプラン">600,000円</td>
        <td data-label="ハイスペックプラン">800,000円</td>
      </tr>
      <tr class="service-table-content">
        <td>契約期間</td>
        <td data-label="ミニマムプラン">
          なし<br>（買い切り）
        </td>
        <td data-label="ベーシックプラン">
          3ヶ月〜
        </td>
        <td data-label="ハイスペックプラン">
          1ヶ月〜
        </td>
      </tr>
      <tr class="service-table-content">
        <td>サポート内容</td>
        <td data-label="ミニマムプラン" style="text-align:left;">
          ◎IT関連規程および手順書のフォーマットを提供
        </td>
        <td data-label="ベーシックプラン" style="text-align:left;">
          ◎現状分析<br>
          <br>
          ◎文書作成<br>（IT関連規程、手順書）<br>
          <br>
          ◎全社的なIT統制/IT全般統制/IT業務処理統制の評価・整備<br>
          <br>
          ◎監査法人との協議支援<br>（質問書への回答作成）
        </td>
        <td data-label="ハイスペックプラン" style="text-align:left;">
          ◎現状分析<br>
          <br>
          ◎文書作成<br>（IT関連規程、手順書、3点セット）<br>
          <br>
          ◎全社的なIT統制/IT全般統制/IT業務処理統制の評価・整備<br>
          <br>
          ◎監査法人との協議支援<br>（質問書への回答作成、打ち合わせ同席など）<br>
          <br>
          ◎規程で定めた運用ルールの策定支援・運用支援
        </td>
      </tr>
      <tr class="service-table-content">
        <td>専任サポート</td>
        <td data-label="ミニマムプラン">なし</td>
        <td data-label="ベーシックプラン">あり</td>
        <td data-label="ハイスペックプラン">あり</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/service/scss/service-table.scss';

.support-content {
  text-align: left;
}
</style>
