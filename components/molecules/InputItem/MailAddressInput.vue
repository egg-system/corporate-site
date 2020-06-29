<template>
  <div class="flex center columns">
    <input-label class="column is-4" label="メールアドレス" />
    <input-box class="column" label="例）xxx@eggsystem.co.jp" @input="input" />
  </div>
</template>

<script>
import InputLabel from '~/components/atoms/InputLabel.vue'
import InputBox from '~/components/atoms/InputBox.vue'

export default {
  name: 'MailAdressInput',
  components: {
    InputLabel,
    InputBox
  },
  methods: {
    input(value) {
      this.$store.dispatch('simulator/commitMailAddress', value)
    }
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}
.center {
  justify-content: center;
  align-items: center;
}
</style>
