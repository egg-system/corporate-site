<template>
  <div class="container">
    <div>
      <div class="title-area">
        <h1 class="title">
          代表メッセージ
        </h1>
      </div>

      <div class="container-main">
        <div class="profimg">
          <prof-img />
        </div>
        <div class="msgtxt">
          <msg-txt />
        </div>
      </div>


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
      </div>
    </div>
  </div>
</template>

<script>
import MsgTxt from '~/components/message/MsgTxt.vue'
import ProfImg from '~/components/message/ProfImg.vue'

export default {
  components: {
    MsgTxt,
    ProfImg
  }
}
</script>

<style scoped>
.title-area {
  padding: 5em 0 5em 0;
}

.title {
  font-size: 3em !important;
  color: #1f55a5 !important;
}

/* タブレット＆PC */
@media screen and (min-width: 768px) {
  .container-main {
    display: flex;
  }
}

@media screen and (max-width: 767px) {
  .title {
    font-size: 2.5em !important;
  }
}

.profimg {
  width: 40%;
}

.msgtxt {
  margin: 0 1.5em 1.5em 1.5em;
  text-align: left;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* タグレット対応 */
/* @media screen and (min-width:481px) and (max-width:780px){} */

/*
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
*/
</style>
