<template>
  <v-flex xs12 class="promise">
    <v-card-text class="main">Promise</v-card-text>
    <v-card-text class="sub">お客さまとの６つの約束</v-card-text>
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
    }
  }
}
</script>


<style scoped>
.promise {
  margin-top: 20px;
}
.main {
  font-size: 30px;
}
.sub {
  margin-top: -20px;
  font-size: 15px;
}
</style>
