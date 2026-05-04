---
title: "ココメイト"
description: "疲労・睡眠・移動時間を考慮して、無理のない予定管理を支援するモバイルアプリ"
publishDate: 2026-03-22
tags:
  - React Native
  - Expo
  - TypeScript
  - Firebase
  - Google Calendar API
  - Vertex AI
  - Google Maps Platform
img: "../../assets/work/cocomate-appicon.png"
img_alt: "ココメイトのアイコン"
---

## 概要

ココメイトは、予定管理に「疲労」「睡眠」「移動」の観点を加え、無理のないスケジュール作成と心のゆとりを支援するモバイルアプリです。

42 Tokyo の同期4人でチームを組み、GDGoC Hackathon 2026 に出場して開発しました。

一般的なカレンダーアプリでは予定の時間管理が中心ですが、ココメイトでは予定ごとの疲労度、移動時間、睡眠状況をもとに、その日のエネルギー残量を可視化します。さらに、タスクを追加したいときには、身体的・時間的な負担を考慮して最適な時間帯を提案します。

GitHub Link: https://github.com/irohamo/SchedulingAssistant/

## 主な機能

- 今日の体力を 0〜100% のエネルギー残量として表示
- 疲労・睡眠・移動時間を考慮した予定候補のレコメンド
- 月・週・日ビューによるカレンダー表示
- 疲労ヒートマップによる忙しさの可視化
- Google Calendar との双方向同期
- Google Routes API / Apple MapKit を用いた移動時間の自動算出
- 予定後・1日の終わりの疲労フィードバック
- フィードバック履歴を用いた疲労予測の改善
- Google Places API による場所オートコンプリート
- AsyncStorage によるオフライン閲覧対応
- 予定リマインド、フィードバック通知、睡眠アラート、エネルギー不足予測アラート

## 担当

4人チームでの開発において、主にアプリの中核ロジックと外部サービス連携を担当しました。

Firebase Authentication / Google Sign-In による認証、Firestore と AsyncStorage を組み合わせたデータ永続化、Google Calendar API との予定同期機能を実装しました。また、疲労・睡眠・移動時間を考慮して予定候補を提示するレコメンドエンジンを設計・実装し、候補時間のスコアリング、エネルギー推移の表示、複数日探索、予定保存導線まで担当しました。

さらに、Google Routes API / Apple MapKit を用いた移動時間算出、Expo Notifications による予定リマインド・フィードバック通知・睡眠アラート、Vertex AI / Gemini を用いたタグ提案・文言生成機能も実装しました。チーム開発面では、PRテンプレートやDiscord通知など、レビュー・連携のための開発基盤整備も担当しました。

## 技術スタック

### Mobile

- React Native
- Expo
- Expo Router
- TypeScript
- React Native Reanimated
- React Native Gesture Handler
- AsyncStorage
- Expo Notifications

### Backend / Infrastructure

- Firebase Authentication
- Cloud Firestore
- Firebase Cloud Functions
- Firebase Admin SDK
- Node.js 20
- GitHub Actions

### External APIs / AI

- Google Sign-In
- Google Calendar API
- Google Routes API
- Google Places API
- Google Geocoding API
- Apple MapKit
- Vertex AI Embeddings
- Gemini 2.5 Flash Lite

## 工夫した点

### 疲労・移動・睡眠を統合したスケジューリング

予定の開始時刻や終了時刻だけでなく、予定カテゴリ、所要時間、前後の移動時間、睡眠状況を考慮して、ユーザーのエネルギー推移を計算する仕組みを実装しました。

予定追加時には、候補時間ごとのエネルギー推移をシミュレーションし、「おすすめ」「安定ペース」「高負荷」といった形で、ユーザーが直感的に判断できるUIを設計しました。

### Google Calendar との効率的な同期

Google Calendar API を利用して、予定の読み取り・作成・更新・削除に対応しました。同期処理では `syncToken` を利用し、毎回すべての予定を取得するのではなく、差分だけを取得する設計にしました。

### AIを用いた予定タグの自動提案

Vertex AI を活用し、イベントタイトルから予定タグを自動提案する機能を実装しました。また、`gemini-embedding-001` によるベクトル埋め込みを使い、既存タグとの類似度を計算することで、意味的に近いタグの重複を防ぐ仕組みを作りました。

### チーム開発を支える仕組み

短期間のハッカソン開発でもレビューと連携を回しやすくするため、PRテンプレートやDiscord通知を整備しました。機能実装だけでなく、チームが素早く意思決定しながら開発できる環境づくりも行いました。

## 成果

予定を「時間」だけで管理するのではなく、「疲労」や「移動負担」まで含めて扱うことで、ユーザーが無理のないスケジュールを立てられる体験を目指しました。

技術面では、React Native / Expo によるモバイル開発、Firebase を用いたバックエンド構築、Google Calendar・Maps・Vertex AI など複数の Google 技術の統合、そして短期間でのチーム開発を経験しました。