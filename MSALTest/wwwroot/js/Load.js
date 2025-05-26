function JBase64Json(base64String) {
    //const jsonStr = atob(base64String); // Base64をデコード
    const jsonStr = decodeURIComponent(escape(atob(base64String))); // 日本語の文字化けがあったので、UTF-8に
    const jsonData = JSON.parse(jsonStr); // JSON文字列を配列/オブジェクトに変換

    //console.log("デコード済みJSON:", jsonData);

    // 配列変換処理
    JdataConv(jsonData);
}

var GansData;
function JdataConv(data) {
    // 例: JSONが配列である前提で各要素を出力
    //data.forEach(item => {
    //    console.log(item);
    //});
    //alert("JS関数が呼ばれました。データ件数: " + data.length);
    GansData = data;
}

