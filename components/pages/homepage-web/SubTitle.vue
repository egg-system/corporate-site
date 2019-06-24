<template>
  <v-flex>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs3>
        <v-card-text class="main">{{ main }}</v-card-text>
      </v-flex>
      <v-flex xs9>
        <v-card-text class="sub">{{ sub }}</v-card-text>
      </v-flex>
    </v-layout>
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
.main {
  font-size: 20px;
  color: white;
}
.sub {
  font-size: 15px;
  color: white;
}
</style>
