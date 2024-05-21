---
title: 次のステップ
description: サーバーの起動が完了したら、サーバーを使いこなしてみましょう！
---

お疲れ様です！サーバーの起動が完了しました。サーバーが完璧に動作するために、確認することがあります。

## 設定

まず、設定を確認してください。多くの設定がありますが、その中にはゲームプレイを変更するものもあります。

- [バニラの構成 (server.properties)](https://ja.minecraft.wiki/w/Server.properties)
- [Bukkitの構成 (bukkit.yml) (英語)](https://bukkit.fandom.com/wiki/Bukkit.yml)
- [Spigotの構成 (spigot.yml) (英語)](https://www.spigotmc.org/wiki/spigot-configuration/)
- [Paperの構成 (paper.yml) (英語)](https://docs.papermc.io/paper/reference/paper-global-configuration)
- [Pufferfishの構成 (pufferfish.yml) (英語)](https://docs.pufferfish.host/setup/pufferfish-fork-configuration/)
- [Purpurの構成 (purpur.yml) (英語)](https://purpurmc.org/docs/purpur/configuration/)
- Ralesの構成は準備中です。(ゲームプレイを変更するものはありません)

## プラグイン

Ralesを使用する主な理由としては、プラグインだと思われます。プラグインは、様々なことができます。サーバーの管理を便利にしたり、ゲームプレイを変更するものがあります。プラグインの入手経路は、[Bukkit Plugins](https://dev.bukkit.org/bukkit-plugins)、[CurseForge](https://www.curseforge.com/Minecraft/bukkit-plugins)、[Modrinth](https://modrinth.com/plugins)、[Spigot Resources](https://www.spigotmc.org/resources/categories/spigot.4/)、[Hangar](https://hangar.papermc.io/)などがあります。中には、GitHubなどでプラグインを公開していることもあります。

:::danger
プラグインをインストールする際は、信頼したソースからのみインストールするようにしてください。プラグインはあなたのマシンにフルアクセスを与えます。プラグインの中には、悪意のあるプラグインがあることを理解してください。
:::

## ホワイトリスト

ホワイトリストは、追加したユーザーのみがサーバーに参加できる機能です。ホワイトリストを編集するには、``whitelist``コマンドを使用するか、``whitelist.json``を編集します。``whitelist on``を使用してホワイトリストを有効にし、``whitelist add <プレイヤー名>``でプレイヤーを追加します。

## 権限

権限とは、プレイヤーがサーバーでできることとできないことを制御することです。例えば、特定のコマンドを使用できるようにする、利用できないようにすることがあります。``op``コマンドを使用してフルアクセスを与えることもできますが、[LuckPerms](https://luckperms.net/)などでプレイヤーに付与する権限を変更することをおすすめします。(自分には``op``を与えることを推奨します)

:::caution
OP権限 (``op``コマンドのフルアクセス)では、サーバーを停止したり、チートを使用したりすることができます。OP権限に限らず権限が悪用されると、最悪ワールドが破壊されることもあります。権限の付与にはご注意ください。
:::

## バックアップ

前に説明したように、ワールドが破壊されることを予測して、サーバーのバックアップを保管することを推奨します。バックアップを保管すると、サーバーを以前の状態へ戻すことができます。バックアップについては、[こちら](/rales/updating/#1-%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AE%E3%83%90%E3%83%83%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97)をご覧ください。

## 最適化

Ralesは、元からパフォーマンスが最適がされています。ただし、サーバーをもっと最適化するには、[適切なフラグを付与した起動コマンド](/advanced-setup)や、[Paper最適化ガイド(英語、Ralesにも適用可能)](https://paper-chan.moe/paper-optimization/#Addendum)の手順を参考にすることで最適化できます。

## サーバーの公開

サーバーを公開するには、ポートを開放する必要があります。ポート開放とは、外部のインターネットからそのポート(ここではマインクラフトサーバー)にアクセスできるようにする必要があります。あなたのISP(インターネットのプロバイダー)では、ポート開放ができない可能性もあります。ポート開放に関しては、Googleで検索することを推奨します。

:::danger
ポートを開放すると、あなたのマシンへ外部のインターネットからアクセスできるようになります。もし、ポート開放の方法を誤ると、あなたのインターネットからあなたのマシンへ侵入されたりすることがあります。ポートを開放する際には、注意して開放してください。
:::

:::tip
もしポート開放が難しい場合は、[ngrok](https://ngrok.com/)や[Secure Share Net](https://gsht.io/)を使用することもできます。
:::
