<template>
  <div class="btn">
    <v-btn outlined color="#1f55a5" large @click="go()">事例はこちら</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.btn {
  width: 100%;
}
</style>
