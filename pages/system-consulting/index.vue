<template>
  <div class="container">
    <div class="main-content">
      <div class="title-area">
        <h1 class="title">
          システムコンサルティング
        </h1>
      </div>

      <div class="container-main">
        <div class="msgtxt">
          <three-point-txt />
        </div>
        <div class="profimg">
          <three-point-img />
        </div>
      </div>

      <br>

      <div class="container-client">
        <client-txt />
      </div>

      <br><br>

      <div class="container-clinic">
        <sys-clinic-txt />
      </div>

      <br><hr><br>

      <div id="plan" class="container-plan">
        <plan-txt />
      </div>

      <br><hr><br>

      <div id="promote" class="container-promote">
        <promote-txt />
      </div>

      <br><hr><br>

      <div id="manage" class="container-manage">
        <manage-txt />
      </div>

      <br><hr><br>

      <div class="container-contact">
        <contact-txt />
      </div>

    </div>

  </div>
</template>

<script>
import ThreePointImg from '~/components/system-consulting/ThreePointImg.vue'
import ThreePointTxt from '~/components/system-consulting/ThreePointTxt.vue'
import ClientTxt from '~/components/system-consulting/ClientTxt.vue'
import SysClinicTxt from '~/components/system-consulting/SysClinicTxt.vue'
import PlanTxt from '~/components/system-consulting/PlanTxt.vue'
import PromoteTxt from '~/components/system-consulting/PromoteTxt.vue'
import ManageTxt from '~/components/system-consulting/ManageTxt.vue'
import ContactTxt from '~/components/system-consulting/ContactTxt.vue'

export default {
  components: {
    ThreePointTxt,
    ThreePointImg,
    ClientTxt,
    SysClinicTxt,
    PlanTxt,
    PromoteTxt,
    ManageTxt,
    ContactTxt
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
.profimg {
  width: 40%;
}

.msgtxt {
  margin: 0 1.5em 1.5em 0;
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
.main-content {
  width: 100%;
}

/* タブレット＆PC */
@media screen and (min-width: 768px) {
  .container-main {
    display: flex;
    padding-left: 20px;
  }
}

/* タブレット対応 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    /*    width: 1000px !important;*/
  }
  .msgtxt {
    margin-left: 80px;
  }
  .container-client {
    padding: 0 45px;
  }
  .container-clinic {
    padding-left: 100px;
    padding-right: 30px;
  }
  .main {
    width: 1100px;
    margin-left: 60px;
  }
}

/* スマホ対応 */
@media screen and (max-width: 767px) {
  .title {
    font-size: 2.5em !important;
  }
  .main-content {
  }
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
