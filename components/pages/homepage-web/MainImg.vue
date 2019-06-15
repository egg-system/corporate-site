<template>
  <v-flex xs6>
    <nuxt-link :to="linkUrl">
      <v-img :src="imgUrl">
        <v-layout align-center justify-center column fill-height>
          <div class="imgTitle">{{ imgTitle }}</div>
          <div class="imgTitle">{{ imgSubTitle }}</div>
        </v-layout>
      </v-img>
    </nuxt-link>
  </v-flex>
</template>


<script>
export default {
  props: {
    linkUrl: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },
    imgTitle: {
      type: String,
      default: ''
    },
    imgSubTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.imgTitle {
  color: white;
}
a {
  text-decoration: none;
}
</style>
