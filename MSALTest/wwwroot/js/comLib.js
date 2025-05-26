//要素を文字列として配列に push() して最後に join() して innerHTML する

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

var Tcnt = 1;

var $result;

async function JQA_ins(inp_no=Tcnt) {

    $result = $('div[name="scr2"]');

    //ポップアップ生成

    var inp = eval(inp_no);
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

//ポップアップ追加
function Jscroll(Pcnt){
  var pelm = "#no"+Pcnt;
  //$('div[name="scr2"]').animate({scrollTop:$(pelm).offset().top});
  $('div[name="scr2"]').scrollTop($('div[name="scr2"]')[0].scrollHeight);
  $('.blur-q,.blur-a').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(pelm).scrollTop(),
    windowHeight = $(pelm).height();
      $(this).addClass('scrollin');
  });
}
//スクロールクリア
$(function(){
  $('#newChat').click(function(){
    $('div[name="scr2"]').empty();
  });
});
//オプション選択
$(function () {
  $('input[type="radio"]').change(function(){

    var ix = $('[name="flexRadio"]').index($(this)) -1;
    JactDis_opt(ix);

  });
});

//オプション選択 活性/非活性actDis_opt
function JactDis_opt(ix){
  if(ix<-1){return;}
  $('input[role="switch"]').attr("disabled",true);
  if(ix==-1){return;}
  if(ix==0){
    $('#chatselect1 input[role="switch"]').attr("disabled",false);
    $('div[name="scr1"]').scrollTop(0);
  }
  if(ix==1){
    $('#chatselect2 input[role="switch"]').attr("disabled",false);
    $('div[name="scr1"]').scrollTop($('div[name="scr1"]')[0].scrollHeight);
  }
};

$(function(){
  //プルダウン初期化
  JactDis_opt(-1);
  $('#newChat').trigger("click");
  $('.ellipsis').removeClass('curLin');
  $('.ellipsis').eq(0).addClass('curLin');
});

/*
//ポップアップ組み立て
function JQA_ins(){
  $result = $('div[name="scr2"]');
  Jcre_ques(
    "popover328533",
    "&nbsp;質問　&nbsp;&nbsp;&nbsp;",
    "alert('copyしました')",
    "・サーマル製品である電動ファンの流体解析の事例を教えてください");
  Jcre_ans(
    "popover328533",
    "&nbsp;回答　&nbsp;&nbsp;&nbsp;",
    "",
    "\"これまでのエージェントからの回答を要約すると、両方のエージェントは「電動ファンの流体解析に関する具体的な事例を取得することができませんでした」と回答しています。"+
    "この点で意見は一致しています。<br><br>食い違う点は特にありませんが、どちらのエージェントも具体的な事例の情報は提供できていません。<br><br>"+
    "結論として、サーマル製品である電動ファンの流体解析に関する具体的な事例については、現在のところ情報が不足していることが確認されました。<br><br>"+
    "**エージェントの意見**<br>- MPDR_AI_expert: 「申し訳ありませんが、サーマル製品である電動ファンの流体解析に関する具体的な事例についての情報は得られませんでした。他にお知りになりたいことがあればお知らせください。」<br>"+
    "- SSMMater_expert: 「申し訳ありませんが、電動ファンの流体解析に関する具体的な事例を取得することができませんでした。他に知りたい情報や関連する質問があればお知らせください。」\"<br>");
    //var position = target.offset().top - 50;
    //$('div[name="scr2"]').animate({scrollTop:$('#no123').offset().top});
  Jscroll(Tcnt);
  Tcnt++;
};
*/
//end
