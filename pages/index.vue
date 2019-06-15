<template>
  <div class="container">
    <div>
<<<<<<< HEAD
      <logo/>
      <h1 class="title">EGG SYSTEM</h1>
      <h2 class="subtitle">中小企業に向けたシステムコンサルティング</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Document</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--green">Github</a>
=======
      <logo />
      <h1 class="title">
        corporate-hp
      </h1>
      <h2 class="subtitle">
        My terrific Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
>>>>>>> b41ccfb6ceb5ef8a779e4a28027ef930b6eed28a
      </div>
    </div>
  </div>
</template>


<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
