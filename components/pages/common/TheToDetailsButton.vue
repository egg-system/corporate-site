<template>
  <div class="btn-area">
    <div class="Heading__cta">
      <nuxt-link :to="to" class="next-button">
        <the-link-button />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import TheLinkButton from '~/components/pages/common/TheLinkButton.vue'

export default {
  components: { TheLinkButton },
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-area {
  display: flex;
  justify-content: flex-end;
}
.Heading__cta {
  width: 45%;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $lightgray;
  text-align: right;
}
.next-button {
  color: $black;
}
.back a {
  display: block;
  text-align: right;
  font-size: 14px;
  color: $black;
}
.back i {
  margin-right: 5px;
}
.back span {
  margin-left: 20px;
}
</style>
