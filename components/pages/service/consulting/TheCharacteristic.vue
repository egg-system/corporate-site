<template>
  <div>
    <div>
      <h3 class="is-5 word">①【計画】IT戦略・IT投資計画策定サービス</h3>
      <p class="explanation">
        効率よくシステム投資を行うためには計画が必要となります。 どういうシステムに、いつ、いくらの費用をかければよいか、というIT戦略を策定します。<br>
      </p>
      ※3年先の中長期計画まで策定されていない企業様向け<br><br>
      <p class="image-text">5W2H1Eを可視化します。</p>
      <!-- <figure class="image">
        <img src="https://eggsystem.co.jp/wp-content/uploads/2019/01/5w2h1e.png">
      </figure> -->
      <div class="box-left" >
        <p>
          ・<b>W</b>hy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;なぜ？<br>
          ・<b>W</b>hat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;何を？<br>
          ・<b>W</b>hen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;いつ？<br>
          ・<b>W</b>ho&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;誰が？<br>
          ・<b>W</b>here&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;どこに?<br>
          ・<b>H</b>ow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;どうやって？<br>
          ・<b>H</b>ow much&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;いくらで？<br>
          ・<b>E</b>ffect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;どんな効果？<br>
        </p>
      </div>
    </div>
    <div>
      <h3 class="is-5 blank word">②【推進】業務改善コンサルティングサービス</h3>
      <p class="explanation">
        現状業務の問題点を明らかにした上で、対策案を策定し、改善を行います。 必要に応じてシステム・ツールの導入を検討しながら、業務効率化を図ります。<br>
      </p>
      <div class="box-left" >
        <p>
          ・現行業務の可視化<br>
          ・現状分析（問題点の洗い出し、原因分析）<br>
          ・あるべき秒むフローの策定<br>
        </p>
      </div>
    </div>
    <div/>
    <h3 class="is-5 blank word">③【管理】プロジェクトマネジメントサービス</h3>
    <div class="columns">
      <div class="column">
        <p class="explanation">
          QCD（品質、コスト、納期）の観点で進捗や課題等を管理するだけでなく、課題解決に向けた推進や、ステークホルダー間での調整など、プロジェクトが円滑に進むようにマネジメントいたします。<br>
        </p>
        <div class="box-left" >
          <p>
            <b>1.レポーティング</b><br>
            ・プロジェクトの状況を纏め、経営層やマネジメント層へ報告する<br>
            ・プロジェクト方針や戦略などをプロジェクトメンバーへ伝える<br><br>
            <b>2.サポーティング</b><br>
            ・プロジェクトの管理面、技術面などの支援を行う。<br>
            ・プロジェクトマネジメントや開発の基準・標準を策定して、プロジェクトに基準<br><br>
            <b>3.ジャッジ</b><br>
            ・複数のステークホルダー間で実施する各種会議において、PMが欠席となった場合に代理で一次判断を行う。<br>
          </p>
        </div>
      </div>
      <div class="column is-two-fifths center">
        <figure class="image managment-img">
          <p class="small-text">＜当社の役割＞</p>
          <img src="https://eggsystem.co.jp/wp-content/uploads/2019/10/sys-management.png">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.explanation {
  font-size: 20px;
}
// スマホ版
@media screen and (max-width: 400px) {
  .explanation {
    font-size: 17px;
  }
}

.blank {
  margin-top: 70px !important;
}
.image-text {
  text-align: center;
}
.image {
  margin-bottom: 30px;
}
.managment-img {
  width: 30%;
  margin: auto;
}
.box-left {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: $black;
  background: $whitesmoke;
  border-left: solid 10px $lightBlue;
}
.box-left p {
  margin: 0;
  padding: 0;
}
.center {
  margin: auto;
}
.small-text {
  font-size: 10px;
}
.word {
  text-align: center;
  color: $blue;
}
</style>
