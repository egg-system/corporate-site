<template>
  <v-app-bar :hide-on-scroll="hideOnScroll"
             scroll-target="container">
    <v-app-bar-nav-icon/>
    <v-toolbar-title class="blue-grey--text font-weight-bold display-1">EGG SYSTEM</v-toolbar-title>

    <v-spacer/>

    <the-menu-list/>
  </v-app-bar>
</template>

<script>
import TheMenuList from '~/components/common/TheMenuList.vue'

export default {
  components: {
    TheMenuList
  }
}
</script>

<style scoped>
.egg-common-header {
  /* display: flex;
  justify-content: space-around; */
  border-bottom: 1px solid #e3e3e3;
  padding-top: 10px;
  padding-bottom: 10px;
  position: sticky;
  top: 0;
  z-index: 9997;
  background: #fff;
  width: 100%;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  color: #35495e;
}
.header-link .button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.header-link .button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.header-link .button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.header-link .button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
