<template>
  <v-flex xs12 class="promise">
    <v-card-text class="main">{{ main }}</v-card-text>
    <v-card-text class="sub">{{ sub }}</v-card-text>
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
  margin-top: 50px;
}
.main {
  font-size: 50px;
}
.sub {
  margin-top: -10px;
  font-size: 15px;
}
</style>
