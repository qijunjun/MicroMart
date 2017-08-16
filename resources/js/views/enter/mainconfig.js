/**
 * Created by 123 on 2017/8/16.
 */
require.config({
    paths:{
        jquery:"../../libs/jquery",
        swiper:"../../plugs/swiper.jquery"
    }
});
require(["jquery","swiper"],function(){
    var topSlider = new Swiper('.swiper-container', {
        autoplay: 3000,
        speed: 300,
        direction: 'horizontal',
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination'
    })
});