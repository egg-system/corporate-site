<template>
  <div>
    <div class="columns is-multiline">
      <div v-for="(item, i) in homePage" :key="i" class="column is-full">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4 center-text">{{ item.title }}</p>
              </div>
            </div>
            <div class="content" v-html="item.content"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    homePage: [
      {
        title: '①圧倒的当事者意識',
        content:
          '何事も常に自分ごととして捉え、圧倒的な当事者意識で「どうやったらできるか」を考えて行動します。<br>何よりもまずは気持ちが大事、次に行動。クライアントから「そこまでやってくれたんだ！」と言ってもらえる状態を目指します。'
      },
      {
        title: '②目の前の人を大事にする',
        content:
          'まだ見ぬ1万人よりも、目の前の10人を大事に行動します。目の前の相手を大事にできずして、その先の人大事にできないという考え方です。<br>「相手を大事にする」というのは、一緒に仕事をする相手に対して感謝の気持ちは言葉で示す、相手の立場になって考えて行動する、といった当たり前のことを当たり前に行うということです。'
      },
      {
        title: '③和衷協同',
        content:
          '和衷協同（わちゅうきょうどう）とは、心を同じくして共に力を合わせ、仕事や作業に当たるという意味です。<br>人には得意・不得意があって当たり前なので、自分のスキルを最大限に活かし、不得意なところは相互で補完し、助け合いながら行動します。'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.value-word {
  text-align: center;
  color: $blue;
}
.card {
  border-radius: 20px;
}
.title {
  color: $blue;
}
</style>
