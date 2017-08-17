/**
 * Created by 123 on 2017/8/16.
 */
$(function () {
    var optionProvince = "<option value='0'>--请选择省份--</option>";
    var oProvince = $("#province");
    var oCity = $("#city");
    var oDistricts = $("#xian");
    //存储地址
    localStorage.setItem("area",area);
    // 通过省份获取城市
    console.log(area);
    function getCity(province) {
        for (var i in area) {
            if (area[i].id == province)
                break;
        }
        return {number: i, cities: area[i].cities};
    }
    //通过省份和城市获取地区
    function getDistrict(province, city) {
        for (var i in area[getCity(province).number].cities) {
            if (area[getCity(province).number].cities[i].id == city) {
                break;
            }
        }
        return area[getCity(province).number].cities[i].districts;
    }


    for(var i=0;i<area.length;i++){
        optionProvince += "<option value='"+area[i].id+"'>"+area[i].name+"</option>";
    }
    oProvince.append(optionProvince);
    // 省份改变，联动城市
    oProvince.change(function(){
        oCity.empty();
        var optionCity = "<option value='0'>--请选择城市--</option>";
        for(var j=0;j<getCity($(this).val()).cities.length;j++){
            optionCity += "<option value='"+getCity($(this).val()).cities[j].id+"'>"+getCity($(this).val()).cities[j].name+"</option>";
        }
        oCity.append(optionCity);
    });
    // 城市改变，联动区域
    oCity.change(function(){
        oDistricts.empty();
        var optionDistricts = "<option value='0'>--请选择地区--</option>";
        for(var m=0;m<getDistrict($(this).prev().val(), $(this).val()).length;m++){
            optionDistricts += "<option value='"+getDistrict($(this).prev().val(), $(this).val())[m].id+"'>"+getDistrict($(this).prev().val(), $(this).val())[m].name+"</option>";
        }
        oDistricts.append(optionDistricts);
    });
    $("ul li > div").click(function(){
        $("ul li input").removeClass("active");
        $(this).children("input").addClass("active");
        $("#newAddress").next().hide();
    });
    $("#newAddress").click(function(){
        $(this).next().show();
    });
    $(".voiceslist ul li p").click(function(){
        $("#piao").toggleClass("active");
        $(this).next().toggleClass("show");
        return false;

    })
});