<template>
  <div class="reference text-center">
    <message message="当ITコストシミュレーションでは、<br>経済産業省が公表している「IT関連統計」のデータに基づき計算しているため<br>安心してご利用頂けます。" />
    <description
      message="※出典：経済産業省　IT関連統計　<a href='https://www.meti.go.jp/policy/it_policy/statistics/index.html'>https://www.meti.go.jp/policy/it_policy/statistics/index.html</a>"
    />
  </div>
</template>

<script>
import Message from '~/components/atoms/message/Message.vue'
import Description from '~/components/atoms/message/Description.vue'

export default {
  name: 'Reference',
  components: {
    Message,
    Description
  }
}
</script>
<style lang="scss" scoped>
.reference {
  padding: 4rem 0;
}
.text-center {
  text-align: center;
}
</style>
