<template>
  <div>
    <div class="table-container">
      <table class="table table-info">
        <tbody>
          <tr>
            <td>社名</td>
            <td>株式会社エッグシステム （EGG SYSTEM Inc.）</td>
          </tr>
          <tr>
            <td>本社</td>
            <td>〒160-0023<br>東京都新宿区西新宿8-11-10 星野ビル3階（本社）<br class="sp"><a href="https://goo.gl/maps/zhfJADagsfJBdxxY7" target="_blank">> GoogleMapを開く</a><br></td>
          </tr>
          <tr>
            <td>静岡営業所</td>
            <td>〒420-0839<br>静岡県静岡市葵区鷹匠2-8-10-24<br class="sp"><a href="https://goo.gl/maps/1E1BQAzc9A6wGDcv7?coh=178573&entry=tt" target="_blank">> GoogleMapを開く</a><br></td>
          </tr>
          <tr>
            <td>代表者</td>
            <td>高橋 翼</td>
          </tr>
          <tr>
            <td>設立</td>
            <td>2017年7月</td>
          </tr>
          <tr>
            <td>資本金</td>
            <td>2,600,000円</td>
          </tr>
          <tr>
            <td>事業内容</td>
            <td>・システムコンサルティング<br>・システム開発</td>
          </tr>
          <tr>
            <td>主要取引銀行</td>
            <td>三菱UFJ銀行<br>きらぼし銀行<br>りそな銀行</td>
          </tr>
          <tr>
            <td>顧問弁護士</td>
            <td>TEN法律事務所　　星野 天  弁護士</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.table-info {
  border-top: 1px solid $lightgray;
  max-width: 800px;
  margin: auto;
}
.sp {
  display: none;
}
@media screen and (max-width: 600px) {
  .table-info {
    font-size: 12px;
  }
  .sp {
    display: block;
  }
}
</style>
