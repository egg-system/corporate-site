<template>
  <div class="service-performance-area">
    <div class="service-performance">
      <div class="service-performance-title">
        作業実績
      </div>
      <ul>
        <li>現状調査（ITシステム環境や業務プロセス）</li>
        <li>IT全般統制への対応及び評価実施</li>
        <li>全社的なIT統制への対応及び評価実施</li>
        <li>情報システム概要書の作成</li>
        <li>3点セット（業務記述書・業務フロー図・RCM）の作成</li>
        <li>情報セキュリティポリシー作成</li>
        <li>ITシステムに関する各種規程と運用手順書の作成</li>
        <li>監査法人への回答作成</li>
        <li>監査法人との打ち合わせ同席</li>
        <li>社員への教育、周知</li>
        <li>改善策の立案および支援実施</li>
      </ul>
    </div>
    <div class="service-performance">
      <div class="service-performance-title">
        成果物（例）
      </div>
      <ul>
        <li>情報システムおよびセキュリティ基本方針</li>
        <li>情報セキュリティ方針</li>
        <li>
          各種規程
          <div v-if="$device.isDesktop" class="service-regulations">
            <ul>
              <li>人的管理規定</li>
              <li>監査規程</li>
              <li>システム変更管理規定</li>
              <li>システム管理規定</li>
              <li>スマートデバイス利用規定</li>
              <li>セキュリティインシデント報告規定</li>
              <li>コンプライアンス規定</li>
            </ul>
            <ul>
              <li>外部委託先管理規定</li>
              <li>物理的管理規定</li>
              <li>システム開発規定</li>
              <li>システム利用規定</li>
              <li>SNS利用規定</li>
            </ul>
          </div>
          <div v-else class="service-regulations">
            <ul>
              <li>人的管理規定</li>
              <li>外部委託先管理規定</li>
              <li>監査規程</li>
              <li>物理的管理規定</li>
              <li>システム変更管理規定</li>
              <li>システム開発規定</li>
              <li>システム管理規定</li>
              <li>システム利用規定</li>
              <li>スマートデバイス利用規定</li>
              <li>SNS利用規定</li>
              <li>セキュリティインシデント報告規定</li>
              <li>コンプライアンス規定</li>
            </ul>
          </div>
        </li>
        <li>上記規定に基づく各種運用手順書</li>
        <li>3点セット（フローチャート、業務記述書、RCM）</li>
        <li>IT統制の評価結果</li>
        <li>改善提案資料</li>
      </ul>
      <div class="service-performance-notice">
        <span>※その他必要に応じて資料を作成いたします。</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/service/scss/service-performance.scss';

.service-performance {
  .service-regulations {
    font-size: 0.8rem;

    @media screen and (min-width: 1024px) {
      display: flex;
    }

    ul {
      list-style: '-';
      margin: 0;
    }
  }
}

.service-performance-area {
  @media screen and (min-width: 1024px) {
    height: 32rem !important;
  }
}
</style>
