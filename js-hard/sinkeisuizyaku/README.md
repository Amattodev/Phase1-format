# カードの初期化

カードが 8 枚セットされている
全て青色
シャッフルの乱数が隠されている（ダステンフェルドの手法）
https://qiita.com/pure-adachi/items/77fdf665ff6e5ea22128

# クリックするとカードをめくる

カードをクリックすると、数字が表示される

## 2 枚めくられた状態でジャッジ

2 枚の数字が一致していれば、背景が緑のカードとなる
一致していなかったら、再び青色のカードへ

# 全てのカードがめくられている状態となったら、終了アラート（Next）

# 修正点

MatchCount するのではなく、MathedCards で管理するか