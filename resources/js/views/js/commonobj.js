/**
 * Created by 123 on 2017/8/16.
 */
define(function(require){
   // canvas加载图片
    return {
        loadCanvas: function () {
            var imgLength = $("#product").find("canvas").length;
            if (imgLength > 0) {
                $("#product").find("canvas").each(function () {
                    var imgSrc = $(this).attr("data-src");
                    var imgObj = new Image();
                    imgObj.canvas = $(this)[0];
                    var ctx = imgObj.canvas.getContext("2d");
                    if (ctx) {
                        imgObj.onload = function () {
                            imgObj.canvas.width = $(this)[0].width;
                            imgObj.canvas.height = $(this)[0].height;
                            ctx.drawImage($(this)[0], 0, 0);
                            $(imgObj.canvas).css("backgroundImage", "none");
                        };
                        imgObj.src = imgSrc;
                    }
                })
            }
        }
    }
});
