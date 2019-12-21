<template>
  <div>
    <div>
      <p class="explanation">
        施術以外の不安をゼロにし、自分の力で集客して店舗経営するサロンオーナーの「欲しい」を形にした「サロン特化開業支援サービス」です。<br>
        顧客に合わせたメニュー・コンセプト作りから、ホームページの制作、集客方法の設計、予約や会計まで一貫したオペレーションを実現します。
      </p>

      <p class="explanation center-text blank">
        <b>「施術以外の不安をゼロ」にする７つのサービス</b>
      </p>

      <div class="box-left">
        <p>
          1.開業後に実現したい目標やお店について丁寧にヒアリング<br><br>
          2.来店して欲しい顧客に合わせたメニュー作り<br><br>
          3.他店と差別化できるお店のコンセプトを一緒に作成<br><br>
          4.お店のコンセプトに合ったホームページの製作ホームページ制作<br><br>
          5.集客方法の設計<br><br>
          6.予約から会計まで一貫したオペレーションの実現<br><br>
          7.豊富な他社事例のご提供<br>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.box-left {
  padding: 0.5em 1em;
  color: $black;
  background: $whitesmoke;
  border-left: solid 10px $lightBlue;
  width: 60%;
  margin: auto;
}
/* スマホの場合は幅を広くする */
@media screen and (max-width: 400px) {
  .box-left {
    width: 100%;
    margin: auto;
  }
}
.box-left p {
  margin: 0;
  padding: 0;
}
.center-text {
  text-align: center;
}
.blank {
  margin-top: 30px;
}
</style>
