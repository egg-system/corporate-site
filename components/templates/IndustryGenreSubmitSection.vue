<template>
  <div class="center">
    <question class="margin-2" question="業種の分類を選択してください" />
    <genre-buttons @seizou="seizou" @hiseizou="hiseizou"/>
  </div>
</template>

<script>
import Question from '~/components/atoms/Question.vue'
import GenreButtons from '~/components/molecules/GenreButtons.vue'

export default {
  name: 'IndustryGenreSubmitSection',
  components: {
    Question,
    GenreButtons
  },
  data: () => ({
    genre: false
  }),
  methods: {
    seizou() {
      this.$parent.simulationInfo.genre = '製造業'
      this.next()
    },
    hiseizou() {
      this.$parent.simulationInfo.genre = '非製造業'
      this.next()
    },
    next() {
      this.$parent.activeFlg.genre = false
      this.$parent.activeFlg.industry = true
    }
  }
}
</script>
<style lang="scss" scoped>
.inactive {
  display: none;
}
.center {
  justify-content: center;
  align-items: center;
}
.flex {
  display: flex;
}
.margin-2 {
  margin: 2rem;
}
.width-8 {
  width: 90%;
  margin: auto;
}
</style>
