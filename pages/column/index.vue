<template>
  <div>
    <the-hero-title main-text="コラム" />
    <div class="column-list page-content">
      <the-column-list :columns="listData" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import axios from 'axios'
import { fetchListData } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheColumnList
  },

  asyncData() {
    return fetchListData('column')
  }
}
</script>

<style lang="scss" scoped>
.column-list {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
