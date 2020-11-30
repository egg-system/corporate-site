<template>
  <section>
    <the-sub-header text="コンサルティングエンジニアは何を提供するのか？" />
    <section>
      <h3>提供価値</h3>
      <div class="columns">
        <div class="column is-6">
          <p>
            コンサルティングエンジニアとして提供する価値は、<span>「ITシステムを活用した売上拡大・業務効率化の実現」</span>です。
          </p>
          <p>
            システムとは"仕組み"のことを指します。<br>
            システム=ITとは限りません。<br>
            体制とプロセスを見直すことで生産性の高い仕組み（システム）を構築することが可能です。
          </p>
          <p>
            IT技術は目的達成のための手段でしかありません。
          </p>
          <p>
            そのため、ITシステムを活用しながら売上拡大・業務効率化を実現することが提供価値であり、コンサルティングエンジニアとしてのミッションです。
          </p>
        </div>
        <div class="column is-6">
          <img :src="consultingEngineerImage" >
        </div>
      </div>
    </section>
    <section>
      <h3>具体的な作業実績</h3>
      <the-service-performance />
    </section>
  </section>
</template>

<script>
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import consultingEngineerImage from '~/assets/about/consul-engineer-value.png'
import TheServicePerformance from '~/components/pages/service/consulting-engineer/TheServicePerformance.vue'

export default {
  components: { TheSubHeader, TheServicePerformance },
  data: () => ({ consultingEngineerImage })
}
</script>
