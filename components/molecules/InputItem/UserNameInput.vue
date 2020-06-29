<template>
  <div class="flex center columns">
    <input-label class="column is-4" label="氏名" />
    <input-box class="column" label="例）システム太郎" @input="input" />
  </div>
</template>

<script>
import InputLabel from '~/components/atoms/InputLabel.vue'
import InputBox from '~/components/atoms/InputBox.vue'

export default {
  name: 'NameInput',
  components: {
    InputLabel,
    InputBox
  },
  methods: {
    input(value) {
      this.$store.dispatch('simulator/commitUserName', value)
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
