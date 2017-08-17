/**
 * Created by 123 on 2017/8/16.
 */
$(function () {
    var oCartNum = $("#cartNum");
    if(oCartNum.html()){
        oCartNum.removeClass("hide");
    }
   $(".add").click(function(){
       if(isNaN(parseInt($(this).prev().val())) || $(this).prev().val()<1){
           $(this).prev().val(1);
           return false;
       }
       var num=parseInt($(this).prev().val())+1;
       $(this).prev().val(num);
   });
    $(".reduce").click(function(){
        if(isNaN(parseInt($(this).next().val())) || $(this).next().val()<2){
            $(this).next().val(1);
            return false;
        }
        var num=parseInt($(this).next().val())-1;
        $(this).next().val(num);
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
            $obj.css({'left': x,'top': y}).animate({'left': X,'top': Y-80},800,function() {
                $obj.stop(false, false).animate({'top': Y-20,'opacity':0},800,function(){
                    $obj.fadeOut(300,function(){
                        $obj.remove();
                        oCartNum.removeClass("hide");
                        oCartNum.html(parseInt($("#num").val()) + parseInt(oCartNum.html()));
                    });
                });
            });
        }
    });
    $(".del").click(function(){
       $("#list").hide(); 
       $("#null").show();
        $(this).parent().hide();
    });
    $(".delete").click(function(){
       $(this).parent().parent().hide().addClass("hide");
        if($("#list .hide").length==4){
            $("#null").show();
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