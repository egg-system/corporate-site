<template>
  <div>
    <the-hero-title main-text="コラム" />
    <div class="column-list page-content">
      <the-column-list :columns="columns" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import axios from 'axios'
const PAGE_NAME = 'column'
const API_VERSION = 'v1'
const microCmsUrl = `${
  process.env.microCmsApiDomain
}/${API_VERSION}/${PAGE_NAME}`

export default {
  components: {
    TheHeroTitle,
    TheColumnList
  },
  data() {
    return {}
  },
  async asyncData() {
    const { data } = await axios
      .get(microCmsUrl, {
        headers: { 'X-API-kEY': process.env.microCmsApiKey }
      })
      .catch(err => {
        return err.response
      })
    return {
      columns: data.contents
    }
  }
}
</script>

<style lang="scss" scoped>
.column-list {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
