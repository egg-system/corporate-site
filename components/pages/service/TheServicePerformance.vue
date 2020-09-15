<template>
  <div class="service-performance-area">
    <div class="service-performance">
      <div class="service-performance-title">
        CIO代行・補佐業務
      </div>
      <ul>
        <li>IT中長期計画策定</li>
        <li>IT投資計画策定</li>
      </ul>
    </div>
    <div class="service-performance">
      <div class="service-performance-title">
        情報システム部門の運営支援
      </div>
      <ul>
        <li>予算計画の策定</li>
        <li>予算管理</li>
        <li>新システム導入計画策定</li>
        <li>経営層向け会議資料作成</li>
        <li>社内セキュリティ教育</li>
        <li>リモートワーク環境の整備・構築</li>
        <li>システム利用マニュアル作成</li>
        <li>システムベンダーとの契約書確認</li>
        <li>システムベンダーの納品物レビュー</li>
        <li>オフィス移転検討及び移転後のネットワーク全体設計</li>
      </ul>
    </div>
    <div class="service-performance">
      <div class="service-performance-title">
        プロジェクトマネジメントオフィス（PMO）の運営
      </div>
      <ul>
        <li>プロジェクト計画書策定</li>
        <li>品質／コスト／進捗管理</li>
        <li>課題／リスク管理</li>
        <li>定例会や検討会のファシリテート</li>
      </ul>
    </div>
    <div class="service-performance">
      <div class="service-performance-title">
        新システム導入プロジェクト支援
      </div>
      <ul>
        <li>現状の業務フロー作成</li>
        <li>改善後の業務フロー作成</li>
        <li>システムに対する要望の整理</li>
        <li>要望書の作成</li>
        <li>ソリューションやシステムベンダーの選定</li>
        <li>システムベンダーと折衝</li>
        <li>投資対効果の検討</li>
        <li>ベンダーの見積評価</li>
        <li>RFP（提案依頼書）の作成</li>
        <li>要件定義支援</li>
      </ul>
    </div>
    <div class="service-performance">
      <div class="service-performance-title">
        システム開発
      </div>
      <ul>
        <li>作業効率化のための簡易ツール開発</li>
        <li>現行システムの解析</li>
        <li>API開発</li>
      </ul>
      <div class="service-performance-notice">
        <span>※開発規模によっては別途お見積りとさせて頂きます。</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service-performance-area {
  margin: 3rem 0;
  display: flex;
  flex-flow: column wrap;
  @media screen and (min-width: 1030px) {
    margin: 3rem;
    height: 48rem;
  }
}

.service-performance {
  margin-bottom: 3rem;

  &-title {
    width: fit-content;
    border-bottom: 1px solid;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1030px) {
    &-notice {
      margin-left: 3rem;
    }

    ul {
      margin-left: 4rem;
    }
  }

  span {
    font-size: 0.8rem;
  }
}
</style>
