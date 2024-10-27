# techbookfest17-frontend-observability-sample

このリポジトリは、フロントエンドのオブザーバビリティ（Observability）を学ぶためのサンプルアプリケーションです。技術書典17にて公開されたもので、特にNew Relicを活用したパフォーマンスモニタリングやエラーログ、トレース収集の実装方法を紹介しています。

## 概要

このアプリケーションは、New Relicを通じて、フロントエンドアプリケーションの観測性を高め、ユーザーエクスペリエンス向上のためのデータを収集する方法をデモします。以下の機能により、アプリケーションのリアルタイム監視とデバッグが可能です。

- パフォーマンスモニタリング
- エラーロギング
- トレース収集

## インストール

プロジェクトをローカルでセットアップし、New Relicでの監視を有効にするには、以下の手順を実行してください。

### 前提条件

- Node.js がインストールされていること。
- New Relicアカウント（必要に応じて無料で作成可能）

### 手順

1. New Relic Browserエージェントのインストールに必要なJavaScriptスニペットを作成

New Relic Browserでの計測に必要なJavaScriptスニペットを作成します。詳細は[公式ドキュメント](https://docs.newrelic.com/docs/browser/browser-monitoring/installation/install-browser-monitoring-agent/)を参照してください。

2. Session replay、Session traces、Distributed tracingの取得を有効化

Browser内の「Application settings」を開きSession replay、Session traces、Distributed tracingを有効化する。

有効化するとJavaScriptスニペットが更新されるので、新しいスニペットをコピーして控えておく。

3. リポジトリをクローン

```
git clone https://github.com/your-username/techbookfest17-frontend-observability-sample.git
cd techbookfest17-frontend-observability-sample
```

4. New Relic Browserエージェントのインストール

New Relicの管理画面で生成したJavaScriptスニペットを、[public/index.html](public/index.html)内の `<head>` タグに貼り付ける。

5.	必要なパッケージをインストール

```
npm install
```

6. アプリケーションを起動

```
npm start
```

## 使用方法

ブラウザで http://localhost:3000 にアクセスすることでアプリケーションの動作を確認することが出来ます。
