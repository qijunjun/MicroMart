/**
 * Created by 123 on 2017/8/16.
 */
$(function () {
    var num=0;
    var oNum =$("#num");
    var oCartNum = $("#cartNum");
    if(oCartNum.html()){
        oCartNum.removeClass("hide");
    }
   $("#add").click(function(){
       if(isNaN(parseInt(oNum.val())) || oNum.val()<0){
           oNum.val(1);
           return false;
       }
       num=parseInt(oNum.val())+1;
       oNum.val(num);
   });
    $("#reduce").click(function(){
        if(isNaN(parseInt(oNum.val())) || num<1){
            oNum.val(1);
            return false;
        }
        num=parseInt(oNum.val())-1;
        oNum.val(num);
    });
    $("#addBtn").click(function(){
        if(!oCartNum.html()){
            oCartNum.html(0);
        }
        var productimg=$("#productimg"),
            imgsrc=$("#productimg").children("img").attr("src"),
            x = productimg.offset().left+ 30,
            y = productimg.offset().top -10,
            X = $("#n-1").offset().left,
            Y = $("#n-1").offset().top;
        if ($('#flydiv').length <= 0) {
            $('body').append('<div id="flydiv"><img src="'+imgsrc+'" width="50" height="50"></div>');
        }
        var $obj=$('#flydiv');
        if(!$obj.is(':animated')){
            $obj.css({'left': x,'top': y}).animate({'left': X,'top': Y-80},500,function() {
                $obj.stop(false, false).animate({'top': Y-20,'opacity':0},500,function(){
                    $obj.fadeOut(300,function(){
                        $obj.remove();
                        oCartNum.removeClass("hide");
                        oCartNum.html(parseInt(oNum.val()) + parseInt(oCartNum.html()));
                    });
                });
            });
        }
    });
    // 阻止事件冒泡
    function doSomething(obj,evt){
        var e = evt?evt:window.event;
        if(window.event){
            e.cancelBubble = true;//IE下阻止事件冒泡
        }else{
            e.stopPropagation();
        }
    }
});