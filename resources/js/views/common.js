/**
 * Created by 123 on 2017/8/16.
 */
$(function(){
    //幻灯片
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay : 3000,
        speed:300,
        direction: 'horizontal',
        loop: true
        // 如果需要分页器
        // pagination: '.swiper-pagination'
    });
    // 使用canvas加载图片
    var imgLength = $("#product").find("canvas").length;
    canvasImg();
    function canvasImg(){
        if(imgLength>0){
            $("#product").find("canvas").each(function () {
                var imgSrc = $(this).attr("data-src");
                var imgObj = new Image();
                imgObj.canvas = $(this)[0];
                var ctx = imgObj.canvas.getContext("2d");
                if(ctx){
                    imgObj.onload=function () {
                        imgObj.canvas.width = $(this)[0].width;
                        imgObj.canvas.height = $(this)[0].height;
                        ctx.drawImage($(this)[0],0,0);
                        $(imgObj.canvas).css("backgroundImage","none");
                    };
                    imgObj.src=imgSrc;
                }
            })
        }
    }
    //模拟数据
    var json =[{img:"resources/images/product1.png"},{img:"resources/images/product1.png"},{img:"resources/images/product1.png"},{img:"resources/images/product1.png"}];
    // 滚动加载
    $(window).scroll(function () {
        jiazai();
    });
    
    function jiazai() {
        var pageH = $(document).height();
        var scrollTop=$(window).scrollTop();
        var winH= $(window).height();
        var section;
        if(parseInt(winH)+parseInt(scrollTop)+50>=parseInt(pageH)){
            
            for(var i=0;i<json.length;i++){
                section ="<section class='clearfix'><div class='left float_left'><div class='title'><span>免费</span></div><canvas data-src='"+json[i].img+"'></canvas></div><div class='right float_left'><h3>广联达变更算量</h3><p>造价业务-常用算量</p><p class='price'><span>微信价:<b class='newprice'>&yen;5000</b></span><span>原价:<b class='oldprice'>&yen;5500</b></span></p></div></section>"
            }
            $("#product").append(section);
        }
        canvasImg();
    }
});
