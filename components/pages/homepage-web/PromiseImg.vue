<template>
  <v-flex xs4>
    <v-card-text class="px-0">{{ title }}</v-card-text>
    <v-img :src="img" class="iconImg" />
    <v-card-text class="px-0">{{ description }}</v-card-text>
  </v-flex>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
.iconImg {
  width: 100px;
  margin: 0 auto;
}
</style>
