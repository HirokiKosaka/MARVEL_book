# MARVEL_book
MARVEL APIを使用し、すべてのマーベルキャラクターが表示される図鑑を作成しました。
ただ、APIの使用上、1回で１００キャラクターまでしか表示できないのでボタンを押すと次の１００キャラクターを表示される仕様にしています。

MARVEL APIの使用が難解で苦労しました。
・APIをハッシュ化しないと使用できない
まず、APIを使用するのにハッシュ化をしなくてはいけなく、調べながら進みました。ハッシュ化にはCryptoJSを使用しています。

・dataの中に画像のURLに拡張子が入っていない
thumbnail
extension
"jpg"
path
"http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784"
上記のようにthumbnailの中に画像のURLがありますが、このURLだけで画像を表示させることはできず、extensionの中の拡張子をstringで追加しないといけない仕様になっています。
extensionは、見たかぎり、jpg png gifの3つがあります。
URL自体をforEachで取り出し、if文でextensionの中身がjpgのときはURL末尾にjpgを付与するように、pngの時はpng、gifの時はgifをくっつけるようにしています。


このプロジェクトを通して、
・配列の中身を理解すること
・map関数の使い方
・forEachの使い方
・非同期処理
についての理解が以前より深まった気がします。
