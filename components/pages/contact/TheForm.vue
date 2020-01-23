<template>
  <div class="field contact-form">
    <label class="label">お名前(必須)</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="山田　太郎" value="">
      <span class="icon is-small is-left">
        <i class="fas fa-user" />
      </span>
    </div>

    <label class="label">会社名(個人の方は入力不要です)</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="株式会社〇〇" value="">
      <span class="icon is-small is-left">
        <i class="fas fa-building" />
      </span>
    </div>

    <label class="label">メールアドレス(必須)</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="mail@example.com" value="">
      <span class="icon is-small is-left">
        <i class="fas fa-envelope" />
      </span>
    </div>

    <label class="label">電話番号</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="number" placeholder="0123456789" value="">
      <span class="icon is-small is-left">
        <i class="fas fa-phone" />
      </span>
    </div>

    <label class="label">お問い合わせの種類(必須)</label>
    <div class="control">
      <label class="radio">
        <input type="radio" name="question" checked="checked">
        ホームページ・Webシステム開発
      </label><br>
      <label class="radio">
        <input type="radio" name="question">
        システムコンサルティング
      </label><br>
      <label class="radio">
        <input type="radio" name="question">
        サロン開業支援サービス
      </label><br>
      <label class="radio">
        <input type="radio" name="question">
        システムエンジニアコミュニティ
      </label><br>
      <label class="radio">
        <input type="radio" name="question">
        採用について
      </label><br>
      <label class="radio">
        <input type="radio" name="question">
        その他
      </label>
    </div>

    <label class="label">お問合わせ内容(必須)</label>
    <textarea class="textarea" placeholder="お問い合わせ内容" />

    <label class="label"><nuxt-link to="/privacy">個人情報のお取り扱い</nuxt-link>について同意していただけるお客様は、<br>[同意する]を選択して下さい。</label>
    <label class="checkbox check-center">
      <input type="checkbox">
      同意する
    </label>

    <div class="btn">
      <button class="button is-primary is-large is-fullwidth" @click="next()">送信</button>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    next() {
      console.log('next')
      this.$router.push('/contact/complete')
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  width: 60%;
  margin: 0 auto;
}
/* スマホの場合は幅を広くする */
@media screen and (max-width: 400px) {
  .contact-form {
    width: 95%;
    margin: 0 auto;
  }
}
.label {
  margin-top: 20px;
}
.check-center {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}
.btn {
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
