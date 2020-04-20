<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        COPYRIGHT © EGG SYSTEM,Inc. All rights reserved.
      </p>
      <nuxt-link to="/privacy">
        <p class="privacy">
          プライバシーポリシー
        </p>
      </nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.footer p {
  color: $white;
}
.privacy {
  font-size: 10px;
}
</style>
