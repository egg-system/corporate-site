<template>
  <div class="center">
    <question class="margin-2" question="業種の分類を選択してください。" />
    <genre-buttons />
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
    genre: false,
    result: ''
  })
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
