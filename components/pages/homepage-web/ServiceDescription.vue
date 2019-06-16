<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-sheet color="red lighten-3">
        ランニング費用
      </v-sheet>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="left">¥20,000〜／月</v-card-text>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="right">別途ご契約が必要</v-card-text>
    </v-flex>

    <v-flex xs12>
      <v-sheet color="red lighten-3">
        制作期間（目安）
      </v-sheet>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="left">１〜２ヶ月</v-card-text>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="right">２〜３ヶ月</v-card-text>
    </v-flex>

    <v-flex xs12>
      <v-sheet color="red lighten-3">
        企画・設計
      </v-sheet>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="left">
        ◎<br>
        ターゲットとなる顧客層に合わせた
        コンセプト作りから対応
      </v-card-text>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="right">
        ◎<br>
        ターゲットとなる顧客層に合わせた
        コンセプト作りから対応
      </v-card-text>
    </v-flex>

    <v-flex xs12>
      <v-sheet color="red lighten-3">
        環境準備(ドメイン・サーバ)
      </v-sheet>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="left">
        ◎<br>
        全て当社が提供
      </v-card-text>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="right">
        △<br>
        弊社サポートの元でお客さまにてご準備頂く
      </v-card-text>
    </v-flex>

    <v-flex xs12>
      <v-sheet color="red lighten-3">
        制作
      </v-sheet>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="left">
        ◎<br>
        デザインから制作まで全て当社が対応
      </v-card-text>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="right">
        ◎<br>
        デザインから制作まで全て当社が対応
      </v-card-text>
    </v-flex>

    <v-flex xs12>
      <v-sheet color="red lighten-3">
        運用保守
      </v-sheet>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="left">
        ◎<br>
        月額費用内でページ修正やお問合わせに対応
      </v-card-text>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="right">
        △<br>
        別途ご契約が必要
      </v-card-text>
    </v-flex>

    <v-flex xs12>
      <v-sheet color="red lighten-3">
        その他
      </v-sheet>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="left">
        契約終了時にホームページに関するデータ一式をお渡しすることも可能です。詳しくはご相談ください。
      </v-card-text>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="right">
        ホームページに関するデータ一式はお客さまへ納品いたします。運用保守の契約をご希望の方は個別にご相談ください。
      </v-card-text>
    </v-flex>

    <v-flex xs12>
      <v-sheet color="red lighten-3">
        ご契約期間
      </v-sheet>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="left">
        最低契約期間：1年間<br>2年目以降：6ヶ月毎に更新
      </v-card-text>
    </v-flex>
    <v-flex xs6>
      <v-card-text class="right">
        ホームページのデータ一式納品まで。
      </v-card-text>
    </v-flex>

  </v-layout>
</template>

<script>
export default {
  props: {
    main: {
      type: String,
      default: ''
    },
    sub: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
.main {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 20px;
}
.sub {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 15px;
  text-align: left;
}
.price {
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: -30px;
  font-size: 20px;
}
.iconImg {
  width: 100px;
  margin: 0 auto;
}
.left,
.right {
  width: 90%;
}
</style>
