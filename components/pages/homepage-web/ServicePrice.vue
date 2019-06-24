<template>
  <v-flex xs6>
    <v-card-text class="px-0 main">{{ main }}</v-card-text>
    <v-img :src="img" class="iconImg" />
    <v-card-text class="">初期費用</v-card-text>
    <v-card-text class="px-0 price">{{ price }}</v-card-text>
    <v-card-text class="px-0 sub">{{ sub }}</v-card-text>
  </v-flex>
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
</style>
