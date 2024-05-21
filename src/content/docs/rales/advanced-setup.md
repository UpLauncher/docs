---
title: 詳細なセットアップ
description: Ralesの詳細なインストール方法です。この方法で、Ralesが高速になる場合があります。
---

このページでは、Ralesの詳細なインストール方法を紹介します。

## Javaの起動オプションの構成

基本の起動コマンド:
```
java -jar rales.jar
```

おすすめの起動オプション: (Aikarの起動オプション)
- 最大メモリと最小メモリ: 6GiB (6144MB)
- ファイル名: rales.jar
```
java -Xmx6144M -Xms6144M -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+ParallelRefProcEnabled -XX:+PerfDisableSharedMem -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1HeapRegionSize=8M -XX:G1HeapWastePercent=5 -XX:G1MaxNewSizePercent=40 -XX:G1MixedGCCountTarget=4 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1NewSizePercent=30 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:G1ReservePercent=20 -XX:InitiatingHeapOccupancyPercent=15 -XX:MaxGCPauseMillis=200 -XX:MaxTenuringThreshold=1 -XX:SurvivorRatio=32 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar rales.jar nogui
```

#### -Xmx
例:
```
java -Xmx4G -jar rales.jar
```

Xmxでは、サーバーが利用できるメモリの最大容量を指定します。

4GBの場合は、-Xmx4G・-Xmx4000Mと指定します。

#### -Xms
例:
```
java -Xms2G -jar rales.jar
```

Xmsオプションは、サーバーが利用できるメモリの最小サイズおよび初期サイズです。

2GBの場合は、-Xms2G・-Xms2000Mと指定します。

#### -jar <ファイル名>.jar
例:
```
java -jar rales.jar
```

jarオプションは、サーバーの起動ファイル(jar)の名前を指定します。