<template>
  <div class="columns">
    <div class="column is-two-fifths">
      <figure class="image">
        <img :src="representativeImage">
      </figure>
    </div>
    <div class="column">
      <h3 class="main-message is-4">
        真面目な頑張りが評価される社会へ
      </h3>
      <br>
      <p>
        私が最も尊敬する先輩と一緒に仕事をしたときのこと。<br>
        <br>
        一大プロジェクトを任されていたため、誰よりも真面目に、誰よりも一生懸命に仕事へ取り組み、実際に仕事へかけた時間も人一倍だった先輩が、関係者からの反発を受けてしまい、思った通りの成果へ結びつかなかったことがありました。先輩が悔しがる姿は今でも鮮明に覚えています。当時の私はどうすることもできない自分の無力さを感じると同時に「なぜ真面目に仕事へ取り組み、良い方向へ導く努力をしている人が報われないのだろうか」という疑問を感じていました。<br>
        <br>
        一方で、今振り返ると、真面目な人の邪魔をするような根本的に悪い人がいなかったことも事実です。<br>
        真面目な頑張りが報われない現実には原因があります。<br>
        <br>
        ①立場 　：会社での自分の立場を守ることを優先にしてしまう人が多い<br>
        ②不可視 ：『想い』や『頑張り』は目に見えにくく評価されにくい<br>
        <br>
        だから私は、ITシステムのプロフェッショナルとして立場に左右されずに良いものは良いと言い、『想い』や『頑張り』を可視化することで、システムエンジニアにとっても、事業者にとっても、真面目に頑張る人が評価される環境をつくります。<br>
        本来システムエンジニアという職業は高い専門性を持ち、企業にとって必要不可欠な存在です。その高い専門性を活かしITシステムを活用することで、企業の売上を上げることもコストを削減することも可能です。しかし、ITシステムはあくまでもツールであり、目的はクライアントの事業成長へ貢献することであり、さらには真面目な頑張りが評価される社会の実現です。このブレない考えを持って、クライアントにとってのビジネスパートナーとしてあり続けます。<br>
        <br>
        今後とも、末永くお付き合い頂ますよう、お願いいたします。<br>
        <br>
        株式会社エッグシステム
        <br>
        代表取締役 高橋 翼
      </p>
    </div>
  </div>
</template>

<script>
import representativeImage from '~/assets/company/company-tsubasa.jpg'

export default {
  data: () => ({
    representativeImage
  })
}
</script>

<style lang="scss" scoped>
.main-message {
  font-weight: normal;
  text-align: left;
  color: $black;
}
@media screen and (max-width: 600px) {
  .sp {
    display: none;
  }
}
</style>
