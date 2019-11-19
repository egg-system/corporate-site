<template>
  <div>
    <the-triangle-up />
    <div class="mission">
      <p>mission</p>
      <p>
        株式会社エッグシステムでは、《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》の実現のために、ITシステムを活用します。
      </p><br>
      <p>
        現代社会では「自分の保身のために行動する人」が評価され、「献身的に行動する人」が正しい評価を得られない現状があります。
        しかし我々は、保身に走らず他人の利益のために献身的に行動することこそ、より良い社会を実現する一歩だと考えています。
      </p><br>
      <p>
        目の前の人、顧客、家族が「喜ぶこと」を自分の喜びと感じ、献身的に頑張る人たちが、正しく報われる（＝成果を得る）ことをミッションとしています。
      </p>
    </div>
    <the-triangle-down/>
  </div>
</template>

<script>
import TheTriangleUp from '~/components/pages/top/TheTriangleUp.vue'
import TheTriangleDown from '~/components/pages/top/TheTriangleDown.vue'

export default {
  components: {
    TheTriangleUp,
    TheTriangleDown
  }
}
</script>

<style lang="scss" scoped>
.mission {
  width: 80%;
  margin: 0 auto;
  font-weight: bold;
}
</style>
