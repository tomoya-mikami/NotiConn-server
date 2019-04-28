const { resolve } = require('path');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // mode: "production",
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
    target: 'node',
    // メインのJS
    entry: "./dist/index.js",
    // 出力ファイル
    output: {
        filename: "bundle.js"
    }
}
