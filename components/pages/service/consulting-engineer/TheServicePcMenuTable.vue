<template>
  <div class="service-table-wrapper">
    <table class="service-table">
      <tr class="service-table-header">
        <th rowspan="2" />
        <th rowspan="2">
          お試しサービス
        </th>
        <th rowspan="2">
          アドバイザリーサービス
        </th>
        <th colspan="2">
          コンサルティングエンジニアサービス
        </th>
      </tr>
      <tr class="service-table-header">
        <th>顧問サービス</th>
        <th>社員代行サービス</th>
      </tr>
      <tr class="service-table-content">
        <td>料金</td>
        <td>無料<br><br>※初月のみ</td>
        <td>5万円</td>
        <td>50〜60万円</td>
        <td>100〜150万円</td>
      </tr>
      <tr class="service-table-content">
        <td>稼働時間</td>
        <td>4日/月<br>（約32時間）</td>
        <td>1〜2日/月<br>（約10時間）</td>
        <td>4〜5日/月<br>（約32〜50時間）</td>
        <td>10〜15日/月<br>（80〜150時間）
        </td>
      </tr>
      <tr class="service-table-content">
        <td>ご訪問</td>
        <td data-label="お試しサービス">週1日</td>
        <td data-label="アドバイザリーサービス">月1日</td>
        <td data-label="顧問サービス（コンサルティングエンジニアサービス）">
          週1〜2日
        </td>
        <td data-label="社員代行サービス（コンサルティングエンジニアサービス）">
          週3〜4日
        </td>
      </tr>
      <tr class="service-table-content">
        <td>現地での作業<br>（常駐）</td>
        <td data-label="お試しサービス">○</td>
        <td data-label="アドバイザリーサービス">☓</td>
        <td data-label="顧問サービス（コンサルティングエンジニアサービス）">
          ○
        </td>
        <td data-label="社員代行サービス（コンサルティングエンジニアサービス）">
          ○
        </td>
      </tr>
      <tr class="service-table-content">
        <td>連絡手段</td>
        <td data-label="お試しサービス">
          Web会議（zoom）<br>
          Chatwork<br>
          slack
        </td>
        <td data-label="アドバイザリーサービス">
          Web会議（zoom）<br>
          Chatwork<br>
          slack
        </td>
        <td data-label="顧問サービス（コンサルティングエンジニアサービス）">
          Web会議（zoom）<br>
          Chatwork<br>
          slack<br>
          またはお客様の社内ツール
        </td>
        <td data-label="社員代行サービス（コンサルティングエンジニアサービス）">
          Web会議（zoom）<br>
          Chatwork<br>
          slack<br>
          またはお客様の社内ツール
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/service/scss/service-table.scss';
</style>
