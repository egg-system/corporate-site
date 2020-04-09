<template>
  <div>
    <the-hero-title main-text="最近の活動・コラム" />
    <div class="column-list page-content">
      <nav class="tabbed-nav">
        <ul class="tab-list">
          <li class="tab-list-item current-cat"> 
            <nuxt-link to="/column">
              <i class=""/>すべて
            </nuxt-link>
          </li>
          <li class="tab-list-item current-cat"> 
            <nuxt-link to="/column">
              <i class=""/>産地だより
            </nuxt-link>
          </li>
          <li class="tab-list-item current-cat"> 
            <nuxt-link to="/column">
              <i class=""/>スープのひみつ
            </nuxt-link>
          </li>
          <li class="tab-list-item current-cat"> 
            <nuxt-link to="/column">
              <i class=""/>お店のひみつ
            </nuxt-link>
          </li>
          <li class="tab-list-item current-cat"> 
            <nuxt-link to="/column">
              <i class=""/>取り組み
            </nuxt-link>
          </li>
          <li class="tab-list-item current-cat"> 
            <nuxt-link to="/column">
              <i class=""/>ワークショップ
            </nuxt-link>
          </li>
          <li class="tab-list-item current-cat"> 
            <nuxt-link to="/column">
              <i class=""/>Soup Friends
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <the-column-list :columns="listData" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import { fetchCmsListDataColumn } from '~/lib/cms'

export default {
  components: {
    TheHeroTitle,
    TheColumnList
  },
  head() {
    return {
      title: '最近の活動・コラム',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '最近の活動・コラム, eggsystem, 株式会社エッグシステム'
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '最近の活動・コラム'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '株式会社エッグシステム コラム'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/column'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://eggsystem.co.jp/logo.png'
        }
      ]
    }
  },

  asyncData() {
    return fetchCmsListDataColumn(23)
  }
}
</script>

<style lang="scss" scoped>
.column-list {
  margin-top: 5%;
  margin-bottom: 5%;
}
.column-item {
  padding-top: 2.5rem;
}
nav {
  display: block;
}
.tab-list {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: flex-start;
  overflow-x: auto;
  width: 100%;
  margin: 0;
  padding: 0.5rem 0;
  list-style-type: none;
  font-size: 1rem;
}
.tab-list li {
  background-image: linear-gradient(to top, #ccc 1px, transparent 1px);
  background-repeat: no-repeat;
}
.tab-list li {
  outline: 0;
  position: relative;
  z-index: 0;
  display: block;
  padding: 0.5rem;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  color: currentColor;
  text-decoration: none;
  white-space: nowrap;
  outline-offset: -0.7rem;
}
.tab-list li a:after {
  content: '';
  position: absolute;
  right: 0.5rem;
  bottom: 0;
  left: 0.5rem;
  height: 2px;
  background-color: $darkbrown;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.tab-list:after {
  content: '';
  flex: 1 1 auto;
  height: 1px;
  background-image: linear-gradient(to top, #ccc 1px, transparent 1px);
  background-repeat: no-repeat;
}
ul {
  list-style: none;
}
@media (min-width: 48em) {
  .tab-list li {
    padding-left: 2.5rem;
  }
}
</style>
