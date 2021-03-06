<template>
  <div>
    <div class="flex center columns">
      <input-label class="column is-4" label="従業員数" />
      <input-box
        :text="text"
        class="column"
        label="例）100"
        @focus="focus"
        @blur="blur"
      />人
    </div>
    <div class="flex center columns">
      <div class="column is-4" />
      <div class="column align-left padding-0 relative under-textbox">
        <error-message v-if="requiredErrorFlg" message="未入力です。" />
        <error-message v-if="validationErrorFlg" message="半角数字で入力してください。" />
      </div>
    </div>
  </div>
</template>

<script>
import ErrorMessage from '~/components/atoms/ErrorMessage.vue'
import InputLabel from '~/components/atoms/InputLabel.vue'
import InputBox from '~/components/atoms/InputBox.vue'

export default {
  name: 'EmployeesInput',
  components: {
    ErrorMessage,
    InputLabel,
    InputBox
  },
  data: () => ({
    text: ''
  }),
  computed: {
    requiredErrorFlg: function() {
      return this.$store.state.simulator.requiredErrorFlg.employees
    },
    validationErrorFlg: function() {
      return this.$store.state.simulator.validationErrorFlg.employees
    }
  },
  methods: {
    blur(value) {
      if (this.required(value)) return
      if (this.validation(value)) return
      this.text = this.addFigure(value)
      this.$store.dispatch('simulator/commitEmployees', Number(value))
    },
    focus(value) {
      this.text = this.delFigure(value)
    },
    /**
     * 数値の3桁カンマ区切り
     * 入力値をカンマ区切りにして返却
     * [引数]   numVal: 入力数値
     * [返却値] String(): カンマ区切りされた文字列
     */
    addFigure(numVal) {
      // 空の場合そのまま返却
      if (numVal == '') {
        return ''
      }
      // 全角から半角へ変換し、既にカンマが入力されていたら事前に削除
      numVal = this.toHalfWidth(numVal)
        .replace(/,/g, '')
        .trim()
      // 数値でなければそのまま返却
      if (!/^[+|-]?(\d*)(\.\d+)?$/.test(numVal)) {
        return numVal
      }
      // 整数部分と小数部分に分割
      var numData = numVal.toString().split('.')
      // 整数部分を3桁カンマ区切りへ
      numData[0] = Number(numData[0])
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      // 小数部分と結合して返却
      return numData.join('.')
    },
    /**
     * カンマ外し
     * 入力値のカンマを取り除いて返却
     * [引数]   strVal: 半角でカンマ区切りされた数値
     * [返却値] String(): カンマを削除した数値
     */
    delFigure(strVal) {
      return strVal.replace(/,/g, '')
    },
    /**
     * 全角から半角への変革関数
     * 入力値の英数記号を半角変換して返却
     * [引数]   strVal: 入力値
     * [返却値] String(): 半角変換された文字列
     */
    toHalfWidth(strVal) {
      // 半角変換
      var halfVal = strVal.replace(/[！-～]/g, function(tmpStr) {
        // 文字コードをシフト
        return String.fromCharCode(tmpStr.charCodeAt(0) - 0xfee0)
      })
      return halfVal
    },
    validation(value) {
      var errorFlg = /[^0-9]+/.test(value)
      this.$store.dispatch('simulator/commitEmployeesValidationError', errorFlg)
      return errorFlg
    },
    required(value) {
      var errorFlg = value == ''
      this.$store.dispatch('simulator/commitEmployeesRequiredError', errorFlg)
    }
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}
.center {
  justify-content: center;
  align-items: center;
  margin: auto;
}
.padding-0 {
  padding: 0;
}
.relative {
  position: relative;
}
.under-textbox {
  bottom: 20px;
  left: 20px;
}
</style>
