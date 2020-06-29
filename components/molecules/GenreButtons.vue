<template>
  <div class="center flex">
    <circle-button class="margin-3" label="製造業" @genre="seizou"/>
    <circle-button class="margin-3" label="非製造業" @genre="hiseizou"/>
  </div>
</template>

<script>
import CircleButton from '~/components/atoms/CircleButton.vue'

export default {
  name: 'GenreButtons',
  components: {
    CircleButton
  },
  methods: {
    seizou() {
      this.$store.dispatch('simulator/commitGenre', 'seizou')
      this.$store.dispatch('simulator/toIndustry')
    },
    hiseizou() {
      this.$store.dispatch('simulator/commitGenre', 'hiseizou')
      this.$store.dispatch('simulator/toIndustry')
    }
  }
}
</script>
<style lang="scss" scoped>
.center {
  justify-content: center;
  align-items: center;
}
.flex {
  display: flex;
}
.margin-3 {
  margin: 3rem;
}
</style>
