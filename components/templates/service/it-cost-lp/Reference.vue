<template>
  <div class="reference text-center">
    <div class="text-bold">『信頼性のあるデータを使用』<br></div>
    <message message="<br>当ITコストシミュレーションでは、<br>経済産業省が公表している「IT関連統計」のデータに基づき計算しています。" />
    <div class="flex">
      <description message="※出典：経済産業省　IT関連統計"/>
      <description
        message="<a href='https://www.meti.go.jp/policy/it_policy/statistics/index.html' target='_blank' class='word-break'>https://www.meti.go.jp/policy/it_policy/statistics/index.html</a>"
      />
    </div>
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
.margin-bottom-3rem {
  margin-bottom: 2rem;
}
.text-bold {
  font-size: 1.75em;
}
</style>
