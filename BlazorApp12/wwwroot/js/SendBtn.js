async function sendTextToServer(text) {

    const base64 = btoa(text); // クライアント側でBase64エンコード

    // サーバー側のC#関数呼び出し

    //await DotNet.invokeMethodAsync('JSONtest', 'ReceiveBase64FromClient', base64);

}
//ポップアップひな形

var ques_id = "<div class='container my-4 blur-q'><div class='popover popR' role='tooltip' id='";
var ques_no = "'><div class='arrow arrow-left'></div><h3 class='popover-header popR'><img src ='img/q.svg' width='24' height='24'/>";
var ques_cpy = "<img src ='img/copy.svg' width='24' height='24' alt='copy' onclick='";
var ques_txt = "'/></h3><div class='popover-body'>";
var ques_end = "</div></div>";

var ans_id = "<div class='container my-4 blur-a'><div class='popover popL' role='tooltip' id='";
var ans_no = "'><div class='arrow arrow-right'></div><h3 class='popover-header'><img src ='img/ai.svg' width='24' height='24'/>";
var ans_cpy = "<img src ='img/copy.svg' width='24' height='24'";
var ans_txt = "'/></h3><div class='popover-body'>";
var ans_end = "</div></div>";

var Tcnt = "1";

var $result;

async function JQA_ins(txt) {

    $result = $('div[name="scr2"]');

    //ポップアップ生成

    var inp_no = Tcnt;
    var ix1 = String(inp_no);
    var ix2 = String(inp_no + "a");

    if (ix1 in GansData) {
    } else {
        Tcnt = 1; return;
        //alert("データ番号が違います"); return;
    }
    if (ix1 in GansData) {
    } else {
        Tcnt = 1; return;
        //alert("回答データはありません"); return;
    }

    Jcre_ques(
        "popover" + ix1,
        "&nbsp;質問　&nbsp;&nbsp;&nbsp;",
        "alert('copyしました')",
        GansData[ix1]);
    Jcre_ans(
        "popover" + ix2,
        "&nbsp;回答　&nbsp;&nbsp;&nbsp;",
        "alert('copyしました')",
        GansData[ix2]);
    Tcnt++;
    Jscroll(Tcnt);
};
//質問生成
async function Jcre_ques(pid, pno, pcpy, ptxt) {
    var div = [];
    div.push(ques_id + pid);
    div.push(ques_no + pno);
    div.push(ques_cpy + pcpy);
    div.push(ques_txt + ptxt + ques_end);
    var buf = div.join("");
    $result.append(buf);
}

//回答生成
async function Jcre_ans(pid, pno, pcpy, ptxt) {
    var div = [];
    div.push(ans_id + pid);
    div.push(ans_no + pno);
    div.push(ans_cpy + pcpy);
    div.push(ans_txt + ptxt + ans_end);
    div.push("<div id='no" + Tcnt + "'></div>");
    var buf = div.join("");
    $result.append(buf);
}


window.JS_Jscroll = function (Pcnt) {
    //console.log("C#から受け取ったオブジェクト:", Pcnt);

    Jscroll(Pcnt);

    // JSからC#のメソッドを呼び出す
    //dotNetHelper.invokeMethodAsync("SetResponseFromJS", "こんにちは、JSからのメッセージです！");
};
