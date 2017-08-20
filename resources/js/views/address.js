/**
 * Created by 123 on 2017/8/16.
 */
$(function () {
    var oUsername = $("#username");
    var oTel = $("#tel");
    var oAddress = $("#addressDetial");
    var oProvince = $("#province");
    var oCity = $("#city");
    var oDistrict = $("#xian");
    var nameVal=oUsername.val();
    var telVal = oTel.val();
    // 选中索引使用get(0)把jq对象转换为js对象，这样才能使用js对应的方法
    var provinceVal,cityVal,districtVal,detailAddressVal;
    //用户名必须是以字母数字下划线开头，5到15位
    var nameReg = /^\w{5,15}$/i;
    var telReg = /0?(13|14|15|18)[0-9]{9}/;
    // 填充地址
    methods.address();
    oUsername.blur(function(){
        methods.checkInput($(this),$(this).val(),"用户名不能为空",true);
    });
    oAddress.blur(function(){
        methods.checkInput($(this),$(this).val(),"详细地址不能为空",true);
    });
    oTel.blur(function(){
        methods.checkInput($(this),$(this).val(),"手机号码不能为空",telReg,"手机号格式不正确");
    });
    oProvince.change(function(){
        methods.checkSelect($(this).find("option:selected"),"provinceError","--请选择省份--","请选择省份");
        methods.checkSelect($(this).next().find("option:selected"),"cityError","--请选择城市--","请选择城市");
    });
    oCity.change(function(){
        methods.checkSelect($(this).find("option:selected"),"cityError","--请选择城市--","请选择城市");
        methods.checkSelect($(this).next().find("option:selected"),"districtError","--请选择地区--","请选择地区");
    });
    oDistrict.change(function(){
        methods.checkSelect($(this).find("option:selected"),"districtError","--请选择地区--","请选择地区");
    });
    //新增地址
    $(".save").click(function(){
        methods.checkInput(oUsername,oUsername.val(),"用户名不能为空",true);
        methods.checkInput(oAddress,oAddress.val(),"详细地址不能为空",true);
        methods.checkInput(oTel,oTel.val(),"手机号码不能为空",telReg,"手机号格式不正确");
        methods.checkSelect($("#province option:selected"),"provinceError","--请选择省份--","请选择省份");
        methods.checkSelect($("#city option:selected"),"cityError","--请选择城市--","请选择城市");
        methods.checkSelect($("#xian option:selected"),"districtError","--请选择地区--","请选择地区");
        if($(".error").length != 0){
            return false;
        }else{
            nameVal = oUsername.val();
            telVal = oTel.val();
            provinceVal = $("#province option:selected").get(0).text;
            cityVal = $("#city option:selected").get(0).text;
            districtVal = $("#xian option:selected").get(0).text;
            detailAddressVal = oAddress.val();
            var oProvinceIndex =oProvince.get(0).selectedIndex-1;
            var oCityIndex =oCity.get(0).selectedIndex-1;
            var oDistrictIndex =oDistrict.get(0).selectedIndex-1;
            var html ="<section><p><span class='name'>"+nameVal+"</span><span>(<b class='tel'>"+telVal+"</b>)</span></p><p><span class='province' data-selectIndex='"+oProvinceIndex+"' data-id='"+oProvince.val()+"'>"+provinceVal+"</span><span class='city' data-selectIndex='"+oCityIndex+"' data-id='"+oCity.val()+"' >"+cityVal+"</span><span class='district' data-selectIndex='"+oDistrictIndex+"' data-id='"+oDistrict.val()+"'>"+districtVal+"</span><span class='detailAddress'>"+detailAddressVal+"</span></p><div><a class='edit'>编辑</a><a class='del'>删除</a></div></section>";
            $("#address").append(html);
            //清空表单内容
            oUsername.val("");
            oTel.val("");
            oAddress.val("");
            $("#province").val("0").attr("selected",true);
            $("#city").val("0").attr("selected",true);
            $("#xian").val("0").attr("selected",true);
        }
        $(".del").click(function (e) {
            e.stopPropagation();
            methods.delete($(this));
        });
        $(".edit").click(function(e){
            e.stopPropagation();
            methods.edit($(this));
        })
    });
    // 删除地址
    $(".del").click(function () {
        methods.delete($(this));
    });
    //编辑地址
    $(".edit").click(function(e){
        e.stopPropagation();
        methods.edit($(this));
    })
});