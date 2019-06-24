#元テンプレート
<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-toolbar flat>
          <v-btn icon>
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>Albums</v-toolbar-title>
          <v-spacer/>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-subheader>May</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4>
              <img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" class="image" alt="lorem"
                   width="100%"
                   height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-subheader>June</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4>
              <img :src="`https://randomuser.me/api/portraits/women/${i + 5}.jpg`" class="image" alt="lorem"
                   width="100%"
                   height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-footer class="mt-5"/>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
