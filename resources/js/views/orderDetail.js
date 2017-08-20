/**
 * Created by 123 on 2017/8/16.
 */
$(function () {
    $(".tabNav li").delegate("a","click",function(){
        var link = $(this).attr("data-link");
        $(this).parent().addClass("active").siblings().removeClass("active");
        $("article").hide();
        if(link == "#fahuo"){
            if($("#fahuo section").length != 1){
                $("#fahuo section.nullOrder").hide();
                $("#fahuo section.order").show();
            }
        }
        $(link).show();
    });
    $(".look").on("click",function () {
        $("article").hide();
        $("#order").show();
    });
    $(".cancle").click(function(){
        $(this).parent().parent().parent().remove();
        if($("#fukuan section").length == 1){
            $("#fukuan").find(".noFukuan").show();
        }
    });
    // 请求物流信息
    var res={"status":"3","message":"","errCode":"0","data":[{"time":"收件时间2017-08-10 17:10","context":"已收件 收件人：王光 "},{"time":"发出时间：2017-08-11 17:59","context":"已从聊城徐营镇发出"},{"time":"到达时间：2017-08-11 18:11","context":"已到达济南中转部"},{"time":"发出时间2017-08-12 07:33","context":"已从济南中转部发出"},{"time":"到达时间：2017-08-12 16:47","context":"已到达柘城胡襄镇"},{"time":"派件时间：2017-08-12 16:47","context":"正在派件，业务员联系电话：0370-73333338"}],"html":"","mailNo":"7151900624","expTextName":"圆通快递","expSpellName":"yuantong","update":"1362656241","cache":"186488","ord":"ASC"};
    var html="<h3 class='pd15'>订单跟踪</h3>";
   for(var i=0;i<res.data.length;i++){
       html +="<p class='mt10 mb10'>您的快件【<span>"+res.mailNo+"</span>】<span class='name pl15'>"+res.data[i].context+"</span>，<span class='time'>"+res.data[i].time+"</span></p>"
   }
    $("#wuliu").append(html);
});